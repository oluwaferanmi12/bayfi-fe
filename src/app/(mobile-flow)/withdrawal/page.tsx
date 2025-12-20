"use client";

import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { MobileContactWrapper } from "@/components/mobile-components/wrappers/mobile-contact-wrapper";
import { DarkBalanceWrapper } from "@/components/wrappers/dark-balance-wrapper";
import { useGetBankSearch, useGetBeneficiary } from "@/hooks/query/usePayment";
import { useState } from "react";

const WithdrawalMobile = () => {
  const beneficiaries = useGetBeneficiary();
  const [bankSearch, setBankSearch] = useState("");
  const { data: bankList, isLoading: bankListLoading } =
    useGetBankSearch(bankSearch);

  return (
    <>
      <PageTitle title="Withdraw" />
      <div className="mb-3">
        <DarkBalanceWrapper />
      </div>
      {!beneficiaries.isPending &&
        beneficiaries.data &&
        beneficiaries.data.length > 0 && (
          <>
            <div className="mb-3">
              <p className="text-text-color-900 font-grotesk-bold text-sm">
                Withdraw to beneficiaries
              </p>
            </div>
            <div className="flex items-center gap-4 overflow-x-scroll hide-scrollbar">
              <MobileContactWrapper />
            </div>
          </>
        )}
      <div className="bg-white rounded-lg p-4 mt-4">
        <GInput placeholder="Union bank" label="Select bank" />
        <GInput
          noMarginBottom
          label="Recipient account"
          placeholder="Enter 10 digits account number"
        />
        <p className="text-sm font-grotesk-semi-bold mb-4 text-bayfi-green-900">
          Akinlade Olaitan Akinromade
        </p>
        <GInput
          label="How much would you like to withdraw?"
          placeholder="0.0"
        />
        <Button loading={false} text="Continue" fullWidth type="bgGreen" />
      </div>
    </>
  );
};

export default WithdrawalMobile;
