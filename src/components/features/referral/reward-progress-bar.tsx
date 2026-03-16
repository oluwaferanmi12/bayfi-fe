import React from "react";

export const RewardProgressBar = ({
  type = "mobile",
}: {
  type?: "desktop" | "mobile";
}) => {
  return (
    <div>
      <div
        className={` ${type === "mobile" ? "bg-[#FFFFFF1C]" : "bg-[#EBF4C2]"} p-3 rounded-full`}
      >
        <div className="bg-[#ADC935] py-2 px-1 w-[80%] rounded-full"></div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p
          className={`text-xl font-grotesk-bold  ${type === "mobile" ? "text-[#E1EFA4]" : "text-[#B8B8B8]"}`}
        >
          $50
        </p>
        <p className="text-xl font-grotesk-bold text-bayfi-black-400">$5000</p>
      </div>
    </div>
  );
};
