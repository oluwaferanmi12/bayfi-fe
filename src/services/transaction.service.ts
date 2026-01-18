import { axiosInstance } from "@/axios";
import { PaginationReturn } from "@/interfaces/interfaces";
import { Transaction, TransactionMeta, TransactionSummary } from "@/types";

export const transactions = async (
  meta: TransactionMeta
): Promise<{ data: Transaction[]; metadata: PaginationReturn }> => {
  const { data } = await axiosInstance.get(
    `/transactions?page=${meta.page}&pageSize=${meta.pageSize}&search=${meta.search}`
  );
  // return data.data;
  return { data: data.data, metadata: data.metadata };
};

export const getTransactionDetail = async (transactionId: string) => {
  const { data } = await axiosInstance.get(`/transactions/${transactionId}`);
  return data.data;
};

export const transactionSummary = async (): Promise<TransactionSummary> => {
  const { data } = await axiosInstance.get(`/wallets/user/summary`);
  return data.data;
};
