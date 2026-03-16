"use client";
import React from "react";
import backIcon from "@/assets/svg/dark-back-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MobileReferralLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="bg-[#1B1B1B] min-h-screen p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            router.back();
          }}
        >
          <Image src={backIcon} alt="" />
        </button>
        <p className="text-bayfi-green-500 text-2xl">Reward jar</p>
      </div>
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default MobileReferralLayout;
