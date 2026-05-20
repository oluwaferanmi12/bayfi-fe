"use client";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import filterIcon from "@/assets/svg/filter.svg";
import Image from "next/image";
import { Col, Row, Spin } from "antd";
import moneyInIcon from "@/assets/svg/moneyInIcon.svg";
import moneyOutIcon from "@/assets/svg/moneyOutIcon.svg";
import { useGetTransaction, useGetTransactionSummary } from "@/hooks/query";
import { FormatNumber } from "@/utils/formatter";
import { Transaction, TransactionCategory } from "@/types";
import { timeDefault } from "@/utils/moment-local";
import { useGetTransactionIconType } from "@/hooks/custom/others/useGetIconType";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { useRouter } from "next/navigation";
import { useTransactionStore } from "@/store/transactionStore";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@/components/loader/general-loader";
import { TableStatus } from "@/components/status/table-status";

function MobileTransaction() {
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const canTriggerNextRef = useRef(true);
  const transactionSummary = useGetTransactionSummary();
  const { isPending, data } = useGetTransaction({
    category: "",
    page,
    pageSize: 10,
    search: "",
    status: "",
  });

  useEffect(() => {
    if (!data) return;

    setHasNext(!!data.metadata?.hasNext);
    setTransactions((prev) => {
      if (page === 1) {
        return data.data ?? [];
      }

      const existingIds = new Set(prev.map((item) => item.id));
      const newItems = (data.data ?? []).filter(
        (item) => !existingIds.has(item.id),
      );
      return [...prev, ...newItems];
    });
  }, [data, page]);

  useEffect(() => {
    const currentObserverNode = observerRef.current;
    if (!currentObserverNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (!first.isIntersecting) {
          canTriggerNextRef.current = true;
          return;
        }

        if (
          first.isIntersecting &&
          canTriggerNextRef.current &&
          hasNext &&
          !isPending
        ) {
          canTriggerNextRef.current = false;
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(currentObserverNode);
    return () => {
      observer.disconnect();
    };
  }, [hasNext, isPending]);

  const isInitialLoading = isPending && page === 1 && !transactions.length;

  return (
    <>
      <MobileNav />
      <div className="flex items-center justify-between">
        <p className="text-bayfi-black-600 text-xl font-grotesk-semi-bold">
          Transaction
        </p>
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
            {isInitialLoading ? (
              <div className="flex justify-center py-8">
                <Loader />
              </div>
            ) : transactions.length ? (
              transactions.map((item) => {
                return <TransactionWrapper key={item.id} transaction={item} />;
              })
            ) : (
              <GenericEmptyState />
            )}
            {transactions.length > 0 && (
              <div
                ref={observerRef}
                className="h-14 -mt-4 mb-2 flex items-start justify-center"
              >
                {isPending && <Spin size="small" />}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileTransaction;

const TransactionWrapper = ({ transaction }: { transaction: Transaction }) => {
  const iconType = useGetTransactionIconType(transaction);
  const router = useRouter();
  const { setSelectedTransaction } = useTransactionStore();
  return (
    <div
      onClick={() => {
        if (
          !transaction.transactionCategory.toLowerCase().includes("reward") &&
          !transaction.transactionStatus.toLowerCase().includes("failed")
        ) {
          setSelectedTransaction(transaction);
          sessionStorage.setItem("selectedTxn", JSON.stringify(transaction));
          router.push(`/m-transaction/${transaction.id}`);
        }
      }}
      className="bg-[#F6F6F6] mb-2 px-4 py-2 rounded-lg flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Image src={iconType} alt="" />
        <div>
          <p className="text-[#171717] font-grotesk-semi-bold text-lg">
            {TransactionCategory[transaction!.transactionCategory]}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[#747474] text-sm font-grotesk-medium">
              {transaction.transactionType}
            </p>
            <div className="flex items-center  justify-center">
              {transaction.transactionStatus
                .toLowerCase()
                .includes("success") ? (
                <TableStatus smallerScreen type="Success" text="Completed" />
              ) : transaction.transactionStatus
                  .toLowerCase()
                  .includes("pend") ? (
                <TableStatus
                  smallerScreen
                  type={"Pending"}
                  text="In progress"
                />
              ) : (
                <TableStatus smallerScreen text="Failed" type="Failed" />
              )}
            </div>
          </div>
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
