"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import bouncer from "@/assets/svg/bouncer.svg";
import firstTimeEase from "@/assets/svg/first-time-ease.svg";
import seamlessIntegration from "@/assets/svg/seamless-integration.svg";
import arrowWithBg from "@/assets/svg/arrow-with-white-bg.svg";
import feature1 from "@/assets/svg/feature-1.svg";
import feature2 from "@/assets/svg/feature-2.svg";
import feature3 from "@/assets/svg/feature-3.svg";
import feature4 from "@/assets/svg/feature-4.svg";
import playIcon from "@/assets/svg/playBgIcon.svg";
import beginIcon from "@/assets/svg/landing-support.svg";
import serviceIcon from "@/assets/svg/service-landing.svg";
import strategyIcon from "@/assets/svg/strategy.svg";
import { useState } from "react";
import Footer from "@/components/UIs/landing/footer";
import TradingArea from "@/components/UIs/landing/trading-area";
import { HeroSection } from "@/components/UIs/landing/hero-section";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featureArray = [
    {
      mainText: "Trade Giftcards",
      subText:
        "Turn your giftcards to instant credit alerts. We accept Apple, RazerGold, Steam, Sephora and lots more.",
      icon: feature1,
    },
    {
      mainText: "Trade Crypto",
      subText:
        "Swap your Bitcoin and other coins faster than Aviator eats your money",
      icon: feature2,
    },
    {
      mainText: "The Calma Experience",
      subText:
        "You can now chat with a representative while your transaction is processing. Your funds are secure with us.",
      icon: feature3,
    },
    {
      mainText: "Pay for Services (Coming soon)",
      subText:
        "Airtime, data, electricity, and other utilities — Pay fast and secure",
      icon: feature4,
    },
  ];

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
    <>
      <HeroSection />
      <section>
        <GeneralLandingPageWrapper>
          <p className="text-[#232323] text-center font-inter-semibold text-5xl">
            Bayfi makes life eazii
          </p>
          <div className="text-[#9A9A9A] w-1/2 mx-auto text-center mt-4 font-inter-light text-lg">
            <p>With our user-friendly interface, you can change all</p>
            <p>your crypto and giftcards to cash in seconds.</p>
          </div>
          <Row gutter={24} className="my-20">
            <Col xs={8}>
              <div className="min-h-[520px] h-[520px] flex flex-col items-center w-full p-4 py-8 bg-[#000000] rounded-[10px]">
                <p className="text-white font-inter-medium text-xl text-center">
                  Bouncer Level Security
                </p>
                <div className="mt-4">
                  <Image src={bouncer} alt="" />
                </div>
                <div>
                  <p className="text-lg font-inter-regular text-[#9A9A9A]">
                    Trade crypto sell gift cards or withdraw funds in just a few
                    taps all protected with top level security.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={8}>
              <div className="min-h-[520px] h-[520px] flex flex-col items-center p-4 py-8 w-full bg-bayfi-grey-500 rounded-[10px]">
                <p className="font-inter-medium text-xl text-black text-center">
                  First Time Ease
                </p>
                <div className="mt-4">
                  <Image src={firstTimeEase} alt="" />
                </div>
                <p className="text-lg font-inter-regular text-black mt-12">
                  Setting up your account, eazi! Trading digital assets, eazi!
                  No need to ask for a masterclass or any format. Enjoy 24/7
                  soft transactions.
                </p>
              </div>
            </Col>
            <Col xs={8}>
              <div className="min-h-[520px] h-[520px] flex flex-col items-center p-4 py-8 w-full bg-[#9FE870] rounded-[10px]">
                <p className="font-inter-medium text-xl text-black text-center">
                  Seamless Integration
                </p>
                <div className="mt-4">
                  <Image src={seamlessIntegration} alt="" />
                </div>
                <p className="text-lg font-inter-regular text-black text-justify mt-12">
                  Keep your wallet safe by using triple protection.
                </p>
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <section className="bg-black">
        <GeneralLandingPageWrapper>
          <Row className="my-20">
            <Col xs={12} className="border-r border-[rgba(255,255,255,0.2)]">
              <h3>
                <span className="rounded-full font-jakarta-semibold text-white border border-[#9FE870] py-2 px-4">
                  FEATURES
                </span>
              </h3>
              <div className="text-white text-5xl font-jakarta-semibold my-6 leading-16">
                <p>Our You-nique</p>
                <p>Features</p>
              </div>
              <div>
                <p className="text-[#9A9A9A] text-lg font-jakarta-regular w-4/5">
                  Automation & workflow features include a drag & drop builder,
                  automated task assignments, conditional with good triggers,
                  and api integrations.
                </p>
              </div>

              <div className="mt-12">
                <button className="bg-[#9FE870] rounded-full py-2 px-4 flex items-center gap-4 font-jakarta-semibold">
                  <p>Try it now</p>
                  <Image src={arrowWithBg} alt="" />
                </button>
              </div>
            </Col>
            <Col xs={12}>
              <div className="w-4/5 ml-auto">
                {featureArray.map((item, index) => {
                  return (
                    <div key={index} className="flex items-start gap-6 mb-16">
                      <Image src={item.icon} alt="" />
                      <div>
                        <p className="text-xl font-jakarta-semibold mb-4 text-white">
                          {item.mainText}
                        </p>
                        <p className="text-[#9A9A9A] text-lg font-jakarta-regular">
                          {item.subText}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
        <div className="w-full overflow-x-hidden">
          <p className="text-[#FFFFFF] font-jakarta-medium text-[80px] text-nowrap">
            The Trading App That Gets You The Trading App That Gets You
          </p>
        </div>
        <GeneralLandingPageWrapper>
          <div className="mt-12 h-[800px] rounded-t-lg bg-[#D9D9D9] flex items-center justify-center">
            <div className="bg-white h-[120px] aspect-square rounded-full flex items-center justify-center">
              <Image src={playIcon} alt="" />
            </div>
          </div>
        </GeneralLandingPageWrapper>
      </section>
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
                  We believe trading crypto should be easy and hassle-free -
                  buy, trade and sell with no wahala.
                </p>
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <TradingArea />
      <Footer />
    </>
  );
}
