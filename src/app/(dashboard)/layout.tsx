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
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
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
                  <Link href={"/dashboard"}>
                    <span className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg">
                      <Image src={homeIcon} alt="" />
                      <Text value="Dashboard" type="text-green-bold" />
                    </span>
                  </Link>
                  <Link href={"/services"}>
                    <Text type="nav-text" value="Services" />
                  </Link>
                  <Link href={"/transaction"}>
                    <Text type="nav-text" value="Transactions" />
                  </Link>
                  <Link href={"/support"}>
                    <Text type="nav-text" value="Support" />
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
        <MobileNav />
        <GPageWrapper>{children}</GPageWrapper>
      </div>
    </>
  );
}
