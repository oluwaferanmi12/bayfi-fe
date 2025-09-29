import bayfiIcon from "@/assets/svg/chat-logo.svg";
import { Message } from "@/types";
import { messageDateFormatter } from "@/utils/formatter";
import Image from "next/image";

export const SupportChatContainer = ({ message }: { message: Message }) => {
  return (
    <div className="bg-[#EBF4C2] mb-4  border border-[#BEDD3A] rounded-lg p-2 px-4">
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <p className="font-grotesk-medium text-sm">Bayfi support</p>
          <Image src={bayfiIcon} alt="" />
        </div>
      </div>
      <div>
        <p className="text-[#292929] text-sm font-grotesk-medium">
          {message.message}
        </p>
        <div className="mt-2">
          <p className="font-grotesk-regular text-xs">
            {messageDateFormatter(message.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};
