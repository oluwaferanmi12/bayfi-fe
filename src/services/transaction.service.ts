import { axiosInstance } from "@/axios";
import { Transaction, TransactionSummary } from "@/types";

export const transactions = async (): Promise<Transaction[]> => {
  const { data } = await axiosInstance.get(`/transactions`);
  return data.data;
};

export const getTransactionDetail = async (transactionId: string) => {
  const { data } = await axiosInstance.get(`/transactions/${transactionId}`);
  return data.data;
};

export const transactionSummary = async (): Promise<TransactionSummary> => {
  const { data } = await axiosInstance.get(`/wallets/user/summary`);
  return data.data;
};
