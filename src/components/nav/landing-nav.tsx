import React from "react";
import logoWhite from "@/assets/svg/logo-white-variant.svg";
import Image from "next/image";
import GeneralLandingPageWrapper from "../wrappers/lading-wrapper/general-landing-wrapper";
import Link from "next/link";

export const LandingNav = () => {
  return (
    <nav className="fixed top-0 w-full">
      <GeneralLandingPageWrapper>
        <div className="flex items-center justify-between py-5 ">
          <span>
            <Image src={logoWhite} alt="" />
          </span>
          <div className="flex text-white items-center gap-4 rounded-full bg-[#FFFFFF14] backdrop-blur-lg p-4">
            <Link href={"/about"}>
              <p className="text-white font-manrope-regular px-4 text-base">
                About us
              </p>
            </Link>
            <Link href={"/what-we-do"}>
              <p className="text-white font-manrope-regular px-4 text-base">
                Stuff we do
              </p>
            </Link>
            <Link href={"/updates"}>
              <p className="text-white font-manrope-regular px-4 text-base">
                Sharp updates
              </p>
            </Link>
            <Link href={"/contact-us"}>
              <p className="text-white font-manrope-regular px-4 text-base">
                Hit us up
              </p>
            </Link>
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
