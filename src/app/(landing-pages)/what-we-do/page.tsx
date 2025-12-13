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
import headPhonIcon from "@/assets/svg/headphone-icon.svg";
import seamlessIntegration from "@/assets/svg/seamless-integration.svg";
import googleBing from "@/assets/svg/google-bing-card.svg";
import TradingArea from "@/components/UIs/landing/trading-area";
import Footer from "@/components/UIs/landing/footer";
import { Faq } from "@/components/UIs/landing/faq";

const WhatWeDo = () => {
  const router = useRouter();
  return (
    <>
      <GeneralLandingPageWrapper>
        <section className="heightAdjustment bg-white  flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Row align={"middle"} className="w-full">
              <Col lg={12} xs={24}>
                <h5 className="text-[#D28B28] text-base lg:text-xl font-inter-semibold">
                  OUR SERVICES
                </h5>
                <div className="font-inter-medium text-[#242628] text-4xl lg:text-6xl my-3 lg:my-6 leading-16">
                  <h1>
                    We <span className="font-inter-bold">Trade</span> , We
                    <span className="font-inter-bold"> Fund</span> ,
                  </h1>
                  <h1>
                    We <span className="font-inter-bold">Top up.</span>{" "}
                  </h1>
                </div>
                <div>
                  <h3 className="text-[#242628] font-inter-regular text-base lg:text-xl w-full lg:w-4/5">
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
                    <p className="font-inter-semibold text-sm lg:text-lg text-[#BFFF0B]">
                      Start now
                    </p>
                  </button>
                  <button
                    className="bg-white border border-[#E5E8E3] px-8 py-4 rounded-lg"
                    onClick={() => router.push("/login")}
                  >
                    <p className="font-inter-semibold text-sm lg:text-lg text-[#242628]">
                      Contact Sales
                    </p>
                  </button>
                </div>
              </Col>
              <Col lg={12} xs={24}>
                <div className="flex items-center justify-end lg:mt-0 mt-8">
                  <Image src={whatWeDoImage} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </GeneralLandingPageWrapper>

      <section className="bg-[#FAFAF9] py-30">
        <GeneralLandingPageWrapper>
          <div className="flex justify-center">
            <div className="font-jakarta-regular text-4xl lg:text-5xl text-center leading-9 lg:leading-16">
              <h1 className="font-jakarta-semibold">All your trading needs </h1>
              <h1>in one place</h1>
            </div>
          </div>
          <Row className="lg:mt-20 mt-10">
            <Col lg={8} xs={24} className="mb-12 lg:mb-0">
              <span>
                <Image src={padlocak} alt="" />
              </span>
              <h2 className="text-[#505D18] text-lg font-inter-semibold my-3">
                Simple, smart & secure.
              </h2>
              <p className="font-inter-regular text-base text-[#242628] lg:w-4/5">
                No more chasing receipt papers. Pay with your card and easily
                get reimbursement.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-12 lg:mb-0">
              <span>
                <Image src={badge} alt="" />
              </span>
              <h2 className="text-[#505D18] text-lg font-inter-semibold my-3">
                Bye to errors & fraud.
              </h2>
              <p className="font-inter-regular text-base text-[#242628] lg:w-4/5">
                Define and enforce spending limits. Nothing falls through the
                cracks.
              </p>
            </Col>
            <Col lg={8} xs={24} className="mb-12 lg:mb-0">
              <span>
                <Image src={riskyIcon} alt="" />
              </span>
              <h2 className="text-[#505D18] text-lg font-inter-semibold my-3">
                Forget risky cash management.
              </h2>
              <p className="font-inter-regular text-base text-[#242628] lg:w-4/5">
                Define and enforce spending limits. Nothing falls through the
                cracks.
              </p>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <section className="bg-[#0A0D14] py-20">
        <GeneralLandingPageWrapper>
          <Row align={"middle"} className="mb-20">
            <Col lg={12} xs={24}>
              <div>
                <h1 className="text-[#F9F9F9] text-2xl lg:text-3xl font-inter-semibold">
                  Giftcard Purchase
                </h1>
                <p className="my-4 font-inter-regular text-[#F2F2F2] text-base lg:text-2xl lg:w-4/5">
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
            <Col lg={12} xs={24}>
              <div className="lg:min-h-[560px] min-h-[400px] bg-[#9FE870] py-8 flex flex-col  items-center rounded-xl lg:w-4/5 w-full mx-auto mt-8 lg:mt-0">
                <div className="flex items-center gap-3">
                  <Image src={headPhonIcon} alt="" />
                  <p className="font-jakarta-semibold text-base lg:text-xl">
                    Our RATES walk in HIGH heels.
                  </p>
                </div>
                <div className="my-12 h-[150px] lg:h-[200px]">
                  <Image src={seamlessIntegration} alt="" />
                </div>
                <div className="lg:w-4/5 w-full">
                  <p className="text-center font-inter-regular text-base lg:text-lg">
                    {`Curious to know how high? There's a "Trade Now" button close
                    by. Use it!`}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row align={"middle"} className="mb-20">
            <Col lg={12} xs={24}>
              <div>
                <h1 className="text-[#F9F9F9] text-2xl lg:text-3xl font-inter-semibold">
                  CRYPTO TRADE
                </h1>
                <p className="my-4 font-inter-regular text-[#F2F2F2] text-base lg:text-2xl lg:w-4/5">
                  Create a plan that works for your unique needs and goals with
                  our easy-to-use budgeting structure.
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
            <Col lg={12} xs={24}>
              <div className="lg:min-h-[560px] min-h-[400px] bg-[#FFFFFF] border border-[#DEDEDE] py-8 flex flex-col  items-center rounded-xl lg:w-4/5 mx-auto mt-8 lg:mt-0">
                <div className="flex items-center gap-3">
                  <Image src={headPhonIcon} alt="" />
                  <p className="font-jakarta-semibold text-base lg:text-xl">
                    {`Buy or Sell, you're getting the best deal ever.`}
                  </p>
                </div>
                <div className="my-12 h-[150px] lg:h-[200px]">
                  <Image src={googleBing} alt="" />
                </div>
                <div className="w-4/5">
                  <p className="text-center font-inter-regular text-lg">
                    {`All in one kind of alerts from
one place`}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row align={"middle"} className="mb-20">
            <Col lg={12} xs={24}>
              <div>
                <h1 className="text-[#F9F9F9] text-2xl lg:text-3xl font-inter-semibold">
                  BILL PAYMENTS
                </h1>
                <p className="my-4 font-inter-regular text-[#F2F2F2] text-base lg:text-2xl lg:w-4/5">
                  Create a plan that works for your unique needs and goals with
                  our easy-to-use budgeting structure.
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
            <Col lg={12} xs={24}>
              <div className="lg:min-h-[560px] min-h-[400px] bg-[#9FE870] py-8 flex flex-col  items-center rounded-xl lg:w-4/5 mx-auto mt-8 lg:mt-0">
                <div className="flex items-center gap-3">
                  <Image src={headPhonIcon} alt="" />
                  <p className="font-jakarta-semibold lg:text-xl">
                    Seamless Integration
                  </p>
                </div>
                <div className="my-12 h-[150px] lg:h-[200px]">
                  <Image src={seamlessIntegration} alt="" />
                </div>
                <div className="lg:w-4/5 w-full">
                  <p className="text-center font-inter-regular lg:text-lg">
                    {`Secure authentication with
multi factor verification`}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <Faq />
      <TradingArea />
      <Footer />
    </>
  );
};

export default WhatWeDo;
