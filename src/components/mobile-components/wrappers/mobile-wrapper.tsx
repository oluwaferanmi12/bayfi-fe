import { ReactNode } from "react";
import glowBg from "@/assets/svg/glow-bg.svg";
import Image from "next/image";

export const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mobileWrapper lg:hidden p-4 bg-[#FAFAFA] relative">
      
      {children}
    </div>
  );
};
