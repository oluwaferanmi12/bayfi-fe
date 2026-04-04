"use client";
import { TableText } from "@/components/tables/text/table-text";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import eyeIcon from "@/assets/svg/table-eye-icon.svg";
import Image from "next/image";
import { TableStatus } from "@/components/status/table-status";
import { useState } from "react";
import { Transaction, TransactionCategory } from "@/types";
import { momentLocal } from "@/utils/moment-local";
import { TableInput } from "../inputs/table-input";
import { TablePagination } from "../pagination/table-pagination";
import { Loader } from "../loader/general-loader";
import { GenericEmptyState } from "../UIs/empty-state/generic-empty-state";
import { useTransactionTableHook } from "@/hooks/custom/transaction/useTransactionTableHook";
import { useGetTransactionIconType } from "@/hooks/custom/others/useGetIconType";
import { TransactionDrawer } from "../side-drawers/drawers/transaction-drawer";
import { FormatNumber } from "@/utils/formatter";

export const TransactionTable = () => {
  const {
    data,
    isPending,
    handleNext,
    handlePrevious,
    handleRefetch,
    handleSearch,
    searchPayload,
  } = useTransactionTableHook();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const columnHelper = createColumnHelper<Transaction>();
  const [selectedTxn, setSelectedTxn] = useState<Transaction>();

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
      cell: (info) => (
        <TableText text={"NGN" + " " + FormatNumber(info.getValue())} />
      ),
      header: (info) => <TableText text="Amount" headerType />,
    }),
    columnHelper.accessor("transactionCategory", {
      cell: (info) => (
        <div className="flex justify-center">
          <ResolveCategory transaction={info.row.original} />
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
      cell: (info) => {
        const result = info.row.original;
        return (
          <>
            {!result.transactionCategory.toLowerCase().includes("reward") && (
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
            )}
          </>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TransactionDrawer
        handleClose={() => {
          setShowSideDrawer(false);
        }}
        openDrawer={showSideDrawer}
        selectedTxn={selectedTxn}
      />
      <div className="py-3 flex items-center justify-between">
        <TableInput handleSearch={handleSearch} placeholder="Search" />
        <TablePagination
          handleRefetchData={handleRefetch}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          data={data?.metadata}
          pageSize={searchPayload.pageSize}
        />
      </div>
      <div className="mt-4">
        {isPending ? (
          <Loader />
        ) : data?.data.length ? (
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
                                header.getContext(),
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
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <GenericEmptyState />
        )}
      </div>
    </>
  );
};

const ResolveCategory = ({ transaction }: { transaction: Transaction }) => {
  const resolveIconType = useGetTransactionIconType(transaction);
  return (
    <div className="flex items-center gap-2 w-50 ">
      <Image src={resolveIconType} alt="" />
      <p>{TransactionCategory[transaction!.transactionCategory]}</p>
    </div>
  );
};
