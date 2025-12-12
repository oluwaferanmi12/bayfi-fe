import {
  DashboardTransactionWrapper,
  DashboardTransactionWrapper as TransactionWrapper,
} from "@/components/transaction/dashboard-transaction-wrapper";

export const MobileTransactionWrapper = () => {
  return (
    <div className="my-4">
      <p className="text-bayfi-black-900 text-lg mb-3  font-grotesk-semi-bold">
        Transaction History
      </p>
      <div className="bg-white border p-4 rounded-lg border-[#EAECF0]">
        <DashboardTransactionWrapper />
        <DashboardTransactionWrapper  />
        <DashboardTransactionWrapper  />
        <DashboardTransactionWrapper  />
        <DashboardTransactionWrapper  />
      </div>
    </div>
  );
}
