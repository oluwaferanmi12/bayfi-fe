import { useGetTransaction } from "@/hooks/query";
import { usePagination } from "../pagination/usePagination";

export const useTransactionTableHook = () => {
  const {
    handleNext,
    handlePrevious,
    handleRefetch,
    handleSearch,
    searchPayload,
  } = usePagination();
  const { data, isPending } = useGetTransaction(searchPayload);

  return {
    data,
    isPending,
    handleNext,
    handlePrevious,
    handleRefetch,
    handleSearch,
    searchPayload,
  };
};
