import { use, useState } from "react";
import { DesktopReferralEmpty } from "./desktop-referral-empty";
import { DesktopRewardProgress } from "./desktop-reward-progress";
import { useGetRewardJar, useGetRewardPrograms } from "@/hooks/query";

export const DesktopReferral = () => {
  const [activeState, setActiveState] = useState(0);
  const { data } = useGetRewardJar();
  const { data: rewardPrograms } = useGetRewardPrograms();
  console.log("reward jar value", data);
  return (
    <>
      {activeState === 0 && <DesktopReferralEmpty />}
      {activeState === 1 && <DesktopRewardProgress />}
    </>
  );
};
