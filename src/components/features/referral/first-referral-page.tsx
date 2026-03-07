import React from "react";
import Image from "next/image";
import jarIcon from "@/assets/svg/jar.svg";
import { Button } from "@/components/buttons";

export const FirstReferralPage = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-center">
          <Image src={jarIcon} alt="" />
        </div>
        <div className="mt-8">
          <p className="text-bayfi-green-200 text-4xl text-center font-grotesk-bold w-[80%] mx-auto">
            Invite your friends and earn $10.00
          </p>
          <p className="text-center mt-8 text-bayfi-grey-50 text-base w-4/5 mx-auto">
            Invite friends and get $10.00 sign up bonus when they sign up, and
            complete 5 transactions above $100.
          </p>
          <div className="mt-12 border rounded-[20px] p-4 py-6 border-text-color-600 flex items-center justify-center flex-col">
            <p className="text-bayfi-green-200 text-4xl text-center font-grotesk-bold mb-3">
              BAY-87K3
            </p>
            <Button text="Copy" type="bgGreen" loading={false} />
          </div>
        </div>

        <div className="mt-20">
          <Button
            loading={false}
            fullWidth
            type="bgGreen"
            text="Share your code"
          />
        </div>
      </>
    </div>
  );
};
