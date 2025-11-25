import { axiosInstance } from "@/axios";

export const transactions = async () => {
  const { data } = await axiosInstance.get(`/transactions`);
  return data.data.contents;
};

export const getTransactionDetail = async (transactionId: string) => {
  const { data } = await axiosInstance.get(`/transactions/${transactionId}`);
  return data.data.contents;
};
