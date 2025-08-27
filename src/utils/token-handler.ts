import { LoginResponse } from "@/types";
import { cookieGetter } from "./cookie-handler";
import Cookies from "js-cookie";

export const getAccessToken = () => {
  const user: LoginResponse = cookieGetter("loginDetails");
  return user?.accessToken ?? "";
};

export const getRefreshToken = () => {
  const user: LoginResponse = cookieGetter("loginDetails");
  return user.refreshToken;
};

export const getUserDetails = () => {
  const user: LoginResponse = cookieGetter("loginDetails");
  return user;
};

export const removeAccessToken = () => {
  return "";
};

export const updateAccessToken = (accessToken: string) => {
  const user: LoginResponse = cookieGetter("loginDetails");
  user.accessToken = accessToken;
  Cookies.set("loginDetails", JSON.stringify(user));
};

export const clearAuth = () => {
  Cookies.remove("loginDetails");
  window.location.href = "/login";
};
