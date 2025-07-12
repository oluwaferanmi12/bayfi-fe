import { ReactNode } from "react";

export const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mobileWrapper lg:hidden p-4 bg-[#f6f4f0] ">{children}</div>;
};
