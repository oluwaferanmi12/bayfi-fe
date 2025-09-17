import giftCardIcon from "@/assets/svg/gift-card-chat-icon.svg";
import { Message } from "@/types";
import { messageDateFormatter } from "@/utils/formatter";
import Image from "next/image";

export const UserResponseContainer = ({
  bgWhite,
  message,
}: {
  bgWhite?: boolean;
  message: Message;
}) => {
  return (
    <div
      className={`border ${bgWhite && "bg-white"} border-[#EAECF0] rounded-lg p-2 px-4 mb-4`}
    >
      <p className="text-[#868C98] text-sm font-grotesk-medium">You</p>
      <div className="mt-2">
        {message.message}
        <Image src={giftCardIcon} alt="" />
      </div>
      <div className="mt-2">
        <p className="font-grotesk-regular text-xs">
          {messageDateFormatter(message.createdAt)}
        </p>
      </div>
    </div>
  );
};
