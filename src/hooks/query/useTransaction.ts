import { getTransactionDetail, transactions } from "@/services";
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
  });
};


