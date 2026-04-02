import { useGetRewardJar } from "@/hooks/query";
import { FormatNumber } from "@/utils/formatter";
import React from "react";

export const RewardProgressBar = ({
  type = "mobile",
}: {
  type?: "desktop" | "mobile";
}) => {
  const { data } = useGetRewardJar();
  return (
    <div>
      <div
        className={` ${type === "mobile" ? "bg-[#FFFFFF1C]" : "bg-[#EBF4C2]"} p-3 rounded-full`}
      >
        <div
          style={{ width: `${data?.progressPercent}%` }}
          className={`bg-[#ADC935] py-2 px-1 rounded-full`}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p
          className={`text-xl font-grotesk-bold  ${type === "mobile" ? "text-[#E1EFA4]" : "text-[#B8B8B8]"}`}
        >
          NGN {FormatNumber(data?.currentBalance ?? 0)}
        </p>
        <p className="text-xl font-grotesk-bold text-bayfi-black-400">
          NGN {FormatNumber(data?.targetAmount ?? 0, true)}{" "}
        </p>
      </div>
    </div>
  );
};
