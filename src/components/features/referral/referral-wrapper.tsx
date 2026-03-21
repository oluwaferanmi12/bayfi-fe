import React from "react";
import referralIcon from "@/assets/svg/referral-icon.svg";
import Image from "next/image";
import redemptionIconWhite from "@/assets/svg/redemption-icon-white.svg";
import { RewardActivity } from "@/types";
import { FormatNumber } from "@/utils/formatter";
import { momentLocal } from "@/utils/moment-local";

export const ReferralWrapper = ({
  desktopType,
  rewardActivity,
}: {
  desktopType?: boolean;
  rewardActivity: RewardActivity;
}) => {
  return (
    <div
      className={`flex items-center mb-3 ${desktopType ? "bg-bayfi-grey-300" : "bg-bayfi-black-700"}   p-4 rounded-2xl`}
    >
      <div className="flex items-center gap-3 w-full">
        <Image src={desktopType ? redemptionIconWhite : referralIcon} alt="" />
        <div className="w-full">
          <div className="flex items-center w-full justify-between">
            <p
              className={` ${desktopType ? "text-bayfi-black-900" : "text-white"} font-grotesk-semi-bold text-lg`}
            >
              NGN{FormatNumber(rewardActivity.amountNgn)}
            </p>
            <p
              className={` ${desktopType ? "text-bayfi-black-900" : "text-white"} font-grotesk-semi-bold text-lg`}
            >
              {momentLocal(rewardActivity.createdAt ?? "").format(
                "DD-MM-YYYY,HH:mm",
              )}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#747474] font-grotesk-semi-bold">
              {rewardActivity.description}
            </p>
            {/* <p className="text-[#747474] font-grotesk-semi-bold">
              Balance: 20,000.00
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
