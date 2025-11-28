"use client";

import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import whatWeDoImage from "@/assets/svg/what-we-do-image.svg";
import Image from "next/image";
import padlocak from "@/assets/svg/padlock-variant-2.svg";
import badge from "@/assets/svg/shieldBadge.svg";
import riskyIcon from "@/assets/svg/risky-icon.svg";
import arrowRightGreen from "@/assets/svg/arrow-right-green.svg";
import Link from "next/link";

const WhatWeDo = () => {
  const router = useRouter();
  return (
    <>
      <GeneralLandingPageWrapper>
        <section className="h-screen min-h-screen bg-white  flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Row align={"middle"} className="w-full">
              <Col xs={12}>
                <h5 className="text-[#D28B28] text-xl font-inter-semibold">
                  OUR SERVICES
                </h5>
                <div className="font-inter-medium text-[#242628] text-6xl my-6 leading-16">
                  <h1>
                    We <span className="font-inter-bold">Trade</span> , We
                    <span className="font-inter-bold"> Fund</span> ,
                  </h1>
                  <h1>
                    We <span className="font-inter-bold">Top up.</span>{" "}
                  </h1>
                </div>
                <div>
                  <h3 className="text-[#242628] font-inter-regular text-xl w-4/5">
                    Supercharge your finance, empower your teams and track the
                    pulse of your business with an end-to-end expense management
                    platform tailored for African SMBs.
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-12">
                  <button
                    className="bg-black px-8 py-4 rounded-lg"
                    onClick={() => router.push("/")}
                  >
                    <p className="font-inter-semibold text-lg text-[#BFFF0B]">
                      Start now
                    </p>
                  </button>
                  <button
                    className="bg-white border border-[#E5E8E3] px-8 py-4 rounded-lg"
                    onClick={() => router.push("/login")}
                  >
                    <p className="font-inter-semibold text-lg text-[#242628]">
                      Contact Sales
                    </p>
                  </button>
                </div>
              </Col>
              <Col xs={12}>
                <div className="flex items-center justify-end">
                  <Image src={whatWeDoImage} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </GeneralLandingPageWrapper>

      <section className="bg-[#FAFAF9] py-20">
        <GeneralLandingPageWrapper>
          <div className="flex justify-center">
            <div className="font-jakarta-regular text-5xl text-center leading-16">
              <h1 className="font-jakarta-semibold">All your trading needs </h1>
              <h1>in one place</h1>
            </div>
          </div>
          <Row className="mt-20">
            <Col xs={8}>
              <span>
                <Image src={padlocak} alt="" />
              </span>
              <h2 className="text-[#505D18] text-lg font-inter-semibold my-3">
                Simple, smart & secure.
              </h2>
              <p className="font-inter-regular text-base text-[#242628] w-4/5">
                No more chasing receipt papers. Pay with your card and easily
                get reimbursement.
              </p>
            </Col>
            <Col xs={8}>
              <span>
                <Image src={badge} alt="" />
              </span>
              <h2 className="text-[#505D18] text-lg font-inter-semibold my-3">
                Bye to errors & fraud.
              </h2>
              <p className="font-inter-regular text-base text-[#242628] w-4/5">
                Define and enforce spending limits. Nothing falls through the
                cracks.
              </p>
            </Col>
            <Col xs={8}>
              <span>
                <Image src={riskyIcon} alt="" />
              </span>
              <h2 className="text-[#505D18] text-lg font-inter-semibold my-3">
                Forget risky cash management.
              </h2>
              <p className="font-inter-regular text-base text-[#242628] w-4/5">
                Define and enforce spending limits. Nothing falls through the
                cracks.
              </p>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <section className="bg-[#0A0D14] py-20">
        <GeneralLandingPageWrapper>
          <Row align={"middle"}>
            <Col xs={12}>
              <div>
                <h1 className="text-[#F9F9F9] text-3xl font-inter-semibold">
                  Giftcard Purchase
                </h1>
                <p className="my-4 font-inter-regular text-[#F2F2F2] text-2xl w-4/5">
                  Start SPENDING while you wait. Our PAYMENT comes first.
                </p>
                <Link href={"/login"}>
                  <button className="flex items-center gap-2 mt-4">
                    <p className="text-[#879D29] font-inter-medium">
                      Start Trading Now
                    </p>
                    <Image src={arrowRightGreen} alt="" />
                  </button>
                </Link>
              </div>
            </Col>
            <Col xs={12}>
              <div className="min-h-[560px] bg-[#9FE870] rounded-xl w-4/5 mx-auto">

              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
    </>
  );
};

export default WhatWeDo;
