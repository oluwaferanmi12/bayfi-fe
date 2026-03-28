"use client";

import React from "react";
import Image from "next/image";
import jarIcon from "@/assets/svg/jar.svg";
import { Button } from "@/components/buttons";
import whiteCopyIcon from "@/assets/svg/white-copy-icon.svg";
import { useEmptyReferral } from "./hooks/useEmptyReferral";

export const FirstReferralPage = () => {
  const { referralCode, handleCopyCode } = useEmptyReferral();
  return (
    <div>
      <>
        <div className="flex items-center justify-center">
          <Image src={jarIcon} alt="" />
        </div>
        <div className="mt-8">
          <p className="text-bayfi-green-200 text-4xl text-center font-grotesk-bold w-[80%] mx-auto">
            The person you refer makes a  trade
          </p>
          <p className="text-center mt-8 text-bayfi-grey-50 text-base w-4/5 mx-auto">
                -You trade
          </p>
          <p className="text-center mt-8 text-bayfi-grey-50 text-base w-4/5 mx-auto">
                - The person you refer makes a trade
          </p>
          <div className="mt-12 border rounded-[20px] p-4 py-6 border-text-color-600 flex items-center justify-center flex-col">
            <p className="text-bayfi-green-200 text-4xl text-center font-grotesk-bold mb-3">
              {referralCode}
            </p>
            <Button
              text="Copy"
              icon={whiteCopyIcon}
              type="bgGreen"
              loading={false}
              action={handleCopyCode}
            />
          </div>
        </div>
        =
      </>
    </div>
  );
};
