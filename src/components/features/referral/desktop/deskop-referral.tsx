import { DesktopReferralEmpty } from "./desktop-referral-empty";
import { DesktopRewardProgress } from "./desktop-reward-progress";
import { useGetRewardActivity } from "@/hooks/query";
import { Loader } from "@/components/loader/general-loader";

export const DesktopReferral = () => {
  const { data: rewardActivity, isLoading: rewardActivityLoading } =
    useGetRewardActivity();
  return (
    <div className="w-full">
      {rewardActivityLoading ? (
        <Loader />
      ) : (
        <div className="w-full">
          {rewardActivity?.data.length ? (
            <DesktopRewardProgress rewardActivity={rewardActivity.data} />
          ) : (
            <DesktopReferralEmpty />
          )}
        </div>
      )}
    </div>
  );
};
