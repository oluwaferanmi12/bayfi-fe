import React, { useState } from "react";
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
import { useGetBeneficiary } from "@/hooks/query/usePayment";
import { useWalletStore } from "@/store/walletStore";

export const WithdrawDrawer = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const [showWithdrawOtp, setShowWithdrawOtp] = useState(false);
  const [showReciept, setShowReciept] = useState(false);
  const { data, isPending } = useGetBeneficiary();
  
  return (
    <SideDrawer title="Withdraw" open={open} onClose={close}>
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
            />
            <GInput label="Select bank" placeholder="0.00" />
            <GInput
              label="Recipient Account"
              placeholder="Enter 10 digits account number"
            />
            <Button
              loading={false}
              fullWidth
              text="Continue"
              type="bgGreen"
              action={() => {
                setShowWithdrawOtp(true);
              }}
            />
          </div>
        </div>
      ) : showReciept ? (
        <GReceipt />
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Text type="header-text-20" value="You are about to send" />
          <Text type="text-green-24" value="NGN 200,000.00" />
          <div>
            <Text type="main-text-regular" value="to " />
            <Text type="main-text-bold" value=" Akinlade Olaitan A" />
            <Text type="text-green-24" value=" OPAY" />
          </div>
          <div className="my-6">
            <Image src={padLockIcon} alt="" />
          </div>
          <div className="mb-4">
            <Text type="input-text" value="Enter your pin to confirm" />
          </div>
          <OTPInput onChange={() => {}} value="" />
          <div className="my-4 w-full">
            <Button
              action={() => {
                setShowReciept(true);
              }}
              fullWidth
              loading={false}
              type="bgGreen"
              text="Withdraw money"
            />
          </div>
        </div>
      )}
    </SideDrawer>
  );
};
