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
import { transactionData } from "@/data/transaction-data";
import walletTopUpIcon from "@/assets/svg/wallet-icon.svg";
import { TableStatus } from "@/components/status/table-status";

export const TransactionTable = () => {
  const columnHelper = createColumnHelper<TransactionInterface>();
  const columns = [
    columnHelper.accessor("date", {
      cell: (info) => <TableText text={info.getValue()} />,
      header: (info) => <TableText text="Date" headerType />,
    }),
    columnHelper.accessor("amount", {
      cell: (info) => <TableText text={info.getValue()} />,
      header: (info) => <TableText text="Amount" headerType />,
    }),
    columnHelper.accessor("channel", {
      cell: (info) => (
        <div className="flex items-center gap-2 justify-center">
          <Image src={walletTopUpIcon} alt="" />{" "}
          <TableText text={info.getValue()} />{" "}
        </div>
      ),
      header: (info) => <TableText text="Channel" headerType />,
    }),
    columnHelper.accessor("status", {
      cell: (info) => (
        <div className="flex items-center  justify-center">
          {info.getValue() === "Completed" ? (
            <TableStatus type="Success" text="Completed" />
          ) : info.getValue() === "In progress" ? (
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
        <div className="flex items-center cursor-pointer gap-2">
          <Image src={eyeIcon} alt="" />
          <TableText text={"View"} />
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: transactionData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="mt-4">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr className="  min-w-full w-full">
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
      </div>
    </>
  );
};
