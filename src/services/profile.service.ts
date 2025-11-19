import { axiosInstance } from "@/axios";
import { PostProfileInterface, UpdatePin } from "@/types";

export const fetchUserProfileService = async () => {
  const { data } = await axiosInstance.get("/user/profile");
  return data.data;
};

export const updateProfile = async (payload: PostProfileInterface) => {
  const { data } = await axiosInstance.post("/user/profile", payload);
  return data;
};

export const updatePin = async (payload: UpdatePin) => {
  const { data } = await axiosInstance.put(`/user/pin`);
  return data;
};

export const logout = async () => {
  const { data } = await axiosInstance.post(`/auth/logout`);
  return data;
};
