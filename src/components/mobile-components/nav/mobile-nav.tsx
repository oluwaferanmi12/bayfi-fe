"use client";

import mobileHome from "@/assets/svg/home.svg";
import bitcoinConvert from "@/assets/svg/bitcoinConvert.svg";
import more from "@/assets/svg/menu.svg";
import documentNormal from "@/assets/svg/document-normal.svg";
import bitcoinConvertWhite from "@/assets/svg/bitcoin-convert-white.svg";
import documentNormal2 from "@/assets/svg/document-normal-2.svg";
import menu2 from "@/assets/svg/menu-2.svg";
import mobileHomeActive from "@/assets/svg/home-2.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import navChatIcon from "@/assets/svg/nav-chat-icon.svg";

export const MobileNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 lg:hidden flex justify-between w-full bg-[#1F1F1F] p-4 py-2 z-50">
        <MobileNavWrapper
          icon={mobileHome}
          active={true}
          iconActive={mobileHomeActive}
          text="Home"
          action={() => {
            router.push("/dashboard");
          }}
        />
        <MobileNavWrapper
          icon={bitcoinConvertWhite}
          active={false}
          iconActive={bitcoinConvert}
          text="Services"
          action={() => {
            router.push("/other-services");
          }}
        />

        <MobileNavWrapper
          action={() => {
            router.push("/m-transaction");
          }}
          icon={documentNormal}
          active={false}
          iconActive={documentNormal2}
          text="Transactions"
        />
        <MobileNavWrapper
          icon={navChatIcon}
          active={false}
          iconActive={navChatIcon}
          text="Chat"
          action={() => {
            router.push("/m-chat");
          }}
        />
        <MobileNavWrapper
          icon={more}
          active={false}
          iconActive={menu2}
          text="More"
          action={() => {
            router.push("/more");
          }}
        />
      </div>
    </>
  );
};

const MobileNavWrapper = ({
  icon,
  active,
  iconActive,
  text,
  action,
}: {
  icon: string;
  active: boolean;
  iconActive: string;
  text: string;
  action?: () => void;
}) => {
  return (
    <>
      <div
        onClick={action}
        className={`flex justify-center cursor-pointer flex-col`}
      >
        <div
          className={`${active && "bg-bayfi-green-500"} flex justify-center px-6 py-2 rounded-full`}
        >
          <Image src={active ? iconActive : icon} alt="" />
        </div>

        <p
          className={` text-sm ${active ? "text-white" : "text-[#888888]"} text-center`}
        >
          {text}
        </p>
      </div>
    </>
  );
};
