"use client";

import { Row, Col } from "antd";
import logo from "@/assets/svg/logoBySide.svg";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/texts/text";
import bellIcon from "@/assets/svg/bellIcon.svg";
import profilePlaceholder from "@/assets/svg/profilePlaceholder.svg";
import homeIcon from "@/assets/svg/homeIcon.svg";
import { GPageWrapper } from "@/components/wrappers/GPageWrapper";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import { usePathname, useRouter } from "next/navigation";
import { FloatingDraggable } from "@/components/buttons/float-button";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    {
      navTitle: "Dashboard",
      navIcon: homeIcon,
      url: "/dashboard",
    },
    {
      navTitle: "Services",
      navIcon: homeIcon,
      url: "/services",
    },
    {
      navTitle: "Transactions",
      navIcon: homeIcon,
      url: "/transaction",
    },
    {
      navTitle: "Support",
      navIcon: homeIcon,
      url: "/support",
    },
  ];

  return (
    <>
      <FloatingDraggable />
      <div className="h-full min-h-screen   w-full lg:pt-28 bg-[#F6F4F0]">
        <div className="fixed hidden lg:block  top-0 w-full z-50 bg-white border border-[#EAECF0] py-4">
          <Row justify={"center"} align={"middle"}>
            <Col xs={22}>
              <div className="flex justify-between items-center">
                <Image
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                  src={logo}
                  alt=""
                />
                <div className="flex items-center gap-8">
                  {navLinks.map((nav) => (
                    <Link key={nav.navTitle} href={nav.url}>
                      <span
                        className={` ${pathname === nav.url ? "px-4 py-2 bg-black rounded-lg" : ""} flex items-center gap-2`}
                      >
                        <Image src={nav.navIcon} alt="" />
                        <Text
                          value={nav.navTitle}
                          type={
                            pathname === nav.url
                              ? "text-green-bold"
                              : "nav-text"
                          }
                        />
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Image className="cursor-pointer" src={bellIcon} alt="" />
                  <Image
                    className="cursor-pointer"
                    onClick={() => {
                      router.push("/profile");
                    }}
                    src={profilePlaceholder}
                    alt=""
                  />
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
