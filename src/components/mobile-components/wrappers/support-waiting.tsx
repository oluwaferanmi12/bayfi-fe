import bellCheer from "@/assets/svg/bell-cheer.svg";
import Image from "next/image";

export const SupportWaiting = () => {
  return (
    <>
      <div className="bg-bayfi-green-200 rounded-lg flex my-3 items-center gap-3 justify-center px-4 py-2">
        <Image src={bellCheer} alt="" />
        <p className="text-black font-grotesk-bold text-sm   ">
          You have 3 support ticket pending
        </p>
      </div>
    </>
  );
};
