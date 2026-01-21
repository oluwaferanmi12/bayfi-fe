import { axiosInstance } from "@/axios";
import { PaginationReturn } from "@/interfaces/interfaces";
import {
  GiftCardTransactionLog,
  Transaction,
  TransactionMeta,
  TransactionSummary,
  WalletTransactionLog,
} from "@/types";

export const transactions = async (
  meta: TransactionMeta,
): Promise<{ data: Transaction[]; metadata: PaginationReturn }> => {
  const { data } = await axiosInstance.get(
    `/transactions?page=${meta.page}&pageSize=${meta.pageSize}&search=${meta.search}`,
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

export const transactionLog = async (
  id: string,
): Promise<WalletTransactionLog | GiftCardTransactionLog[]> => {
  const { data } = await axiosInstance.get(`/transactions/${id}/log`);
  return data.data;
};
