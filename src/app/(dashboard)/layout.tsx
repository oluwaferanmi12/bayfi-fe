"use client";

import { Row, Col } from "antd";
import logo from "@/assets/svg/logoBySide.svg";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/texts/text";
import bellIcon from "@/assets/svg/bellIcon.svg";
import profilePlaceholder from "@/assets/svg/profilePlaceholder.svg";
import homeIcon from "@/assets/svg/homeIcon.svg";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full min-h-screen w-full pt-24 bg-bayfi-grey-300">
      <div className="fixed top-0 w-full bg-white border border-[#EAECF0] py-4">
        <Row justify={"center"} align={"middle"}>
          <Col xs={22}>
            <div className="flex justify-between items-center">
              <Image src={logo} alt="" />
              <div className="flex items-center gap-8">
                <Link href={"/"}>
                  {/* <Text type="nav-text" value="Dashboard" /> */}
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
      {children}
    </div>
  );
}
