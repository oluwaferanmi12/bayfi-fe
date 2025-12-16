import { Wallet } from "@/types";
import { create } from "zustand";

type WalletType = {
  wallet: Wallet | null;
  setWallet: (val: Wallet | null) => void;
  clearWallet: () => void;
};

export const useWalletStore = create<WalletType>((set) => ({
  wallet: null,
  setWallet: (wallet) => {
    set({ wallet });
  },
  clearWallet: () => set({ wallet: null }),
}));
