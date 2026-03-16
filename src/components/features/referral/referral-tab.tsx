import React from "react";
import Image from "next/image";
import dottedMessage from "@/assets/svg/message-dotted.svg";

export const ReferralTab = ({
  activeTab,
  setActiveTab,
  desktopType,
}: {
  activeTab: number;
  setActiveTab: (val: number) => void;
  desktopType?: boolean;
}) => {
  return (
    <div className="flex mt-5">
      <div
        onClick={() => {
          setActiveTab(1);
        }}
        className={`flex items-center w-full gap-2 justify-center py-3 rounded-t-lg  ${activeTab === 1 && "bg-[#EFF8D5]"}`}
      >
        {activeTab === 1 && <Image src={dottedMessage} alt="" />}
        <p
          className={` ${activeTab === 1 ? "text-[#101010] font-grotesk-medium " : `${desktopType ? "text-bayfi-black-900" : "text-white "} font-grotesk-semi-bold`} text-sm `}
        >
          Redemption History
        </p>
      </div>
      <div
        onClick={() => {
          setActiveTab(2);
        }}
        className={`flex items-center w-full gap-2 justify-center py-3 rounded-t-lg   ${activeTab === 2 && "bg-[#EFF8D5]"}`}
      >
        {activeTab === 2 && <Image src={dottedMessage} alt="" />}
        <p
          className={` ${activeTab === 2 ? "text-[#101010] font-grotesk-medium bg-[#EFF8D5]" : `${desktopType ? "text-bayfi-black-900" : "text-white "} font-grotesk-semi-bold`} text-sm text-center`}
        >
          Referral History
        </p>
      </div>
    </div>
  );
};
