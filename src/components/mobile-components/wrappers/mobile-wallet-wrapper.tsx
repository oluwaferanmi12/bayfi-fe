import eyeIcon from "@/assets/svg/eyeIcon.svg";
import Image from "next/image";
import tradeIcon from "@/assets/svg/mobileTradeIcon.svg";
import withdrawIcon from "@/assets/svg/mobileWithdrawIcon.svg";
import depositIcon from "@/assets/svg/mobileDepositIcon.svg";
import { Text } from "@/components/texts/text";

export const MobileWalletWrapper = () => {
  return (
    <div className="bg-white p-4 my-2 rounded-2xl flex flex-col justify-center items-center">
      <div className="flex items-center gap-2 ">
        <Image src={eyeIcon} alt="" />
        <p className="text-bayfi-grey-900 font-grotesk-medium text-sm">
          Wallet Balance
        </p>
      </div>
      <p className="text-2xl font-grotesk-bold py-3 border-b w-full text-center border-[#F0F0F0]">
        NGN200,000.00
      </p>
      <div className="py-3 flex px-6 items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src={tradeIcon} alt="" />
          <p className="text-bayfi-black-500 font-semibold text-sm">Trade</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src={depositIcon} alt="" />
          <p className="text-bayfi-black-500 font-semibold text-sm">Deposit</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src={withdrawIcon} alt="" />
          <p className="text-bayfi-black-500 font-semibold text-sm">Withdraw</p>
        </div>
      </div>
    </div>
  );
};
