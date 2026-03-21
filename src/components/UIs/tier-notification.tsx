import React from "react";
import infoIcon from "@/assets/svg/info-icon.svg";
import Image from "next/image";

export const TierNotification = () => {
  return (
    <div className="bg-[#E7F6FD] border border-[#9CDAF6] p-2 rounded-lg mb-3">
      <div className="flex items-center gap-2">
        <Image src={infoIcon} alt="" />
        <p className="font-grotesk-bold">Notice</p>
      </div>
      <p className="font-grotesk-medium">
        NIN and BVN are required only when upgrading to{" "}
        <span className="text-[#0EA5E9] font-grotesk-bold">TIER 3</span>
      </p>
    </div>
  );
};
