import React from "react";
import peoplePlacholder from "@/assets/svg/people-placeholder.svg";
import Image from "next/image";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import badge from "@/assets/svg/badge.svg";
import teamIcon from "@/assets/svg/team-icon.svg";
import ceoPlaceholder from "@/assets/svg/ceo-placeholder.svg";
import TradingArea from "@/components/UIs/landing/trading-area";
import Footer from "@/components/UIs/landing/footer";

const About = () => {
  return (
    <>
      <section className="min-h-[60vh] h-[60vh] flex flex-col items-center justify-center">
        <p className="text-7xl font-jakarta-medium">Convert, Pay and Flex.</p>
        <p className="text-center text-[#586068] text-xl font-inter-regular mt-4">
          Trade your giftcards and crypto, pay bills and have fun while doing
          them.
        </p>
      </section>
      <section className="flex  items-center gap-20  overflow-hidden">
        <div className="shrink-0 w-[600px]">
          <Image className="min-w-full" src={peoplePlacholder} alt="" />
        </div>
        <div className="shrink-0 w-[600px]">
          <Image className="min-w-full" src={peoplePlacholder} alt="" />
        </div>
        <div className="shrink-0 w-[600px]">
          <Image className="min-w-full" src={peoplePlacholder} alt="" />
        </div>
      </section>
      <section className="bg-[#0A0D14] mt-12 py-20">
        <GeneralLandingPageWrapper>
          <Row>
            <Col xs={12}>
              <div className="flex items-center gap-2 mb-4">
                <Image src={badge} alt="" />
                <p className="text-bayfi-green-700 font-inter-medium text-base">
                  Mission
                </p>
              </div>
              <div className="w-4/5">
                <p className="text-white font-jakarta-semibold text-4xl leading-12">
                  To make everyday financial transactions simple, fast, and
                  reliable by providing a single platform for all your trading
                  needs
                </p>
                <p className="text-[#DCDCDC] mt-4 font-inter-light text-xl">
                  To make everyday financial transactions simple, fast, and
                  reliable by providing a single platform for trading crypto,
                  exchanging gift cards, sending money, buying airtime, and
                  paying bills.
                </p>
              </div>
            </Col>
            <Col xs={12}>
              <div className="flex items-center gap-2 mb-4">
                <Image src={badge} alt="" />
                <p className="text-bayfi-green-700 font-inter-medium text-base">
                  Vision
                </p>
              </div>
              <div className="w-4/5">
                <p className="text-white font-jakarta-semibold text-4xl leading-12">
                  To be the go-to platform in Africa for seamless digital
                  transactions, empowering individuals to manage their finances
                  anytime, anywhere.
                </p>
                <p className="text-[#DCDCDC] mt-4 font-inter-light text-xl">
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
            <p className="text-bayfi-green-700 text-base font-jakarta-medium">
              Team
            </p>
          </div>
          <p className="font-jakarta-medium text-4xl py-8">Meet our team</p>
          <Row>
            <Col xs={8} className="mb-16">
              <div>
                <Image src={ceoPlaceholder} alt="" />
              </div>
              <div className="mt-6">
                <p className="font-inter-semibold text-lg text-[#0A0D14]">
                  Afeez Onadiran
                </p>
                <p className="font-inter-regular text-[#0A0D14] mt-2">
                  CEO, Bayfi LTD
                </p>
              </div>
            </Col>
            <Col xs={8} className="mb-16">
              <div>
                <Image src={ceoPlaceholder} alt="" />
              </div>
              <div className="mt-6">
                <p className="font-inter-semibold text-lg text-[#0A0D14]">
                  Afeez Onadiran
                </p>
                <p className="font-inter-regular text-[#0A0D14] mt-2">
                  CEO, Bayfi LTD
                </p>
              </div>
            </Col>
            <Col xs={8} className="mb-16">
              <div>
                <Image src={ceoPlaceholder} alt="" />
              </div>
              <div className="mt-6">
                <p className="font-inter-semibold text-lg text-[#0A0D14]">
                  Afeez Onadiran
                </p>
                <p className="font-inter-regular text-[#0A0D14] mt-2">
                  CEO, Bayfi LTD
                </p>
              </div>
            </Col>
            <Col xs={8} className="mb-16">
              <div>
                <Image src={ceoPlaceholder} alt="" />
              </div>
              <div className="mt-6">
                <p className="font-inter-semibold text-lg text-[#0A0D14]">
                  Afeez Onadiran
                </p>
                <p className="font-inter-regular text-[#0A0D14] mt-2">
                  CEO, Bayfi LTD
                </p>
              </div>
            </Col>
            <Col xs={8} className="mb-16">
              <div>
                <Image src={ceoPlaceholder} alt="" />
              </div>
              <div className="mt-6">
                <p className="font-inter-semibold text-lg text-[#0A0D14]">
                  Afeez Onadiran
                </p>
                <p className="font-inter-regular text-[#0A0D14] mt-2">
                  CEO, Bayfi LTD
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
};

export default About;
