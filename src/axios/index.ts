// axios.ts
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  getAccessToken,
  getRefreshToken,
  clearAuth,
  updateAccessToken,
} from "@/utils";
import { toast } from "sonner";


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const REFRESH_URL = "/auth/admin/refresh"; 

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Use a *separate* client for refresh to avoid interceptor recursion
const refreshClient = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  (config) => {
    const access = getAccessToken();
    if (access) {
      config.headers = config.headers ?? {};
      (config.headers ).Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;
let requestQueue: Array<(token: string | null) => void> = [];

function subscribeTokenRefresh(cb: (token: string | null) => void) {
  requestQueue.push(cb);
}
function onRefreshed(token: string | null) {
  requestQueue.forEach((cb) => cb(token));
  requestQueue = [];
}

async function refreshAccessToken(): Promise<string | null> {
  const refresh = getRefreshToken?.();
  if (!refresh) return null;

  // POST body/shape depends on your API
  const { data } = await refreshClient.post(REFRESH_URL, {
    refreshToken: refresh,
  });
  console.log("Refresh Token VAlue", data);
  const newAccess = data?.data?.accessToken;

  if (!newAccess) return null;
  updateAccessToken?.(newAccess);
  return newAccess;
}

// ===== Response interceptor: handle 401s with a single refresh =====
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Not an auth error or already retried -> just reject
    if (status !== 401 || originalRequest?._retry) {
      console.log(error, "Error here");
      console.log(error.message);
      // @ts-expect-error: error.response.data.message may not exist on all error types
      toast.error(error?.response?.data?.message);
      return Promise.reject(error);
    }

    // mark so we don't loop
    originalRequest._retry = true;

    // Start a single refresh request; queue others
    if (!isRefreshing) {
      isRefreshing = true;
      refreshPromise = refreshAccessToken()
        .then((token) => {
          onRefreshed(token);
          return token;
        })
        .catch(() => {
          onRefreshed(null);
          return null;
        })
        .finally(() => {
          isRefreshing = false;
        });
    }

    // Wait for the refresh result, then retry or logout
    return new Promise((resolve, reject) => {
      subscribeTokenRefresh(async (newToken) => {
        if (!newToken) {
          // Refresh failed – clear auth and bubble up
          try {
            clearAuth?.();
          } catch {}
          return reject(error);
        }

        // Set header and retry original
        originalRequest.headers = originalRequest.headers ?? {};
        (originalRequest.headers ).Authorization = `Bearer ${newToken}`;

        try {
          const resp = await axiosInstance(originalRequest);
          resolve(resp);
        } catch (e) {
          reject(e);
        }
      });

      // ensure refresh kicks off
      void refreshPromise;
    });
  }
);
