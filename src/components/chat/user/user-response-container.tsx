import giftCardIcon from "@/assets/svg/gift-card-chat-icon.svg";
import Image from "next/image";

export const UserResponseContainer = ({ bgWhite }: { bgWhite?: boolean }) => {
  return (
    <div
      className={`border ${bgWhite && "bg-white"} border-[#EAECF0] rounded-lg p-2 px-4 mb-4`}
    >
      <p className="text-[#868C98] text-sm font-grotesk-medium">You</p>
      <div className="mt-2">
        <Image src={giftCardIcon} alt="" />
      </div>
      <div className="mt-2">
        <p className="font-grotesk-regular text-xs">
          Mar 23rd, 2024 12:45:23 AM
        </p>
      </div>
    </div>
  );
};
