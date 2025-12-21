import giftcardPlaceholder from "@/assets/svg/amazon-placeholder.svg";
import Image from "next/image";
import indicator from "@/assets/svg/carousel-indicator.svg";

export const FlashSalesCard = () => {
  return (
    <div className="bg-black my-4 p-4 rounded-2xl  ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl text-[#EDEEEF] mb-3 font-grotesk-medium">
            Google play
          </p>
          <p className="text-sm text-text-color-50">$25 at 800/$</p>
        </div>
        <div>
          <Image src={giftcardPlaceholder} alt="" />
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <Image src={indicator} alt="" />
      </div>
    </div>
  );
};
