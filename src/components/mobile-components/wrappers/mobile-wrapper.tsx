import { ReactNode } from "react";
import glowBg from "@/assets/svg/glow-bg.svg";
import Image from "next/image";

export const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" lg:hidden p-4 bg-[#FAFAFA] relative">
      <div className="fixed top-0 w-full h-[30vh] overflow-hidden left-0">
        <Image src={glowBg} alt="" className="w-full" />
      </div>
      {children}
    </div>
  );
};
