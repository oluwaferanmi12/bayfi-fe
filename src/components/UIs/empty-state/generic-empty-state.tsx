import React from "react";
import emptyIcon from "@/assets/svg/empty-icon.svg";
import Image from "next/image";

export const GenericEmptyState = () => {
  return (
    <div className="py-20 flex items-center justify-center flex-col">
      <Image src={emptyIcon} alt="" />
      <div className="mt-4">
        <p className="text-[#171717] font-grotesk-semi-bold text-base text-center">
          Oops
        </p>
        <p className="mt-1 text-center text-[#747474] font-grotesk-medium text-sm">Nothing to see here</p>
      </div>
    </div>
  );
};
