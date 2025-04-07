import arrowRight from "@/assets/svg/arrowRight.svg";
import Image from "next/image";
export const CoinNetworkWrappr = ({ action }: { action?: () => void }) => {
  return (
    <div onClick={action} className="cursor-pointer">
      <div className="bg-bayfi-grey-500 p-4 mb-3 flex justify-between rounded-xl">
        <p className="text-black text-lg font-grotesk-bold">bep-20</p>
        <Image src={arrowRight} alt="" />
      </div>
    </div>
  );
};
