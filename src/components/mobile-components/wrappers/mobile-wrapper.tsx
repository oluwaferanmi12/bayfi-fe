import { ReactNode } from "react";

export const MobileWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mobileWrapper lg:hidden p-4 bg-[#FAFAFA] relative">
      {children}
    </div>
  );
};
