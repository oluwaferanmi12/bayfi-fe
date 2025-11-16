import { axiosInstance } from "@/axios";
import { PostProfileInterface } from "@/types/profile.types";

export const fetchUserProfileService = async () => {
  const { data } = await axiosInstance.get("/user/profile");
  return data.data;
};

export const updateProfile = async (payload: PostProfileInterface) => {
  const { data } = await axiosInstance.post("/user/profile", payload);
  return data;
};
