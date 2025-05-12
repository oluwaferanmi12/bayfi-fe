"use client";

import { Row, Col } from "antd";
import logo from "@/assets/svg/logoBySide.svg";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/texts/text";
import bellIcon from "@/assets/svg/bellIcon.svg";
import profilePlaceholder from "@/assets/svg/profilePlaceholder.svg";
import homeIcon from "@/assets/svg/homeIcon.svg";
import mobileHome from "@/assets/svg/home.svg";
import bitcoinConvert from "@/assets/svg/bitcoinConvert.svg";
import more from "@/assets/svg/menu.svg";
import documentNormal from "@/assets/svg/document-normal.svg";
import bitcoinConvertWhite from "@/assets/svg/bitcoin-convert-white.svg";
import documentNormal2 from "@/assets/svg/document-normal-2.svg";
import menu2 from "@/assets/svg/menu-2.svg";
import mobileHomeActive from "@/assets/svg/home-2.svg";
import { GPageWrapper } from "@/components/wrappers/GPageWrapper";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-full min-h-screen w-full lg:pt-24 bg-bayfi-grey-300">
        <div className="fixed hidden lg:block  top-0 w-full z-50 bg-white border border-[#EAECF0] py-4">
          <Row justify={"center"} align={"middle"}>
            <Col xs={22}>
              <div className="flex justify-between items-center">
                <Image src={logo} alt="" />
                <div className="flex items-center gap-8">
                  <Link href={"/"}>
                    <span className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg">
                      <Image src={homeIcon} alt="" />
                      <Text value="Dashboard" type="text-green-bold" />
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <Text type="nav-text" value="Services" />
                  </Link>
                  <Link href={"/"}>
                    <Text type="nav-text" value="Transactions" />
                  </Link>
                  <Link href={"/"}>
                    <Text type="nav-text" value="More" />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={bellIcon} alt="" />
                  <Image src={profilePlaceholder} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="fixed bottom-0 lg:hidden flex justify-between w-full bg-[#1F1F1F] p-4 py-2 z-50">
          <MobileNavWrapper
            icon={mobileHome}
            active={true}
            iconActive={mobileHomeActive}
            text="Home"
          />
          <MobileNavWrapper
            icon={bitcoinConvertWhite}
            active={false}
            iconActive={bitcoinConvert}
            text="Services"
          />
          <MobileNavWrapper
            icon={documentNormal}
            active={false}
            iconActive={documentNormal2}
            text="Transactions"
          />
          <MobileNavWrapper
            icon={more}
            active={false}
            iconActive={menu2}
            text="More"
          />
        </div>
        <GPageWrapper>{children}</GPageWrapper>
      </div>
    </>
  );
}

const MobileNavWrapper = ({
  icon,
  active,
  iconActive,
  text,
}: {
  icon: string;
  active: boolean;
  iconActive: string;
  text: string;
}) => {
  return (
    <>
      <div className={`flex justify-center cursor-pointer flex-col`}>
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
