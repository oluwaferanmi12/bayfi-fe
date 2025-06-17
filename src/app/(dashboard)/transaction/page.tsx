import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import React from "react";
import exportIcon from "@/assets/svg/export-icon.svg";
import { SearchInput } from "@/components/inputs/search-input";
import { TableInput } from "@/components/inputs/table-input";
import { TablePagination } from "@/components/pagination/table-pagination";

function Transaction() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between border-b border-gray-200 pb-3">
        <div>
          <Text value="Transaction History" type="header-text-20" />
          <p className="text-bayfi-black-500 text-xs">
            See result and status of already raised claims
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            loading={false}
            smallerType
            lessRounded
            type="bgGrey"
            text="Export PDF"
            icon={exportIcon}
          />
          <Button
            loading={false}
            smallerType
            lessRounded
            type="bgGrey"
            text="Export excel"
            icon={exportIcon}
          />
        </div>
      </div>
      <div className="py-3 flex items-center justify-between">
        <TableInput placeholder="Search" />
        <TablePagination />
      </div>
    </div>
  );
}

export default Transaction;
