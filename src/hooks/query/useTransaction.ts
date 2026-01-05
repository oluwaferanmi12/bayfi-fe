import {
  getTransactionDetail,
  transactions,
  transactionSummary,
} from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetTransaction = () => {
  return useQuery({
    queryFn: transactions,
    queryKey: ["user-transaction"],
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
