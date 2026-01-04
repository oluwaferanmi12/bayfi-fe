"use client";

import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import exportIcon from "@/assets/svg/export-icon.svg";
import { TableInput } from "@/components/inputs/table-input";
import { TablePagination } from "@/components/pagination/table-pagination";
import { TransactionTable } from "@/components/tables/transaction-table";
import { useGetTransaction, useGetTransactionSummary } from "@/hooks/query";
import { Col, Row } from "antd";
import arrowDownGreen from "@/assets/svg/arrow-down-green.svg";
import arrowUpOrange from "@/assets/svg/arrow-up-orange.svg";
import Image from "next/image";
import { FormatNumber } from "@/utils/formatter";

function Transaction() {
  const { isPending, data } = useGetTransaction();
  const transactionSummary = useGetTransactionSummary();
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
                NGN{FormatNumber(transactionSummary.data?.inflow.total || 0)}
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
                NGN{FormatNumber(transactionSummary.data?.outflow.total || 0)}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {data && <TransactionTable />}
    </div>
  );
}

export default Transaction;
