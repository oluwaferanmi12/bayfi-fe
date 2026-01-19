"use client";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import filterIcon from "@/assets/svg/filter.svg";
import Image from "next/image";
import { Col, Row } from "antd";
import moneyInIcon from "@/assets/svg/moneyInIcon.svg";
import moneyOutIcon from "@/assets/svg/moneyOutIcon.svg";
import { useGetTransaction, useGetTransactionSummary } from "@/hooks/query";
import { FormatNumber } from "@/utils/formatter";
import { Transaction, TransactionCategory } from "@/types";
import { momentLocal, timeDefault } from "@/utils/moment-local";
import { useGetTransactionIconType } from "@/hooks/custom/others/useGetIconType";

function MobileTransaction() {
  const transactionSummary = useGetTransactionSummary();
  const { isPending, data } = useGetTransaction({
    category: "",
    page: 1,
    pageSize: 30,
    search: "",
    status: "",
  });
  return (
    <>
      <MobileNav />
      <div className="flex items-center justify-between">
        <p className="text-bayfi-black-600 text-xl font-grotesk-semi-bold">
          Transaction
        </p>
        <div className="bg-white relative z-20 py-2 px-4 rounded-lg flex items-center gap-2">
          <Image src={filterIcon} alt="" />
          <p className="text-sm font-grotesk-semi-bold text-[#747474]">
            This month
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg mt-4">
        <Row gutter={12}>
          <Col xs={12}>
            <div className="bg-[#F6F6F6] px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2 justify-between">
                <p className="text-base text-[#747474] font-grotesk-semi-bold">
                  Money in
                </p>
                <Image src={moneyInIcon} alt="" />
              </div>
              <div className="mt-3">
                <p className="text-xl font-grotesk-semi-bold ">
                  NGN{FormatNumber(transactionSummary.data?.inflow.total ?? 0)}
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="bg-[#F6F6F6] px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2 justify-between">
                <p className="text-base text-[#747474] font-grotesk-semi-bold">
                  Money out
                </p>
                <Image src={moneyOutIcon} alt="" />
              </div>
              <div className="mt-3">
                <p className="text-xl font-grotesk-semi-bold ">
                  NGN
                  {FormatNumber(transactionSummary.data?.outflow.total ?? 0)}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <p className="font-grotesk-medium">List of transactions</p>
          <div className="mt-1">
            {data?.data &&
              data.data.length &&
              data.data.map((item) => {
                return <TransactionWrapper key={item.id} transaction={item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileTransaction;

const TransactionWrapper = ({ transaction }: { transaction: Transaction }) => {
  const iconType = useGetTransactionIconType(transaction);
  return (
    <div className="bg-[#F6F6F6] mb-2 px-4 py-2 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src={iconType} alt="" />
        <div>
          <p className="text-[#171717] font-grotesk-semi-bold text-lg">
            {TransactionCategory[transaction!.transactionCategory]}
          </p>
          <p className="text-[#747474] text-sm font-grotesk-medium">
            {transaction.transactionType}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#171717] font-grotesk-bold text-lg">
          NGN {FormatNumber(transaction.amount)}
        </p>
        <p className="text-[#747474] text-sm font-grotesk-medium text-right">
          {timeDefault(transaction.createdAt)}
        </p>
      </div>
    </div>
  );
};
