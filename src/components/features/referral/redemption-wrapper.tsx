import redemptionIcon from "@/assets/svg/redemption-icon.svg";
import redemptionIconWhite from "@/assets/svg/redemption-icon-white.svg";
import Image from "next/image";
import { RewardActivity, RewardRedemption } from "@/types";
import { momentLocal } from "@/utils/moment-local";
import { FormatNumber } from "@/utils/formatter";

export const RedemptionWrapper = ({
  desktopType,
  redemption,
}: {
  desktopType?: boolean;
  redemption: RewardRedemption;
}) => {
  return (
    <div
      className={`flex items-center mb-3 ${desktopType ? "bg-bayfi-grey-300" : "bg-bayfi-black-700"}   p-4 rounded-2xl`}
    >
      <div className="flex items-center gap-3 w-full">
        <Image
          src={desktopType ? redemptionIconWhite : redemptionIcon}
          alt=""
        />
        <div className="w-full">
          <div className="flex items-center w-full justify-between">
            <p
              className={` ${desktopType ? "text-bayfi-black-900" : "text-white"} font-grotesk-semi-bold text-lg`}
            >
              {redemption.category}
            </p>
            <p
              className={` ${desktopType ? "text-bayfi-black-900" : "text-white"} font-grotesk-semi-bold text-lg`}
            >
              NGN{FormatNumber(redemption.amountNgn)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#747474] font-grotesk-semi-bold">
              {momentLocal(redemption.createdAt).format("DD-MM-YYYY,HH:mm")}
            </p>
            <p className="text-[#747474] font-grotesk-semi-bold">
             {redemption.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
