import { axiosInstance } from "@/axios";
import { Wallet } from "@/types";

export const getWallet = async (): Promise<Wallet> => {
  const { data } = await axiosInstance.get(`/wallets/balance`);
  return data.data;
};
