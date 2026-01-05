import Image from "next/image";
import { Transaction, TransactionCategory } from "@/types";
import { FormatNumber } from "@/utils/formatter";
import { momentLocal } from "@/utils/moment-local";
import { useGetTransactionIconType } from "@/hooks/custom/others/useGetIconType";

export const DashboardTransactionWrapper = ({
  transaction,
}: {
  transaction?: Transaction;
}) => {
  const iconType = useGetTransactionIconType(transaction);
  return (
    <div className="hover:bg-[#F6F6F6] mb-2 lg:px-4  lg:py-2 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image className="w-10 aspect-square" src={iconType} alt="" />
        {transaction && (
          <div>
            <p className="text-[#171717] font-grotesk-semi-bold text-lg">
              {TransactionCategory[transaction!.transactionCategory]}
            </p>
            <p className="text-[#747474] text-sm font-grotesk-medium">
              {transaction?.transactionType}
            </p>
          </div>
        )}
      </div>
      <div>
        <p className="text-[#171717] font-grotesk-bold text-right text-lg">
          {(transaction?.currency ?? "NGN") +
            " " +
            `${FormatNumber(transaction?.amount ?? 0)}`}
        </p>
        <p className="text-[#747474] text-sm font-grotesk-medium text-right">
          {transaction?.createdAt
            ? momentLocal(transaction.createdAt).format("YYYY-MM-DD HH:mm")
            : ""}
        </p>
      </div>
    </div>
  );
};
