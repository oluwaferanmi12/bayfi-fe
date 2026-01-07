import React, { useEffect, useMemo, useState } from "react";
import { SideDrawer } from "../side-drawer";
import { UserProfile } from "@/components/UIs/user-name-profile";
import { DarkBalanceWrapper } from "@/components/wrappers/dark-balance-wrapper";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import { GReceipt } from "@/components/UIs/general-reciept";
import { Text } from "@/components/texts/text";
import Image from "next/image";
import { OTPInput } from "@/components/inputs/otp-input";
import padLockIcon from "@/assets/svg/padLockIcon.svg";
import { Select, Spin } from "antd";
import { FormatNumber, numberFormatter, stripCommas } from "@/utils/formatter";
import { useWithdraw } from "@/hooks/custom/withdraw/useWithdraw";
import { BankOption } from "@/interfaces/interfaces";

export const WithdrawDrawer = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const {
    showReciept,
    showWithdrawOtp,
    data,
    setAmount,
    accountLookupLoading,
    bankAccount,
    bankListLoading,
    disburse,
    disburseResponse,
    handleShowOtp,
    handleWithdraw,
    payloadError,
    searchedValue,
    selectedBank,
    setSearchedValue,
    setSelectedBank,
    setAccountNumber,
    bankOptions,
    amount,
    setPin,
    pin,
  } = useWithdraw();
  return (
    <SideDrawer
      destroyOnClose={true}
      title="Withdraw"
      open={open}
      onClose={close}
    >
      {!showWithdrawOtp ? (
        <div>
          {data && data.length > 0 && (
            <>
              <div className="mt-2 mb-4">
                <Text type="header-text-20" value="Recent beneficiaries" />
              </div>
              <div className="flex items-center justify-between">
                <UserProfile />
              </div>
            </>
          )}
          <div className="my-4">
            <DarkBalanceWrapper />
          </div>
          <div>
            <GInput
              label="How much would you like to withdraw?"
              placeholder="0.00"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={numberFormatter(amount)}
              error={payloadError.amount}
              inputMode="numeric"
            />
            <div className={`mb-4 w-full`}>
              <Text type="input-text" value={"Select bank"} />
              <div className="mt-1 relative">
                <Select
                  showSearch
                  searchValue={searchedValue}
                  value={selectedBank?.value}
                  placeholder="Type to search bank..."
                  options={bankOptions}
                  filterOption={false} // IMPORTANT: remote search (don't filter locally)
                  onSearch={(val) => {
                    setSearchedValue(val);
                    if (selectedBank) setSelectedBank(null);
                  }}
                  onChange={(value, option) => {
                    // option can be BankOption when options provided
                    setSelectedBank(option as BankOption);
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
              error={payloadError.accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
              label="Recipient Account"
              placeholder="Enter 10 digits account number"
              noMarginBottom
            />
            <p className="font-grotesk-semi-bold text-bayfi-green-600">
              {bankAccount?.accountName}
            </p>
            <div className="mt-4">
              <Button
                loading={accountLookupLoading}
                fullWidth
                text="Continue"
                type="bgGreen"
                action={() => {
                  handleShowOtp();
                }}
              />
            </div>
          </div>
        </div>
      ) : showReciept && disburseResponse ? (
        <GReceipt payload={disburseResponse} />
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
    </SideDrawer>
  );
};
