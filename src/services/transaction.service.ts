import { axiosInstance } from "@/axios";
import { Transaction } from "@/types";

export const transactions = async (): Promise<Transaction[]> => {
  const { data } = await axiosInstance.get(`/transactions`);
  return data.data.contents;
};

export const getTransactionDetail = async (transactionId: string) => {
  const { data } = await axiosInstance.get(`/transactions/${transactionId}`);
  return data.data.contents;
};
