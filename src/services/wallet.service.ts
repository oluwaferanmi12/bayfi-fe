import { axiosInstance } from "@/axios";
import { SaveBeneficiary, Wallet } from "@/types";

export const getWallet = async (): Promise<Wallet> => {
  const { data } = await axiosInstance.get(`/wallets/balance`);
  return data.data;
};

export const toggleStatus = async (visibility: boolean) => {
  const result = await axiosInstance.put(
    `/wallets/toggle-status?visibility=${visibility}`,
  );
  return result.data;
};
