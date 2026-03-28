import Image from "next/image";
import jarGreen from "@/assets/svg/jar-green.svg";
import send2 from "@/assets/svg/send-2.svg";
import { useEmptyReferral } from "./hooks/useEmptyReferral";
export const DesktopRewardCard = () => {
  const { referralCode, handleCopyCode } = useEmptyReferral();
  return (
    <div className="w-full min-w-full ">
      <div className="reward-bg rounded-xl flex items-center p-4 gap-3 w-full">
        <Image src={jarGreen} alt="" />
        <div className="">
          <p className="text-white text-xl font-grotesk-bold flex flex-col gap-4">
            Earn more when:
          </p>
          <p className="text-base text-[#F2FCFF] font-grotesk-regular">
            -You trade
          </p>
          <p className="text-xs text-[#F2FCFF] font-grotesk-regular">
           - The person you refer makes a trade
          </p>
          <p className="text-4xl text-[#F6F4F0] font-grotesk-bold">
            {referralCode}
          </p>
          <button
            className="flex items-center gap-2 bg-[#1B1B1B66] px-3 p-1 mt-3 rounded-lg"
            onClick={handleCopyCode}
          >
            <p className="text-[#FEFEFE]">Copy code</p>
            <Image src={send2} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
