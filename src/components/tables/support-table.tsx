"use client"

import { TableStatus } from "@/components/status/table-status";
import { TableText } from "@/components/tables/text/table-text";
import { ChannelWrapper } from "@/components/wrappers/chanel-wrapper";
import { PriorityWrapper } from "@/components/wrappers/priority-wrapper";
import { supportData } from "@/data/support-data";
import { SupportInterface } from "@/interfaces/interfaces";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const SupportTable = () => {
  const columnHelper = createColumnHelper<SupportInterface>();
  const columns = [
    columnHelper.accessor("date", {
      cell: (info) => <TableText text={info.getValue()} />,
      header: (info) => <TableText text="Date" headerType />,
    }),
    columnHelper.accessor("ticketName", {
      cell: (info) => <TableText text={info.getValue()} />,
      header: (info) => <TableText text="Ticket name" headerType />,
    }),
    columnHelper.accessor("channel", {
      cell: (info) => (
        <ChannelWrapper
          type={info.getValue() === "crypto" ? "bitcoin" : "giftCard"}
        />
      ),
      header: (info) => <TableText text="Channel" headerType />,
    }),
    columnHelper.accessor("priority", {
      cell: (info) => (
        <PriorityWrapper type={info.getValue() === "low" ? "low" : "medium"} />
      ),
      header: (info) => <TableText text="Priority" headerType />,
    }),
    columnHelper.accessor("status", {
      cell: (info) => (
        <div className="flex items-center  justify-center">
          {info.getValue() === "closed" ? (
            <TableStatus type="Failed" text="Closed" />
          ) : info.getValue() === "open" ? (
            <TableStatus type={"Pending"} text="Open" />
          ) : (
            <TableStatus text="Resolved" type="Success" />
          )}
        </div>
      ),
      header: (info) => <TableText text="Status" headerType />,
    }),
  ];
  const table = useReactTable({
    data: supportData,
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
