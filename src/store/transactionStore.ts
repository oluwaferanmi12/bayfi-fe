import { Transaction } from "@/types";
import { create } from "zustand";

type TransactionStoreType = {
  selectedTransaction: Transaction | null;
  setSelectedTransaction: (val: Transaction | null) => void;
  clearSelectedTransaction: () => void;
};

export const useTransactionStore = create<TransactionStoreType>((set) => ({
  selectedTransaction: null,
  setSelectedTransaction: (selectedTransaction) => {
    set({ selectedTransaction });
  },
  clearSelectedTransaction: () => set({ selectedTransaction: null }),
}));
