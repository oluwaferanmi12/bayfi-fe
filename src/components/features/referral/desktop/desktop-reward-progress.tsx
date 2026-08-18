import { useState } from "react";
import { DesktopRewardCard } from "../desktop-reward-card";
import { ReferralTab } from "../referral-tab";
import { RewardProgressBar } from "../reward-progress-bar";
import { RedemptionWrapper } from "../redemption-wrapper";
import { ReferralWrapper } from "../referral-wrapper";
import { useGetRedemptions } from "@/hooks/query";
import { RewardActivity } from "@/types";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { Loader } from "@/components/loader/general-loader";

export const DesktopRewardProgress = ({
  rewardActivity,
}: {
  rewardActivity: RewardActivity[];
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const { data: redemption, isLoading } = useGetRedemptions();
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
            {rewardActivity.length ? (
              rewardActivity.map((item) => {
                return (
                  <ReferralWrapper
                    rewardActivity={item}
                    key={item.id}
                    desktopType
                  />
                );
              })
            ) : (
              <GenericEmptyState />
            )}
          </>
        )}
        {activeTab === 2 && (
          <>
            {isLoading ? (
              <Loader />
            ) : redemption?.data.length ? (
              <>
                {redemption.data.map((item) => {
                  return (
                    <RedemptionWrapper
                      redemption={item}
                      key={item.id}
                      desktopType
                    />
                  );
                })}
              </>
            ) : (
              <GenericEmptyState />
            )}
          </>
        )}
      </div>
    </div>
  );
};
