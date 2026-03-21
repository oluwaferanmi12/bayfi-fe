import { useState } from "react";
import { RewardProgressBar } from "./reward-progress-bar";
import { ReferralTab } from "./referral-tab";
import { RedemptionWrapper } from "./redemption-wrapper";
import { ReferralWrapper } from "./referral-wrapper";
import { DesktopRewardCard } from "./desktop-reward-card";
import { RewardActivity } from "@/types";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { useGetRedemptions } from "@/hooks/query";
import { Loader } from "@/components/loader/general-loader";

export const SecondReferalPage = ({
  rewardActivity,
}: {
  rewardActivity: RewardActivity[];
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const { data: redemption, isLoading } = useGetRedemptions();
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
            {isLoading ? (
              <Loader />
            ) : redemption?.data.length ? (
              <>
                {redemption.data.map((item) => {
                  return <RedemptionWrapper key={item.id} />;
                })}
              </>
            ) : (
              <GenericEmptyState />
            )}
          </>
        )}
        {activeTab === 2 && (
          <>
            {rewardActivity.length ? (
              rewardActivity.map((item) => {
                return <ReferralWrapper rewardActivity={item} key={item.id} />;
              })
            ) : (
              <GenericEmptyState />
            )}
          </>
        )}
      </div>
    </div>
  );
};
