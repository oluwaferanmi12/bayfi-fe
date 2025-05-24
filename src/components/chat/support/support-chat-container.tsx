import bayfiIcon from "@/assets/svg/chat-logo.svg";
import Image from "next/image";

export const SupportChatContainer = () => {
    return (
      <div className="bg-[#EBF4C2] mb-4  border border-[#BEDD3A] rounded-lg p-2 px-4">
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <p className="font-grotesk-medium">Bayfi support</p>
            <Image src={bayfiIcon} alt="" />
          </div>
        </div>
        <div>
          <p className="text-[#292929] font-grotesk-medium">
            Hi Yemi, Good evening <br />
            The rate for the card is 2000 <br />
            Kindly send the picture if you will like to proceed
          </p>
          <div className="mt-2">
            <p className="font-grotesk-regular text-xs">Mar 23rd, 2024 12:45:23 AM</p>
          </div>
        </div>
      </div>
    );
}