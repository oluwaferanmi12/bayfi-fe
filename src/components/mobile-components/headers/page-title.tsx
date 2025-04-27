import arrowLeft from "@/assets/svg/arrow-left.svg";
import Image from "next/image";
export const PageTitle = () => {
  return (
    <div className="flex items-center  justify-center relative  ">
      <span className="absolute left-0 top-1">
        <Image src={arrowLeft} alt="" />
      </span>
      <p className=" text-lg font-grotesk-bold   text-bayfi-black-600">
        Withdrawal
      </p>
    </div>
  );
};
