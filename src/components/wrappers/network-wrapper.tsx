import arrowRight from "@/assets/svg/arrowRight.svg";
import Image from "next/image";
export const CoinNetworkWrappr = ({
  action,
  whiteBG,
}: {
  action?: () => void;
  whiteBG?: boolean;
}) => {
  return (
    <div onClick={action} className="cursor-pointer">
      <div
        className={`${whiteBG ? "bg-white" : "bg-bayfi-grey-500"}  lg:p-4 p-3 mb-3 flex justify-between rounded-xl`}
      >
        <p className="text-black lg:text-lg text-base font-grotesk-bold">bep-20</p>
        <Image src={arrowRight} alt="" />
      </div>
    </div>
  );
};
