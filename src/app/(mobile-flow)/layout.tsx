import mobileFlowIcon from "@/assets/svg/mobileFlowIcon.svg";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"min-h-screen h-screen bg-[#F6F4F0] relative p-4 pt-8"}>
      <span className="fixed top-0 right-0">
        <Image src={mobileFlowIcon} alt="" />
      </span>
      {children}
    </div>
  );
}
