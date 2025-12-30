import {
  DashboardTransactionWrapper,
  DashboardTransactionWrapper as TransactionWrapper,
} from "@/components/transaction/dashboard-transaction-wrapper";
import { Transaction } from "@/types";

export const MobileTransactionWrapper = ({
  transactions,
}: {
  transactions?: Transaction[];
}) => {
  return (
    <div className="my-4">
      <p className="text-bayfi-black-900 text-lg mb-3  font-grotesk-semi-bold">
        Transaction History
      </p>
      <div className="bg-white border p-4 rounded-lg border-[#EAECF0]">
        {transactions && transactions.length ? (
          transactions.map((item) => {
            return (
              <DashboardTransactionWrapper key={item.id} transaction={item} />
            );
          })
        ) : (
          <div>
            <p className="text-center">No transactions</p>
          </div>
        )}
      </div>
    </div>
  );
};
