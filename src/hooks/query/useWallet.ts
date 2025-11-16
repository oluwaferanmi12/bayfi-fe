import { getWallet } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetWallet = () => {
  return useQuery({
    queryKey: ["get-wallet"],
    queryFn: getWallet,
  });
};
