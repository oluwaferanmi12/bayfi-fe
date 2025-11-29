"use client";

import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import React, { useState } from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import beginIcon from "@/assets/svg/landing-support.svg";
import serviceIcon from "@/assets/svg/service-landing.svg";
import strategyIcon from "@/assets/svg/strategy.svg";
import combinedImage from "@/assets/svg/combined-image.svg";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import ipadPhone from "@/assets/svg/ipad-pro.svg";

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const journeyArray = [
    {
      icon: beginIcon,
      mainText: "Begin your journey",
      textVal:
        "AI assist for SQL and formulas, and much more. We’ve built a fast engine under the hood, so you’ll find Equals performs.",
    },
    {
      icon: serviceIcon,
      mainText: "Choose Your Service",
      textVal:
        "AI assist for SQL and formulas, and much more. We’ve built a fast engine under the hood, so you’ll find Equals performs.",
    },
    {
      icon: strategyIcon,
      mainText: "Complete in Minutes",
      textVal:
        "AI assist for SQL and formulas, and much more. We’ve built a fast engine under the hood, so you’ll find Equals performs.",
    },
  ];
  return (
    <section className="bg-[#F7F8FA] lg:pt-28 pt-10 pb-10">
      <GeneralLandingPageWrapper>
        <Row>
          <Col lg={12} xs={24}>
            <div>
              <RevealOnScroll delay={0.5}>
                <span className="border px-4 rounded-full py-2 border-[#DEDEDE] font-jakarta-regular">
                  How it works
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <div className="lg:mt-8 mt-4 lg:w-4/5">
                  <p className="lg:text-5xl text-3xl font-jakarta-medium leading-10 lg:leading-16">
                    Save time and get more done with Bayfi
                  </p>
                  <p className="lg:text-lg text-base mt-3 lg:hidden text-[#666666] font-inter-regular">
                    We believe trading crypto should be easy and hassle-free -
                    buy, trade and sell with no wahala.
                  </p>
                  <div className="mt-8 lg:hidden">
                    <Image src={ipadPhone} alt="" />
                  </div>
                </div>
              </RevealOnScroll>
              <div className="mt-8">
                {journeyArray.map((item, idx) => {
                  return (
                    <RevealOnScroll delay={(idx + 1) * 0.8} key={idx}>
                      <div
                        key={idx}
                        className="py-6 border-b border-[#DEDEDE] w-4/5"
                      >
                        <div className="flex items-center gap-4 ">
                          <span>
                            <Image alt="" src={item.icon} />
                          </span>
                          <p className="font-jakarta-semibold text-xl">
                            {item.mainText}
                          </p>
                        </div>
                        {activeIndex === idx && (
                          <p className=" text-[#666666] mt-4 text-lg font-jakarta-regular">
                            {item.textVal}
                          </p>
                        )}
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col lg={12} xs={0}>
            <RevealOnScroll delay={0.5}>
              <div className="mb-16">
                <p className="text-lg text-[#666666] font-inter-regular">
                  We believe trading crypto should be easy and hassle-free -
                  buy, trade and sell with no wahala.
                </p>
              </div>
              <Image src={combinedImage} alt="" />
            </RevealOnScroll>
          </Col>
        </Row>
      </GeneralLandingPageWrapper>
    </section>
  );
};
