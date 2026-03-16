import React from "react";
import moneyJar from "@/assets/svg/money-jar.svg";
import Image from "next/image";
import { Button } from "@/components/buttons";
import { useEmptyReferral } from "../hooks/useEmptyReferral";
import blackCopyIcon from "@/assets/svg/black-copy-icon.svg";

export const DesktopReferralEmpty = () => {
  const { referralCode, handleCopyCode } = useEmptyReferral();
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <Image src={moneyJar} alt="" />
      <div className="w-[70%]">
        <p className="text-bayfi-green-600 text-4xl font-grotesk-bold text-center">
          Invite your friends and earn $10.00
        </p>
        <p className="text-bayfi-black-300 text-base font-grotesk-regular mx-auto mt-4 text-center">
          Invite friends and get $10.00 sign up bonus when they sign up, and
          complete 5 transactions above $100.
        </p>
        <div className="bg-bayfi-grey-300 p-4 rounded-lg mt-4 flex flex-col items-center justify-center">
          <p className="text-bayfi-green-600 text-4xl text-center font-grotesk-bold mb-3">
            {referralCode}
          </p>
          <Button
            text="Copy"
            icon={blackCopyIcon}
            type="bgGreen"
            loading={false}
            action={handleCopyCode}
          />
        </div>
      </div>
    </div>
  );
};
