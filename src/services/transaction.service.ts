import { axiosInstance } from "@/axios";

export const transactions = async () => {
  const { data } = await axiosInstance.get(`/api/v1/admin/transactions`);
  return data.data;
};
