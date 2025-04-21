import advertiseCoin from "@/assets/svg/advertise-coin.svg";
import Image from "next/image";

export const MobileDashboardAdvertise = () => {
  return (
    <div className="bg-[#95BFFC] p-4   rounded-xl relative">
      <p className="text-2xl font-grotesk-extra-bold">
        <span className="text-white">Buy and sell your </span>
        <br />
        <span className="text-bayfi-black-600">gift cards</span>
      </p>
      <span className="absolute right-0 top-0">
        <Image src={advertiseCoin} alt="" />
      </span>
    </div>
  );
};
