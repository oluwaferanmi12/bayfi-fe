import {
  accountNameLookup,
  bankList,
  bankSearch,
  deleteBeneficiary,
  disburse,
  getBeneficiary,
  saveBeneficiary,
} from "@/services";
import { AccountLookUpInterface, Bank, Disburse } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetBeneficiary = () => {
  return useQuery({
    queryKey: ["get-beneficiary"],
    queryFn: getBeneficiary,
  });
};

export const useSaveBeneficiary = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: saveBeneficiary,
    onSuccess: sc,
  });
};

export const useDeleteBeneficiary = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: deleteBeneficiary,
    onSuccess: sc,
  });
};

export const useGetBankSearch = (query: string) => {
  return useQuery({
    queryKey: ["bank-search", query],
    queryFn: () => bankSearch(query),
    enabled: !!query,
  });
};

export const useGetBankList = () => {
  return useQuery({
    queryKey: ["get-banks"],
    queryFn: bankList,
  });
};

export const useAccountLookup = (payload: AccountLookUpInterface) => {
  return useQuery({
    queryKey: [payload, "account-lookup"],
    queryFn: () => accountNameLookup(payload),
    enabled: !!(
      payload.accountNumber &&
      payload.accountNumber.length === 10 &&
      payload.bankCode
    ),
  });
};

export const useDisburse = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: disburse,
    onSuccess: sc,
  });
};
