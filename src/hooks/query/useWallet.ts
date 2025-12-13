import { getWallet, toggleStatus } from "@/services";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetWallet = () => {
  return useQuery({
    queryKey: ["get-wallet"],
    queryFn: getWallet,
  });
};

export const useToggleWalletStatus = (onSuccess: (val: any) => void) => {
  return useMutation({
    mutationFn: toggleStatus,
    onSuccess,
  });
};
