import { useState } from "react";
import { DesktopRewardCard } from "../desktop-reward-card";
import { ReferralTab } from "../referral-tab";
import { RewardProgressBar } from "../reward-progress-bar";
import { RedemptionWrapper } from "../redemption-wrapper";
import { ReferralWrapper } from "../referral-wrapper";

export const DesktopRewardProgress = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <DesktopRewardCard />
      <div className="mt-4">
        <p className="text-[#E1EFA4] font-grotesk-bold text-xl mb-2 text-center">
          Reward progress
        </p>
      </div>
      <RewardProgressBar type="desktop" />
      <ReferralTab
        desktopType
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="mt-4">
        {activeTab === 1 && (
          <>
            <RedemptionWrapper desktopType />
            <RedemptionWrapper desktopType />
            <RedemptionWrapper desktopType />
          </>
        )}
        {activeTab === 2 && (
          <>
            <ReferralWrapper desktopType />
            <ReferralWrapper desktopType />
            <ReferralWrapper desktopType />
          </>
        )}
      </div>
    </div>
  );
};
