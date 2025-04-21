import { TransactionWrapper } from "@/app/(dashboard)/dashboard/page";

export const MobileTransactionWrapper = () => {
  return (
    <div className="my-4">
      <p className="text-bayfi-black-900 text-base mb-3  font-grotesk-semi-bold">
        Transaction History
      </p>
      <div className="bg-white border p-4 rounded-lg border-[#EAECF0]">
        <TransactionWrapper />
        <TransactionWrapper />
        <TransactionWrapper />
        <TransactionWrapper />
      </div>
    </div>
  );
};
