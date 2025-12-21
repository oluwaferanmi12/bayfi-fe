"use client";

import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import React from "react";
import exportIcon from "@/assets/svg/export-icon.svg";
import { SearchInput } from "@/components/inputs/search-input";
import { TableInput } from "@/components/inputs/table-input";
import { TablePagination } from "@/components/pagination/table-pagination";
import { TransactionTable } from "@/components/tables/transaction-table";
import { useGetTransaction } from "@/hooks/query";
import { Col, Row } from "antd";
import arrowDownGreen from "@/assets/svg/arrow-down-green.svg";
import arrowUpOrange from "@/assets/svg/arrow-up-orange.svg";
import Image from "next/image";

function Transaction() {
  const { isPending, data } = useGetTransaction();
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
      <Row gutter={12} className="my-4">
        <Col xs={12}>
          <div className="bg-[#F6F4F0] p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <p className="text-[#747474] font-grotesk-semi-bold text-base">
                Money in{" "}
              </p>
              <div>
                <Image src={arrowDownGreen} alt="" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-[#171717] text-2xl font-grotesk-semi-bold">
                NGN500.00k
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="bg-[#F6F4F0] p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <p className="text-[#747474] font-grotesk-semi-bold text-base">
                Money out{" "}
              </p>
              <div>
                <Image src={arrowUpOrange} alt="" />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-[#171717] text-2xl font-grotesk-semi-bold">
                NGN500.00k
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="py-3 flex items-center justify-between">
        <TableInput placeholder="Search" />
        <TablePagination />
      </div>
      {data && <TransactionTable data={data} />}
    </div>
  );
}

export default Transaction;
