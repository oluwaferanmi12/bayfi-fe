import {
  getTransactionDetail,
  transactionLog,
  transactions,
  transactionSummary,
} from "@/services";
import { TransactionMeta } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetTransaction = (payload: TransactionMeta) => {
  return useQuery({
    queryFn: () => transactions(payload),
    queryKey: ["user-transaction", payload],
  });
};

export const useGetTransactionId = (transactionId: string) => {
  return useQuery({
    queryFn: () => {
      return getTransactionDetail(transactionId);
    },
    queryKey: ["get-transaction-detail"],
    enabled: !!transactionId,
  });
};

export const useGetTransactionSummary = () => {
  return useQuery({
    queryFn: () => transactionSummary(),
    queryKey: ["transaction-summary"],
  });
};

export const useGetTransactionLog = (id: string) => {
  return useQuery({
    queryKey: ["transaction-log", id],
    queryFn: () => transactionLog(id),
    enabled: !!id,
  });
};
