"use client";
import { TableText } from "@/components/tables/text/table-text";
import { TransactionInterface } from "@/interfaces/interfaces";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import eyeIcon from "@/assets/svg/table-eye-icon.svg";
import Image from "next/image";
import walletTopUpIcon from "@/assets/svg/wallet-icon.svg";
import { TableStatus } from "@/components/status/table-status";
import { useState } from "react";
import { SideDrawer } from "@/components/side-drawers/side-drawer";
import bitcoinSmallIcon from "@/assets/svg/bitcoin-small-icon.svg";
import { Button } from "@/components/buttons";
import chatIcon from "@/assets/svg/chat-message-icon.svg";
import { Transaction } from "@/types";
import { momentLocal } from "@/utils/moment-local";
import { useGetTransaction, useGetTransactionId } from "@/hooks/query";
import { TableInput } from "../inputs/table-input";
import { TablePagination } from "../pagination/table-pagination";
import { FormatNumber } from "@/utils/formatter";
import { Loader } from "../loader/general-loader";

export const TransactionTable = () => {
  const { data, isPending } = useGetTransaction();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const columnHelper = createColumnHelper<Transaction>();
  const [selectedTxn, setSelectedTxn] = useState<Transaction>();
  const transactionDetails = useGetTransactionId(selectedTxn?.id ?? "");
  const columns = [
    columnHelper.accessor("createdAt", {
      cell: (info) => (
        <TableText
          text={momentLocal(info.getValue()).format("YYYY-MM-DD HH:mm")}
        />
      ),
      header: (info) => <TableText text="Date" headerType />,
    }),
    columnHelper.accessor("amount", {
      cell: (info) => <TableText text={"NGN" + " " + info.getValue()} />,
      header: (info) => <TableText text="Amount" headerType />,
    }),
    columnHelper.accessor("transactionCategory", {
      cell: (info) => (
        <div className="flex items-center gap-2 justify-center">
          <Image src={walletTopUpIcon} alt="" />{" "}
          <TableText text={info.getValue()} />{" "}
        </div>
      ),
      header: (info) => <TableText text="Channel" headerType />,
    }),
    columnHelper.accessor("transactionStatus", {
      cell: (info) => (
        <div className="flex items-center  justify-center">
          {info.getValue().toLowerCase().includes("success") ? (
            <TableStatus type="Success" text="Completed" />
          ) : info.getValue().toLowerCase().includes("pend") ? (
            <TableStatus type={"Pending"} text="In progress" />
          ) : (
            <TableStatus text="Failed" type="Failed" />
          )}
        </div>
      ),
      header: (info) => <TableText text="Status" headerType />,
    }),
    columnHelper.display({
      id: "action",
      cell: (info) => (
        <div
          onClick={() => {
            setSelectedTxn(info.row.original);
            setShowSideDrawer(true);
          }}
          className="flex items-center cursor-pointer gap-2"
        >
          <Image src={eyeIcon} alt="" />
          <TableText text={"View"} />
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <SideDrawer
        open={showSideDrawer}
        onClose={() => {
          setShowSideDrawer(false);
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
      <div className="py-3 flex items-center justify-between">
        <TableInput placeholder="Search" />
        <TablePagination />
      </div>
      <div className="mt-4">
        {isPending ? (
          <Loader />
        ) : (
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup, index) => {
                return (
                  <tr key={index} className="  min-w-full w-full">
                    {headerGroup.headers.map((header, index, rootData) => {
                      return (
                        <th
                          className={`bg-[#F7F7F7]  p-4 ${
                            index === 0 && "rounded-tl-2xl"
                          } ${index === rootData.length - 1 && "rounded-tr-2xl"}`}
                          key={header.id}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr className="border-b border-[#EAECF0]" key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="bg-[#FEFEFE33]" key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
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
