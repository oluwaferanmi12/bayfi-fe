import arrowPath from "@/assets/svg/arrow-path.svg";
import arrowRight from "@/assets/svg/arrowRight.svg";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import Image from "next/image";

export const TablePagination = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src={arrowPath} alt="" />

      <div className="flex items-center">
        <p className="text-[#545454] mb-1 text-base font-grotesk-medium">
          1 - 50 of 2,500
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="cursor-pointer">
          <Image src={arrowLeft} alt="" />
        </span>
        <p className="text-[#545454] mb-1 text-base font-grotesk-medium">
          1 - 10
        </p>
        <span className="cursor-pointer">
          <Image src={arrowRight} alt="" />
        </span>
      </div>
    </div>
  );
};
