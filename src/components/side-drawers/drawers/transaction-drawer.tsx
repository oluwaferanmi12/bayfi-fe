import { SideDrawer } from "../side-drawer";
import { TableStatus } from "@/components/status/table-status";
import { FormatNumber } from "@/utils/formatter";
import {
  GiftCardTransactionLog,
  Transaction,
  WalletTransactionLog,
} from "@/types";
import giftcardSmallIcon from "@/assets/svg/giftCardMobileIcon.svg";
import { Button } from "@/components/buttons";
import chatIcon from "@/assets/svg/chat-message-icon.svg";
import Image from "next/image";
import {  useGetTransactionLog } from "@/hooks/query";
import { useEffect, useMemo, useState } from "react";
import { Loader } from "@/components/loader/general-loader";
import withdrawIcon from "@/assets/svg/green-withdraw-icon.svg";
import { timeDefault } from "@/utils/moment-local";

export const TransactionDrawer = ({
  handleClose,
  openDrawer,
  selectedTxn,
}: {
  handleClose: () => void;
  openDrawer: boolean;
  selectedTxn?: Transaction;
}) => {
  const { data, isLoading } = useGetTransactionLog(selectedTxn?.id ?? "");

  const [giftCardTxnLog, setGiftcardTxnLog] =
    useState<GiftCardTransactionLog[]>();
  const [transactionWalletLog, setTransactionWalletLog] =
    useState<WalletTransactionLog>();

  useEffect(() => {
    if (data) {
      if (selectedTxn?.transactionCategory === "SELL_GIFT_CARD") {
        setGiftcardTxnLog(data as GiftCardTransactionLog[]);
        setTransactionWalletLog(undefined);
      } else {
        setTransactionWalletLog(data as WalletTransactionLog);
        setGiftcardTxnLog([]);
      }
    }
  }, [data, selectedTxn]);

  const totalGiftCardAmount = useMemo(() => {
    if (giftCardTxnLog?.length) {
      return giftCardTxnLog.reduce((acc, curr) => {
        return acc + (curr.unitAmountToUser ?? 0);
      }, 0);
    }
    return 0;
  }, [giftCardTxnLog]);
  return (
    <>
      <SideDrawer
        open={openDrawer}
        onClose={() => {
          handleClose();
        }}
        title="Transaction Details"
      >
        {isLoading ? (
          <Loader />
        ) : giftCardTxnLog?.length ? (
          <div className="bg-bayfi-black-700 p-4 rounded-lg flex flex-col items-center justify-center gap-1">
            <TableStatus
              type={
                selectedTxn?.transactionStatus.toLowerCase().includes("success")
                  ? "Success"
                  : selectedTxn?.transactionStatus
                        .toLowerCase()
                        .includes("fail")
                    ? "Failed"
                    : "Pending"
              }
              text={
                selectedTxn?.transactionStatus.toLowerCase().includes("success")
                  ? "Completed"
                  : selectedTxn?.transactionStatus
                        .toLowerCase()
                        .includes("fail")
                    ? "Failed"
                    : "Pending"
              }
            />
            <p className="text-bayfi-green-500 text-2xl font-grotesk-medium">
              NGN{FormatNumber(totalGiftCardAmount)}
            </p>
            <div className="text-white text-base font-grotesk-regular">
              from {selectedTxn?.receiverName}
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
                leftText="Total amount"
                rightText={`NGN ${FormatNumber(giftCardTxnLog[0].requestTotalToUser ?? 0)}`}
              />
              <TransactionText
                leftText="Total amount(USD)"
                rightText={`$ ${FormatNumber(giftCardTxnLog[0].requestTotalInDollar ?? 0)}`}
              />
              <TransactionText
                leftText="Transaction reference"
                rightText={giftCardTxnLog[0].transactionReference ?? ""}
              />
              <TransactionText
                leftText="Total quantity"
                rightText={`${giftCardTxnLog.length ?? ""}`}
              />
              {giftCardTxnLog.map((item, index) => {
                return (
                  <div key={item.id} className="my-4">
                    <p className="font-grotesk-bold text-lg">
                      Unit ({index + 1})
                    </p>
                    <div>
                      <TransactionText
                        leftText="Amount"
                        rightText={`NGN ${FormatNumber(item.unitAmountToUser ?? 0)}`}
                      />
                      <TransactionText
                        leftText="Amount(USD)"
                        rightText={`$ ${FormatNumber(item.unitAmountInDollar ?? 0)}`}
                      />
                      <TransactionText
                        leftText="Quantity"
                        rightText={`${item.quantity ?? 0}`}
                      />
                    </div>
                  </div>
                );
              })}

              <Button
                text="Get receipt"
                type="bgGreen"
                loading={false}
                fullWidth
              />
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
              <TableStatus
                type={
                  selectedTxn?.transactionStatus
                    .toLowerCase()
                    .includes("success")
                    ? "Success"
                    : selectedTxn?.transactionStatus
                          .toLowerCase()
                          .includes("fail")
                      ? "Failed"
                      : "Pending"
                }
                text={
                  selectedTxn?.transactionStatus
                    .toLowerCase()
                    .includes("success")
                    ? "Completed"
                    : selectedTxn?.transactionStatus
                          .toLowerCase()
                          .includes("fail")
                      ? "Failed"
                      : "Pending"
                }
              />
              <p className="text-bayfi-green-500 text-2xl font-grotesk-medium">
                NGN{FormatNumber(selectedTxn?.amount ?? 0)}
              </p>
              <div className="text-white text-base font-grotesk-regular">
                to{" "}
                <span className="text-white font-grotesk-semi-bold">
                  {transactionWalletLog?.beneficiaryAccountName ?? ""}
                </span>{" "}
                <span className="text-[#BEDD3A] font-grotesk-medium">
                  {transactionWalletLog?.beneficiaryBankName ?? ""}
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
                rightText={transactionWalletLog?.beneficiaryAccountNumber ?? ""}
              />
              <TransactionText
                leftText="Account name"
                rightText={transactionWalletLog?.beneficiaryAccountName ?? ""}
              />
              <TransactionText
                leftText="Bank name"
                rightText={transactionWalletLog?.beneficiaryBankName ?? ""}
              />
              <TransactionText
                leftText="Date"
                rightText={timeDefault(
                  transactionWalletLog?.transactionStartDate ?? "",
                )}
              />
              <TransactionText
                leftText="Reference"
                rightText={transactionWalletLog?.reference ?? ""}
              />
              <TransactionText
                leftText="Session Id"
                rightText={transactionWalletLog?.sessionId ?? ""}
              />
              <TransactionText
                noBorder
                leftText="Amount"
                rightText={`NGN ${FormatNumber(selectedTxn?.amount ?? 0)} `}
              />

              <Button
                text="Get receipt"
                type="bgGreen"
                loading={false}
                fullWidth
              />
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
      </SideDrawer>
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
      className={`flex ${!noBorder && "border-b border-[#DCDCDC]"}  py-3 justify-between items-center font-grotesk-medium text-base`}
    >
      <p>{leftText}</p>
      <div className="flex items-center gap-2">
        {icon && <Image width={24} height={24} src={icon} alt="" />}

        <p className="text-bayfi-black-400 text-right">{rightText}</p>
      </div>
    </div>
  );
};
