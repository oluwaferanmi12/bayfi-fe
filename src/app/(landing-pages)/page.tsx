"use client";

import { Col, Row } from "antd";
import Link from "next/link";
import bitcoins from "@/assets/svg/bitcoin-landing.svg";
import Image from "next/image";
import landingPhone from "@/assets/svg/landing-page-phone.svg";
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
import arrowRightGreen from "@/assets/svg/arrow-right-bg-green.svg";
import ipadPhone from "@/assets/svg/ipad-pro.svg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const companyArray = [
    "About-us",
    "Why you choose us",
    "Partnership",
    "Work with us",
  ];
  const serviceArray = ["Giftcard Trade", "Crypto Trade", "Bill Payment"];
  const clientsArray = ["Blogs", "Case Studies", "Testimonials"];
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
      <section className="min-h-screen mb-[600px] h-screen bg-[#1C1B1F] hero-bg flex justify-center items-center flex-col">
        <Row className="w-full" justify={"center"}>
          <Col xs={12}>
            <div className="text-[64px] relative text-white text-center font-manrope-medium">
              <h1 className="text-center">Trade it, Get Cash</h1>
              <h1 className="bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
                <span>Fast fast, No Wahala</span>
              </h1>
            </div>
            <p className="text-[#EAEAF1] font-manrope-regular text-lg my-4 text-center">
              Siuuuuuper fast transactions
            </p>
            <div className="flex items-center justify-center mt-8">
              <Link href="/login">
                <button className="bg-white rounded-full p-4 px-8 ">
                  <p className="font-manrope-semibold text-[#0C0C13]">
                    Start trading
                  </p>
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Image src={bitcoins} alt="" />
            </div>
            <div className="absolute w-full flex justify-center ">
              <Image
                src={landingPhone}
                alt=""
                className="border-6 rounded-[48px] border-[#BEDD3A]"
              />
            </div>
          </Col>
        </Row>
      </section>
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
                {/* <div>
                  <Image src={servicePhones} alt="" />
                </div> */}
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <section className="bg-white pt-12 pb-8">
        <GeneralLandingPageWrapper>
          <div className="bg-black rounded-lg">
            <Row>
              <Col xs={12} className="zigZagBg">
                <div className=" w-[70%] mx-auto py-20">
                  <p className="font-jakarta-semibold text-5xl leading-16 text-white">
                    Trading Giftcards is easier than Further Maths
                  </p>
                  <div className="my-8">
                    <p className="text-[#9A9A9A] text-lg font-jakarta-regular">
                      Automation & workflow features include a drag & drop
                      builder, automated task assignments, conditional with good
                      triggers, and api integrations.
                    </p>
                  </div>
                  <div>
                    <button className="flex bg-black mt-4 border border-[#272727] px-4 py-2 rounded-full items-center gap-3">
                      <p className="font-jakarta-semibold text-white">
                        Try for free
                      </p>
                      <Image src={arrowRightGreen} alt="" />
                    </button>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="relative h-full w-full">
                  <div className="absolute bottom-0 right-0">
                    <Image src={ipadPhone} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </GeneralLandingPageWrapper>
      </section>
      <section className="bg-black pt-20 relative overflow-hidden">
        <GeneralLandingPageWrapper>
          <Row>
            <Col xs={14}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                    COMPANY
                  </p>
                  <div className="mt-8">
                    {companyArray.map((item, index) => {
                      return (
                        <Link key={index} href={""}>
                          <p className="text-[#9A9A9A] font-inter-light mb-4 text-base">
                            {item.toUpperCase()}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                    SERVICES
                  </p>
                  <div className="mt-8">
                    {serviceArray.map((item, index) => {
                      return (
                        <Link key={index} href={""}>
                          <p className="text-[#9A9A9A] font-inter-light mb-4 text-base">
                            {item.toUpperCase()}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                    CLIENTS
                  </p>
                  <div className="mt-8">
                    {clientsArray.map((item, index) => {
                      return (
                        <Link key={index} href={""}>
                          <p className="text-[#9A9A9A] font-inter-light mb-4 text-base">
                            {item.toUpperCase()}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={10}>
              <div className="bg-[#FEFBF61A] rounded-[20px] p-6 w-[80%] ml-auto">
                <p className="text-[#FEFBF6] text-xl">SUBSCRIBE TO OUR</p>
                <p className="text-6xl font-jakarta-bold text-[#FEFBF6] mt-2">
                  NEWSLETTER
                </p>
                <Row align="middle" className="flex mt-12">
                  <Col xs={16}>
                    <div>
                      <input
                        className="py-3 font-inter-regular  text-[#9A9A9A] border-b border-[#FEFBF61A] w-full"
                        placeholder="Enter your email address..."
                      />
                    </div>
                  </Col>
                  <Col xs={8}>
                    <button className="bg-white p-4 py-3 text-base text-[#222222] font-inter-semibold rounded-full w-full">
                      Subscribe
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className=" m-0 mt-20 p-0 leading-40">
            <p className="text-[280px] w-full text-center text-white font-jakarta-bold">
              BAYFI LTD
            </p>
          </div>
        </GeneralLandingPageWrapper>
      </section>
    </>
  );
}
