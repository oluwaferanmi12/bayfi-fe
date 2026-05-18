"use client";

import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { MobileContactWrapper } from "@/components/mobile-components/wrappers/mobile-contact-wrapper";
import { DarkBalanceWrapper } from "@/components/wrappers/dark-balance-wrapper";
import { useWithdraw } from "@/hooks/custom/withdraw/useWithdraw";
import { Text } from "@/components/texts/text";
import { Select, Spin } from "antd";
import { BankOption } from "@/interfaces/interfaces";
import { WithdrawSuccess } from "@/components/side-drawers/withdraw/withdraw-success";
import { FormatNumber, numberFormatter, stripCommas } from "@/utils/formatter";
import Image from "next/image";
import { OTPInput } from "@/components/inputs/otp-input";
import padLockIcon from "@/assets/svg/padLockIcon.svg";
import binIcon from "@/assets/svg/bin-icon.svg";
import { useRouter } from "next/navigation";

const WithdrawalMobile = () => {
  const router = useRouter();
  const {
    beneficiaryLoading,
    searchedValue,
    selectedBank,
    bankOptions,
    setSearchedValue,
    setSelectedBank,
    bankListLoading,
    payloadError,
    bankAccount,
    setAccountNumber,
    setAmount,
    accountLookupLoading,
    handleShowOtp,
    showWithdrawOtp,
    showReciept,
    disburseResponse,
    amount,
    handleWithdraw,
    setPin,
    disburse,
    pin,
    beneficiaries,
    accountNumber,
    handleDeleteBeneficiary,
    deletingBeneficiary,
  } = useWithdraw();


  return (
    <>
      <PageTitle title="Withdraw" />
      {!showWithdrawOtp ? (
        <>
          <div className="mb-3">
            <DarkBalanceWrapper />
          </div>
          {!beneficiaryLoading && beneficiaries && beneficiaries.length > 0 && (
            <>
              <div className="mb-3">
                <p className="text-text-color-900 font-grotesk-bold text-sm">
                  Withdraw to beneficiaries
                </p>
              </div>
              <div className="flex items-center gap-4 overflow-x-scroll hide-scrollbar">
                {beneficiaries.map((item) => (
                  <div key={item.id} className="flex flex-col items-center relative">
                    <MobileContactWrapper
                      beneficiary={item}
                      click={(val) => {
                        setSelectedBank({
                          label: val.bankName,
                          value: val.bankCode,
                        });
                        setAccountNumber(val.accountNumber);
                      }}
                    />
                    <button
                      type="button"
                      disabled={deletingBeneficiary}
                      
                      onClick={() => {
                        handleDeleteBeneficiary(item.id);
                      }}
                      className={`absolute mt-1 top-0 right-4 ${deletingBeneficiary ? "opacity-50" : "cursor-pointer"}`}
                      aria-label={`Remove ${item.accountName}`}
                    >
                      <Image src={binIcon} alt="Delete beneficiary" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="bg-white rounded-lg p-4 mt-4">
            <GInput
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={numberFormatter(stripCommas(amount))}
              label="How much do you want to withdraw?"
              error={payloadError.amount}
              placeholder="Enter amount"
              inputMode="numeric"
            />
            <div className={`mb-4 w-full`}>
              <Text type="input-text" value={"Select bank"} />
              <div className="mt-1 relative">
                <Select
                  showSearch
                  searchValue={searchedValue}
                  value={selectedBank?.label}
                  placeholder="Type to search bank..."
                  options={bankOptions}
                  filterOption={false} // IMPORTANT: remote search (don't filter locally)
                  onSearch={(val) => {
                    setSearchedValue(val);
                    if (selectedBank) setSelectedBank(null);
                  }}
                  onChange={(value, option) => {
                    // option can be BankOption when options provided
                    setSelectedBank(option as unknown as BankOption);
                    setSearchedValue("");
                  }}
                  notFoundContent={
                    bankListLoading ? <Spin size="small" /> : "No bank found"
                  }
                  className="w-full bayfi-select"
                  size="large"
                />
                {payloadError.bankName && (
                  <p className="text-[#EF4444] text-xs mt-1">
                    {payloadError.bankName}
                  </p>
                )}
              </div>
            </div>
            <GInput
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
              value={accountNumber}
              label="Recipient account"
              placeholder="Enter 10 digits account number"
              error={payloadError.accountNumber}
              inputMode="numeric"
            />
            {bankAccount?.accountName && (
              <p className="text-sm font-grotesk-semi-bold mb-4 text-bayfi-green-900">
                {bankAccount.accountName}
              </p>
            )}

            <Button
              loading={accountLookupLoading}
              text="Continue"
              fullWidth
              type="bgGreen"
              action={() => {
                handleShowOtp();
              }}
            />
          </div>
        </>
      ) : showReciept && disburseResponse ? (
        <WithdrawSuccess
          payload={disburseResponse}
          accountName={bankAccount?.accountName ?? ""}
          bankName={selectedBank?.label ?? ""}
          handleClose={() => router.push("/dashboard")}
        />
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Text type="header-text-20" value="You are about to send" />
          <Text
            type="text-green-24"
            value={`NGN ${FormatNumber(+stripCommas(amount))}`}
          />
          <div>
            <Text type="main-text-regular" value="to " />
            <Text
              type="main-text-bold"
              value={bankAccount?.accountName ?? ""}
            />{" "}
            <Text type="text-green-24" value={bankAccount?.bankName ?? ""} />
          </div>
          <div className="my-6">
            <Image src={padLockIcon} alt="" />
          </div>
          <div className="mb-4">
            <Text type="input-text" value="Enter your pin to confirm" />
          </div>
          <OTPInput
            onChange={(e) => {
              setPin(e);
            }}
            value={pin}
            noOfInput={4}
          />
          <div className="my-4 w-full">
            <Button
              action={() => {
                handleWithdraw();
              }}
              fullWidth
              loading={disburse.isPending}
              type="bgGreen"
              text="Withdraw money"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WithdrawalMobile;
