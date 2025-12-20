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
import { v4 as uuidv4 } from "uuid";
import {
  useAccountLookup,
  useDisburse,
  useGetBankSearch,
  useGetBeneficiary,
} from "@/hooks/query/usePayment";
import { useDebounce } from "@/hooks/custom/debounce/useDebounce";
import { Select, Spin } from "antd";
import { FormatNumber } from "@/utils/formatter";
import { DisburseResponse } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useProfileStore } from "@/store/userProfileStore";
import { usePinStore } from "@/store/usePinStore";
type BankOption = {
  label: string;
  value: string;
};
export const WithdrawDrawer = ({
  open,
  close,
  handleOpenModal,
}: {
  open: boolean;
  close: () => void;
  handleOpenModal: () => void;
}) => {
  const queryClient = useQueryClient();
  const [showWithdrawOtp, setShowWithdrawOtp] = useState(false);
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedBank, setSelectedBank] = useState<BankOption | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const bankSearch = useDebounce(searchedValue, 500);
  const [showReciept, setShowReciept] = useState(false);
  const { profile } = useProfileStore();
  const { showPinModal, setShowPinModal } = usePinStore();
  const [disburseResponse, setDisburseResponse] =
    useState<DisburseResponse | null>(null);
  const { data, isPending } = useGetBeneficiary();
  const disburse = useDisburse((data) => {
    setDisburseResponse(data);
    setShowReciept(true);
    queryClient.invalidateQueries({ queryKey: ["get-wallet"] });
  });
  const activeKey = uuidv4();
  const { data: bankAccount } = useAccountLookup({
    accountNumber,
    bankCode: selectedBank?.value ?? "",
  });
  const { data: bankList, isLoading: bankListLoading } =
    useGetBankSearch(bankSearch);

  const bankOptions = useMemo(
    () =>
      (bankList ?? []).map((b) => ({
        label: b.name,
        value: b.bankCode,
      })),
    [bankList]
  );

  const handleShowOtp = () => {
    if (profile?.isPinCreated) {
      setShowWithdrawOtp(true);
    } else {
      // close();
      setShowPinModal(true);
    }
  };
  useEffect(() => {
    if (!showPinModal && profile?.isPinCreated) {
      setShowWithdrawOtp(true);
    }
  }, [showPinModal, profile]);

  const handleWithdraw = () => {
    disburse.mutate({
      accountName: bankAccount?.accountName ?? "",
      accountNumber,
      amount,
      bankCode: bankAccount?.bankCode ?? "",
      key: activeKey,
      pin,
    });
  };
  return (
    <SideDrawer
      destroyOnClose={false}
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
                setAmount(+e.target.value);
              }}
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
              </div>
            </div>
            <GInput
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
            <div className="mt-2">
              <Button
                loading={false}
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
          <Text type="text-green-24" value={`NGN ${FormatNumber(amount)}`} />
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
