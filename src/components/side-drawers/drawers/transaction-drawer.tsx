import React from "react";
import { SideDrawer } from "../side-drawer";
import { TableStatus } from "@/components/status/table-status";
import { FormatNumber } from "@/utils/formatter";
import { Transaction } from "@/types";
import bitcoinSmallIcon from "@/assets/svg/bitcoin-small-icon.svg";
import { Button } from "@/components/buttons";
import chatIcon from "@/assets/svg/chat-message-icon.svg";
import Image from "next/image";
import { useGetTransactionLog } from "@/hooks/query";

export const TransactionDrawer = ({
  handleClose,
  openDrawer,
  selectedTxn,
}: {
  handleClose: () => void;
  openDrawer: boolean;
  selectedTxn?: Transaction;
}) => {
  const transactionLog = useGetTransactionLog(selectedTxn?.id ?? "");
  return (
    <>
      <SideDrawer
        open={openDrawer}
        onClose={() => {
          handleClose();
        }}
        title="Transaction Details"
      >
        <div>
          <div className="bg-bayfi-black-700 p-4 rounded-lg flex flex-col items-center justify-center gap-1">
            <TableStatus text="Completed" type="Success" />
            <p className="text-bayfi-green-500 text-2xl font-grotesk-medium">
              NGN{FormatNumber(selectedTxn?.amount ?? 0)}
            </p>
            <div className="text-white text-base font-grotesk-regular">
              to{" "}
              <span className="text-white font-grotesk-semi-bold">
                {selectedTxn?.receiverName}
              </span>{" "}
              <span className="text-[#BEDD3A] font-grotesk-medium">OPAY</span>
            </div>
          </div>
          <div
            style={{ border: "0.5px solid #DCDCDC" }}
            className="mt-4 rounded-lg p-4 bg-[#F5F5F5]"
          >
            <TransactionText
              leftText="Transaction channel"
              rightText="Crypto purchase"
              icon={bitcoinSmallIcon}
            />
            <TransactionText
              leftText="Account channel"
              rightText="0000397042"
            />
            <TransactionText
              leftText="Account name"
              rightText="Olaitan Akinlade"
            />
            <TransactionText leftText="Bank name" rightText="Opay" />
            <TransactionText leftText="Date" rightText="02-14-2025 9:30" />
            <TransactionText
              leftText="Reference"
              rightText={selectedTxn?.transactionReference ?? ""}
            />
            <TransactionText
              noBorder
              leftText="Amount"
              rightText={FormatNumber(selectedTxn?.amount ?? 0)}
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
        {icon && <Image src={icon} alt="" />}

        <p className="text-bayfi-black-400">{rightText}</p>
      </div>
    </div>
  );
};
