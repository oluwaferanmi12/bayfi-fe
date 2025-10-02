import message2Icon from "@/assets/svg/message-2.svg";
import { ChatTransaction } from "@/types";
import { messageDateFormatter } from "@/utils/formatter";
import Image from "next/image";

export const MobileChatListCard = ({ chat }: { chat: ChatTransaction }) => {
  return (
    <div className="bg-white gap-4 p-3 rounded-lg mb-2 flex items-center">
      <span>
        <Image src={message2Icon} alt="" />
      </span>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="font-grotesk-semi-bold text-lg text-[#1B1B1B]">
            {chat.giftCardName}
          </p>
          <span className="border border-[#E9D7FE] p-2 py-1 text-sm font-grotesk-medium rounded-lg text-[#6941C6] ">
            Giftcard purchase
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-[#34C759] text-base font-grotesk-semi-bold">
            Completed
          </p>
          <p className="text-sm font-grotesk-semi-bold text-[#747474]">
            {messageDateFormatter(chat.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};
