"use client";

import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { TransactionReceipt } from "@/components/UIs/transaction-receipt";
import { Loader } from "@/components/loader/general-loader";
import { useGetTransactionLog } from "@/hooks/query";
import { Transaction } from "@/types";
import { useTransactionStore } from "@/store/transactionStore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const MobileTransactionDetails = () => {
  const params = useParams<{ id: string }>();
  const transactionId = String(params?.id ?? "");
  const { selectedTransaction } = useTransactionStore();
  const [hydratedTransaction, setHydratedTransaction] =
    useState<Transaction | null>(selectedTransaction);

  const { data: transactionLog, isLoading: logLoading } =
    useGetTransactionLog(transactionId);

  useEffect(() => {
    if (selectedTransaction?.id === transactionId) {
      setHydratedTransaction(selectedTransaction);
      return;
    }

    const savedTxn = sessionStorage.getItem("selectedTxn");
    if (savedTxn) {
      const parsed = JSON.parse(savedTxn) as Transaction;
      if (parsed.id === transactionId) {
        setHydratedTransaction(parsed);
      }
    }
  }, [selectedTransaction, transactionId]);

  if (logLoading) {
    return (
      <>
        <PageTitle title="Transaction Details" />
        <Loader />
      </>
    );
  }

  if (!hydratedTransaction) {
    return (
      <>
        <PageTitle title="Transaction Details" />
        <GenericEmptyState />
      </>
    );
  }

  return (
    <>
      <PageTitle title="Transaction Details" />
      <TransactionReceipt
        selectedTxn={hydratedTransaction}
        transactionLog={transactionLog}
        loading={logLoading}
      />
    </>
  );
};

export default MobileTransactionDetails;
