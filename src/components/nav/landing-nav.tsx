"use client";

import React, { useEffect, useState } from "react";
import logoWhite from "@/assets/svg/logo-white-variant.svg";
import logoBlack from "@/assets/svg/logo.svg";
import Image from "next/image";
import GeneralLandingPageWrapper from "../wrappers/lading-wrapper/general-landing-wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LandingNav = () => {
  const pathName = usePathname();
  const [darkMode, setDarkMode] = useState(true);

  const navObjects = [
    { href: "/about", text: "About us" },
    { href: "/what-we-do", text: "Stuff we do" },
    // { href: "/updates", text: "Sharp updates" },
    { href: "/contact-us", text: "Hit us up" },
  ];
  useEffect(() => {
    if (pathName !== "/") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, [pathName]);
  return (
    <nav className="fixed top-0 w-full z-20 hidden lg:block">
      <GeneralLandingPageWrapper>
        <div className="flex items-center justify-between py-5 ">
          <Link href={"/"}>
            <Image src={darkMode ? logoWhite : logoBlack} alt="" />
          </Link>
          <div
            className={`flex text-white items-center gap-4 rounded-full ${darkMode ? "bg-[#FFFFFF14]" : "bg-[#0A0D1414]"}   backdrop-blur-lg p-4`}
          >
            {navObjects.map((item, index) => {
              return <NavLink key={index} {...item} darkMode={darkMode} pathname={pathName}
              />;
            })}
          </div>
          <div className="text-white">
            <Link href={"/login"}>
              <button className="bg-bayfi-green-500 p-4 rounded-full px-8">
                <p className="text-black font-manrope-regular">Login</p>
              </button>
            </Link>
          </div>
        </div>
      </GeneralLandingPageWrapper>
    </nav>
  );
};


const NavLink = ({
  href,
  text,
  darkMode,
  pathname,
}: {
  href: string;
  text: string;
  darkMode: boolean;
  pathname: string;
}) => {
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <p
        className={`
          font-manrope-regular px-4 text-base transition-colors duration-200
          ${
            isActive
              ? "text-bayfi-green-900 drop-shadow-[0_0_6px_rgba(163,230,53,0.35)]"
              : darkMode
              ? "text-white/90 hover:text-white"
              : "text-[#0B0B0B]/80 hover:text-[#0B0B0B]"
          }
        `}
      >
        {text}
      </p>
    </Link>
  );
};
