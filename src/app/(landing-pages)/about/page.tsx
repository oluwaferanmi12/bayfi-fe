import React from "react";
import peoplePlacholder from "@/assets/svg/people-placeholder.svg";
import Image from "next/image";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import badge from "@/assets/svg/badge.svg";
import teamIcon from "@/assets/svg/team-icon.svg";
import TradingArea from "@/components/UIs/landing/trading-area";
import Footer from "@/components/UIs/landing/footer";
import { TeamWrapper } from "@/components/features/landing-page/team-wrapper";

const About = () => {
  return (
    <>
      <section className="lg:min-h-[60vh] lg:h-[60vh] h-[40vh] flex flex-col items-center justify-center">
        <p className="lg:text-7xl text-4xl font-jakarta-medium">
          Convert, Pay and Flex.
        </p>
        <p className="text-center  text-[#586068] lg:text-xl text-lg font-inter-regular mt-4">
          Trade your giftcards and crypto, pay bills and have fun while doing
          them.
        </p>
      </section>
      <section className="flex  items-center lg:gap-20 gap-8  overflow-hidden">
        <div className="shrink-0 w-62.5 lg:w-150">
          <Image className="min-w-full" src={peoplePlacholder} alt="" />
        </div>
        <div className="shrink-0 w-62.5 lg:w-150">
          <Image className="min-w-full" src={peoplePlacholder} alt="" />
        </div>
        <div className="shrink-0 w-62.5 lg:w-150">
          <Image className="min-w-full" src={peoplePlacholder} alt="" />
        </div>
      </section>
      <section className="bg-[#0A0D14] mt-12 py-20">
        <GeneralLandingPageWrapper>
          <Row>
            <Col lg={12} xs={24}>
              <div className="flex items-center gap-2 mb-4">
                <Image src={badge} alt="" />
                <p className="text-bayfi-green-700 font-inter-medium text-sm lg:text-base">
                  Mission
                </p>
              </div>
              <div className="w-full lg:w-4/5">
                <p className="text-white font-jakarta-semibold text-2xl lg:text-4xl leading-9 lg:leading-12">
                  To make everyday financial transactions simple, fast, and
                  reliable by providing a single platform for all your trading
                  needs
                </p>
                <p className="text-[#DCDCDC] mt-4 font-inter-light text-base lg:text-xl">
                  To make everyday financial transactions simple, fast, and
                  reliable by providing a single platform for trading crypto,
                  exchanging gift cards, sending money, buying airtime, and
                  paying bills.
                </p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="flex items-center gap-2 mb-4 mt-12 lg:mt-0">
                <Image src={badge} alt="" />
                <p className="text-bayfi-green-700 font-inter-medium text-sm lg:text-base">
                  Vision
                </p>
              </div>
              <div className="lg:w-4/5 w-full">
                <p className="text-white font-jakarta-semibold text-2xl lg:text-4xl leading-9 lg:leading-12">
                  To be the go-to platform in Africa for seamless digital
                  transactions, empowering individuals to manage their finances
                  anytime, anywhere.
                </p>
                <p className="text-[#DCDCDC] mt-4 font-inter-light text-base lg:text-xl">
                  To be the go-to platform in Africa for seamless digital
                  transactions, empowering individuals and businesses to manage
                  their finances anytime, anywhere.
                </p>
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <section className="py-16">
        <GeneralLandingPageWrapper>
          <div className="flex items-center gap-2">
            <Image src={teamIcon} alt="" />
            <p className="text-bayfi-green-700 text-sm lg:text-base font-jakarta-medium">
              Team
            </p>
          </div>
          <p className="font-jakarta-medium text-4xl py-8">Meet our team</p>
          <TeamWrapper />
        </GeneralLandingPageWrapper>
      </section>
      <TradingArea />
      <Footer />
    </>
  );
};

export default About;
