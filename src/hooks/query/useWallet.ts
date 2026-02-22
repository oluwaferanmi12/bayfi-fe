import { getWallet, saveBeneficiary, toggleStatus } from "@/services";
import { SaveBeneficiary } from "@/types";
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
