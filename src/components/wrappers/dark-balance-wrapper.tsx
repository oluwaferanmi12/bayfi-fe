import eyeIcon from "@/assets/svg/eyeIconWhite.svg";
import { Text } from "@/components/texts/text";
import Image from "next/image";
export const DarkBalanceWrapper = () => {
  return (
    <>
      <div className="bg-bayfi-black-700 p-4 py-6 rounded-2xl">
        <div className="flex justify-center mb-2">
          <span className="bg-[#FFFFFF1C] rounded-full flex gap-2 items-center px-6 py-2">
            <Image src={eyeIcon} alt="" />
            <Text type="text-small-white" value="Available balance" />
          </span>
        </div>

        <div className="flex justify-center">
          <Text type="number-small-white" value="NGN 200,000.00" />
        </div>
      </div>
    </>
  );
};
