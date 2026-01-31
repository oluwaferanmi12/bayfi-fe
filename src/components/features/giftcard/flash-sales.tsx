import { Button } from "@/components/buttons";
import hotCard from "@/assets/svg/hot-card.svg";
import Image from "next/image";

export const FlashSalesCard = () => {
  return (
    <div className="bg-black my-4 p-4 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 ">
        <Image src={hotCard} alt="Hot card" />
      </div>
      <div className="flex items-center relative z-20 justify-between">
        <div>
          <p className="text-2xl text-[#EDEEEF] mb-1 font-grotesk-medium">
            Hot Gift Card Deals 🔥
          </p>
          <p className="text-sm text-[#ACACAC]">
            Grab limited-time gift card deals. Best rates, instant details.
          </p>
        </div>
        <div>
          <Button loading={false} text="See Deals" type="bgGreen" />
        </div>
      </div>
    </div>
  );
};
