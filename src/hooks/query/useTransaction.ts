import { transactions } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetTransaction = () => {
  return useQuery({
    queryFn: transactions,
    queryKey: ["transactions"],
  });
};
