import badgeIcon from "@/assets/svg/badge-icon.svg";
import Image from "next/image";

export const IncompleteKycBadge = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border border-[#CBE461] my-1 bg-[#F9FCEB] rounded-full py-1 px-4 flex items-center justify-center gap-2">
        <Image src={badgeIcon} alt="" />
        <p  className="text-bayfi-green-700 mb-[1px] text-base font-grotesk-medium">
          Complete your kyc documents
        </p>
      </div>
    </div>
  );
};
