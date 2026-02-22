import { Button } from "@/components/buttons";
import { Loader } from "@/components/loader/general-loader";
import { TableStatus } from "@/components/status/table-status";
import chatIcon from "@/assets/svg/chat-message-icon.svg";
import giftcardSmallIcon from "@/assets/svg/giftCardMobileIcon.svg";
import withdrawIcon from "@/assets/svg/green-withdraw-icon.svg";
import {
  GiftCardTransactionLog,
  Transaction,
  WalletTransactionLog,
} from "@/types";
import { FormatNumber } from "@/utils/formatter";
import { timeDefault } from "@/utils/moment-local";
import Image from "next/image";

export const TransactionReceipt = ({
  selectedTxn,
  transactionLog,
  loading,
}: {
  selectedTxn?: Transaction;
  transactionLog?: WalletTransactionLog | GiftCardTransactionLog[];
  loading?: boolean;
}) => {
  if (loading) {
    return <Loader />;
  }

  if (!selectedTxn) {
    return null;
  }

  const isGiftCard = selectedTxn.transactionCategory === "SELL_GIFT_CARD";
  const giftCardTxnLog = Array.isArray(transactionLog)
    ? (transactionLog as GiftCardTransactionLog[])
    : [];
  const walletTxnLog =
    !Array.isArray(transactionLog) && transactionLog
      ? (transactionLog as WalletTransactionLog)
      : undefined;

  const totalGiftCardAmount = giftCardTxnLog.length
    ? giftCardTxnLog.reduce((acc, curr) => {
        return acc + (curr.unitAmountToUser ?? 0);
      }, 0)
    : 0;

  const resolvedStatus: "Success" | "Pending" | "Failed" = selectedTxn.transactionStatus
    .toLowerCase()
    .includes("success")
    ? "Success"
    : selectedTxn.transactionStatus.toLowerCase().includes("fail")
      ? "Failed"
      : "Pending";

  const resolvedStatusText = selectedTxn.transactionStatus
    .toLowerCase()
    .includes("success")
    ? "Completed"
    : selectedTxn.transactionStatus.toLowerCase().includes("fail")
      ? "Failed"
      : "Pending";

  return (
    <>
      {isGiftCard ? (
        <div className="bg-bayfi-black-700 p-4 rounded-lg flex flex-col items-center justify-center gap-1">
          <TableStatus type={resolvedStatus} text={resolvedStatusText} />
          <p className="text-bayfi-green-500 text-2xl font-grotesk-medium">
            NGN{FormatNumber(totalGiftCardAmount || selectedTxn.amount)}
          </p>
          <div className="text-white text-base font-grotesk-regular">
            from {selectedTxn.receiverName}
          </div>

          <div
            style={{ border: "0.5px solid #DCDCDC" }}
            className="mt-4 rounded-lg w-full p-4 bg-[#F5F5F5]"
          >
            <TransactionText
              leftText="Transaction channel"
              rightText="Giftcard sale"
              icon={giftcardSmallIcon}
            />
            <TransactionText
              leftText="Transaction reference"
              rightText={
                giftCardTxnLog[0]?.transactionReference ??
                selectedTxn.transactionReference
              }
            />
            <TransactionText
              noBorder
              leftText="Amount"
              rightText={`NGN ${FormatNumber(totalGiftCardAmount || selectedTxn.amount)}`}
            />

            <Button text="Get receipt" type="bgGreen" loading={false} fullWidth />
            <Button
              icon={chatIcon}
              text="Raise a dispute"
              type="bgPlain"
              loading={false}
              fullWidth
              iconPosition="right"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-bayfi-black-700 p-4 rounded-lg flex flex-col items-center justify-center gap-1">
            <TableStatus type={resolvedStatus} text={resolvedStatusText} />
            <p className="text-bayfi-green-500 text-2xl font-grotesk-medium">
              NGN{FormatNumber(selectedTxn.amount)}
            </p>
            <div className="text-white text-base font-grotesk-regular">
              to{" "}
              <span className="text-white font-grotesk-semi-bold">
                {walletTxnLog?.beneficiaryAccountName ?? selectedTxn.receiverName}
              </span>{" "}
              <span className="text-[#BEDD3A] font-grotesk-medium">
                {walletTxnLog?.beneficiaryBankName ?? ""}
              </span>
            </div>
          </div>
          <div
            style={{ border: "0.5px solid #DCDCDC" }}
            className="mt-4 rounded-lg p-4 bg-[#F5F5F5]"
          >
            <TransactionText
              leftText="Transaction channel"
              rightText="Wallet Withdrawal"
              icon={withdrawIcon}
            />
            <TransactionText
              leftText="Account number"
              rightText={walletTxnLog?.beneficiaryAccountNumber ?? "-"}
            />
            <TransactionText
              leftText="Account name"
              rightText={
                walletTxnLog?.beneficiaryAccountName ?? selectedTxn.receiverName
              }
            />
            <TransactionText
              leftText="Bank name"
              rightText={walletTxnLog?.beneficiaryBankName ?? "-"}
            />
            <TransactionText
              leftText="Date"
              rightText={timeDefault(
                walletTxnLog?.transactionStartDate ?? selectedTxn.createdAt,
              )}
            />
            <TransactionText
              leftText="Reference"
              rightText={walletTxnLog?.reference ?? selectedTxn.transactionReference}
            />
            <TransactionText
              leftText="Session Id"
              rightText={walletTxnLog?.sessionId ?? "-"}
            />
            <TransactionText
              noBorder
              leftText="Amount"
              rightText={`NGN ${FormatNumber(selectedTxn.amount)} `}
            />

            <Button text="Get receipt" type="bgGreen" loading={false} fullWidth />
            <Button
              icon={chatIcon}
              text="Raise a dispute"
              type="bgPlain"
              loading={false}
              fullWidth
              iconPosition="right"
            />
          </div>
        </div>
      )}
    </>
  );
};

const TransactionText = ({
  rightText,
  leftText,
  icon,
  noBorder,
}: {
  rightText: string;
  leftText: string;
  icon?: string;
  noBorder?: boolean;
}) => {
  return (
    <div
      className={`flex ${!noBorder && "border-b border-[#DCDCDC]"} py-3 justify-between items-center font-grotesk-medium text-base`}
    >
      <p>{leftText}</p>
      <div className="flex items-center gap-2">
        {icon && <Image width={24} height={24} src={icon} alt="" />}
        <p className="text-bayfi-black-400 text-right">{rightText}</p>
      </div>
    </div>
  );
};
