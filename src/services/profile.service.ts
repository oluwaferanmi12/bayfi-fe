import { axiosInstance } from "@/axios";
import {
  ChangePasswordPayload,
  KYC,
  PostProfileInterface,
  ProfileDataInterface,
  TierDetails,
  UpdatePin,
} from "@/types";

export const fetchUserProfileService =
  async (): Promise<ProfileDataInterface> => {
    const { data } = await axiosInstance.get("/user/profile");
    return data.data;
  };

export const updateProfile = async (payload: PostProfileInterface) => {
  const { data } = await axiosInstance.put("/user/profile", payload);
  return data;
};

export const getUser = async () => {
  const { data } = await axiosInstance.get("/user");
  return data;
};

export const changePassword = async (payload: ChangePasswordPayload) => {
  const { data } = await axiosInstance.post(`/user/password`, payload);
  return data;
};

export const logout = async () => {
  const { data } = await axiosInstance.post(`/auth/logout`);
  return data;
};

export const doKycBvn = async (payload: KYC) => {
  const { data } = await axiosInstance.post(`/kyc/bvn/verify`, payload);
  return data;
};

export const doKycNin = async (payload: { nin: string }) => {
  const { data } = await axiosInstance.post(`/kyc/nin/verify`, payload);
  return data;
};

export const tiers = async (): Promise<TierDetails[]> => {
  const { data } = await axiosInstance.get("/user/tiers");
  return data.data;
};
