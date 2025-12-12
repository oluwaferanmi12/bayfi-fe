import Image from "next/image";
import withdrawIcon from "@/assets/svg/green-withdraw-icon.svg";
import bitcoinIcon from "@/assets/svg/bitcoing1Icon.svg";
import topUpIcon from "@/assets/svg/topUpIcon.svg";
import blueGiftCardIcon from "@/assets/svg/blue-giftcard-icon.svg";
import { useMemo } from "react";
import { Transaction, TransactionCategory } from "@/types";

export const DashboardTransactionWrapper = ({
  transaction,
}: {
  transaction?: Transaction;
}) => {
  const iconType = useMemo(() => {
    if (transaction?.transactionCategory?.toLowerCase()?.includes("bitcoin")) {
      return bitcoinIcon;
    } else if (
      transaction?.transactionCategory?.toLowerCase().includes("giftcard")
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
    }
  }, [transaction]);
  return (
    <div className="hover:bg-[#F6F6F6] mb-2 px-4 py-2 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image className="w-[40px] aspect-square" src={iconType} alt="" />
        <div>
          <p className="text-[#171717] font-grotesk-semi-bold text-lg">
            {/* {TransactionCategory[transaction.transactionCategory]} */}
          </p>
          <p className="text-[#747474] text-sm font-grotesk-medium">Bitcoin</p>
        </div>
      </div>
      <div>
        <p className="text-[#171717] font-grotesk-bold text-lg">
          NGN 2,000,240.00
        </p>
        <p className="text-[#747474] text-sm font-grotesk-medium text-right">
          11:45 AM
        </p>
      </div>
    </div>
  );
};
