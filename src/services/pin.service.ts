import { axiosInstance } from "@/axios";
import { UpdatePin } from "@/types";

export const createPin = async (pin: string) => {
  const result = await axiosInstance.post(`/user/pin`, { pin });
  return result.data;
};

export const updatePin = async (payload: UpdatePin) => {
  const { data } = await axiosInstance.put(`/user/pin`, payload);
  return data;
};
