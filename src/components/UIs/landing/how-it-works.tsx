"use client";

import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import React, { useState } from "react";
import { Col, Row } from "antd";
import Image from "next/image";

import beginIcon from "@/assets/svg/landing-support.svg";
import serviceIcon from "@/assets/svg/service-landing.svg";
import strategyIcon from "@/assets/svg/strategy.svg";

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
    <section className="bg-[#F7F8FA] pt-28 pb-10">
      <GeneralLandingPageWrapper>
        <Row>
          <Col xs={12}>
            <div>
              <span className="border px-4 rounded-full py-2 border-[#DEDEDE] font-jakarta-regular">
                How it works
              </span>
              <div className="mt-8 w-4/5">
                <p className="text-5xl font-jakarta-medium leading-16">
                  Save time and get more done with Bayfi
                </p>
              </div>
              <div className="mt-8">
                {journeyArray.map((item, idx) => {
                  return (
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
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <p className="text-lg text-[#666666] font-inter-regular">
                We believe trading crypto should be easy and hassle-free - buy,
                trade and sell with no wahala.
              </p>
            </div>
          </Col>
        </Row>
      </GeneralLandingPageWrapper>
    </section>
  );
};
