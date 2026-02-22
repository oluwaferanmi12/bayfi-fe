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
import binIcon from "@/assets/svg/bin-icon.svg";
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
    beneficiaries,
    accountNumber,
    handleDeleteBeneficiary,
    deletingBeneficiary,
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
          {beneficiaries && beneficiaries.length > 0 && (
            <>
              <div className="mt-2 mb-4">
                <Text type="header-text-20" value="Recent beneficiaries" />
              </div>

              <div className="flex items-center gap-3">
                {beneficiaries.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col relative items-center"
                    >
                      <UserProfile
                        click={(val) => {
                          setSelectedBank({
                            label: val.bankName,
                            value: val.bankCode,
                          });
                          setAccountNumber(val.accountNumber);
                        }}
                        beneficiary={item}
                      />
                      <button
                        type="button"
                        disabled={deletingBeneficiary}
                        onClick={() => {
                          handleDeleteBeneficiary(item.id);
                        }}
                        className={`absolute top-0 -right-1 mt-1 ${deletingBeneficiary ? "opacity-50" : "cursor-pointer"}`}
                        aria-label={`Remove ${item.accountName}`}
                      >
                        <Image src={binIcon} alt="Delete beneficiary" />
                      </button>
                    </div>
                  );
                })}
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
                  labelInValue
                  showSearch
                  searchValue={searchedValue}
                  value={
                    selectedBank
                      ? { value: selectedBank.value, label: selectedBank.label }
                      : undefined
                  }
                  placeholder="Type to search bank..."
                  options={bankOptions}
                  filterOption={false} // IMPORTANT: remote search (don't filter locally)
                  onSearch={(val) => {
                    setSearchedValue(val);
                    if (selectedBank) setSelectedBank(null);
                  }}
                  onChange={(option) => {
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
              error={payloadError.accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
              value={accountNumber}
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
        <GReceipt
          selectedBank={selectedBank}
          payload={disburseResponse}
          handleClose={close}
          showBeneficiaryButton={
            beneficiaries?.length
              ? beneficiaries.some(
                  (item) => item.accountNumber !== accountNumber,
                )
              : false
          }
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
    </SideDrawer>
  );
};
