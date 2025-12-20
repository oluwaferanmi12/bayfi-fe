import kycBadge from "@/assets/svg/kyc-badge.svg";
import Image from "next/image";
import arrowRightSvg from "@/assets/svg/arrow-circle-right.svg";

export const KycWrapper = () => {
  return (
    <div className="relative  flex flex-col mt-10 justify-center items-center">
      <div className="bg-[#ECECEC] w-[90%] border border-[#FFFFFF99] -top-4 mx-auto absolute p-4 rounded-xl"></div>
      <div className="bg-[#F9F9F9] w-[95%] border border-[#FFFFFF99] -top-2 mx-auto absolute p-4 rounded-xl"></div>
      <div className="rounded-xl relative bg-white p-2 w-full border border-[#DCDCDC80] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={kycBadge} alt="" />
          <p className="text-[#4B5563] text-xs font-medium">Complete your kyc</p>
        </div>
        <div className="bg-[#F5F5F5] rounded-full flex items-center gap-2 py-1 px-4">
          <p className="text-[#3C444F] text-xs">Verify</p>
          <Image src={arrowRightSvg} alt="" />
        </div>
      </div>
    </div>
  );
};
