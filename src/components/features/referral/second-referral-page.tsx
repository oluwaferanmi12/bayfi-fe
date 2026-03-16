import React, { useState } from "react";
import jarGreen from "@/assets/svg/jar-green.svg";
import Image from "next/image";
import send2 from "@/assets/svg/send-2.svg";
import { RewardProgressBar } from "./reward-progress-bar";
import { ReferralTab } from "./referral-tab";
import { RedemptionWrapper } from "./redemption-wrapper";
import { ReferralWrapper } from "./referral-wrapper";
import { DesktopRewardCard } from "./desktop-reward-card";

export const SecondReferalPage = ({
  setStep,
}: {
  setStep: (val: number) => void;
}) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <DesktopRewardCard />
      <div className="my-6">
        <p className="text-[#E1EFA4] font-grotesk-bold text-xl text-center">
          Reward progress
        </p>
      </div>
      <RewardProgressBar />
      <ReferralTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">
        {activeTab === 1 && (
          <>
            <RedemptionWrapper />
            <RedemptionWrapper />
            <RedemptionWrapper />
          </>
        )}
        {activeTab === 2 && (
          <>
            <ReferralWrapper />
            <ReferralWrapper />
            <ReferralWrapper />
          </>
        )}
      </div>
    </div>
  );
};
