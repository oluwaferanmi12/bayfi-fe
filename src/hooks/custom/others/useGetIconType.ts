import { Transaction } from "@/types";
import { useMemo } from "react";
import withdrawIcon from "@/assets/svg/green-withdraw-icon.svg";
import bitcoinIcon from "@/assets/svg/bitcoing1Icon.svg";
import topUpIcon from "@/assets/svg/topUpIcon.svg";
import blueGiftCardIcon from "@/assets/svg/blue-giftcard-icon.svg";
import boxIcon from "@/assets/svg/reward-box.svg";

export const useGetTransactionIconType = (transaction?: Transaction) => {
  const iconType = useMemo(() => {
    if (transaction?.transactionCategory?.toLowerCase()?.includes("bitcoin")) {
      return bitcoinIcon;
    } else if (
      transaction?.transactionCategory?.toLowerCase().includes("gift")
    ) {
      return blueGiftCardIcon;
    } else if (
      transaction?.transactionCategory.toLowerCase().includes("wallet")
    ) {
      return topUpIcon;
    } else if (
      transaction?.transactionCategory.toLowerCase().includes("withdraw")
    ) {
      return withdrawIcon;
    } else if (
      transaction?.transactionCategory.toLocaleLowerCase().includes("reward")
    ) {
      return boxIcon;
    }
  }, [transaction]);
  return iconType;
};
