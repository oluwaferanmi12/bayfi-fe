import React from "react";
import backIcon from "@/assets/svg/dark-back-icon.svg";
import Image from "next/image";

function MobileReferralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1B1B1B] min-h-screen p-5">
      <div className="flex items-center gap-3">
        <Image src={backIcon} alt="" />
        <p className="text-bayfi-green-500 text-2xl">Reward jar</p>
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default MobileReferralLayout;
