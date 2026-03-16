import { use, useState } from "react";
import { DesktopReferralEmpty } from "./desktop-referral-empty";
import { DesktopRewardProgress } from "./desktop-reward-progress";

export const DesktopReferral = () => {
  const [activeState, setActiveState] = useState(1);
  return (
    <>
      {activeState === 0 && <DesktopReferralEmpty />}
      {activeState === 1 && <DesktopRewardProgress />}
    </>
  );
};
