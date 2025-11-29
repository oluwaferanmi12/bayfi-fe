import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import bouncer from "@/assets/svg/bouncer.svg";
import firstTimeEase from "@/assets/svg/first-time-ease.svg";
import seamlessIntegration from "@/assets/svg/seamless-integration.svg";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";

export const LifeEasySection = () => {
  return (
    <section>
      <GeneralLandingPageWrapper>
        <RevealOnScroll delay={0.5} direction="up">
          <p className="text-[#232323] text-center font-inter-semibold text-[32px] lg:text-5xl">
            Bayfi makes life eazii
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <div className="text-[#9A9A9A] lg:w-1/2 hidden lg:block mx-auto text-center mt-4 font-inter-light text-lg">
            <p>With our user-friendly interface, you can change all</p>
            <p>your crypto and giftcards to cash in seconds.</p>
          </div>
          <div className="text-[#9A9A9A] lg:w-1/2  lg:hidden mx-auto text-center mt-4 font-inter-light text-lg">
            <p>
              With our user-friendly interface, you can change all your crypto
              and giftcards to cash in seconds.
            </p>
          </div>
        </RevealOnScroll>

        <Row gutter={24} className="my-20">
          <Col xs={24} lg={8}>
            <RevealOnScroll duration={1} direction="right">
              <div className="min-h-[520px] h-[520px] mb-4 lg:mb-0 flex flex-col items-center w-full p-4 py-8 bg-[#000000] rounded-[10px]">
                <p className="text-white font-inter-medium text-xl text-center">
                  Bouncer Level Security
                </p>
                <div className="mt-4">
                  <Image src={bouncer} alt="" />
                </div>
                <div>
                  <p className="text-lg font-inter-regular text-center text-[#9A9A9A]">
                    Trade crypto sell gift cards or withdraw funds in just a few
                    taps all protected with top level security.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </Col>
          <Col xs={24} lg={8}>
            <RevealOnScroll duration={0.5}>
              <div className="min-h-[520px] h-[520px] mb-4 lg:mb-0 flex flex-col items-center p-4 py-8 w-full bg-bayfi-grey-500 rounded-[10px]">
                <p className="font-inter-medium text-xl text-black text-center">
                  First Time Ease
                </p>
                <div className="mt-4">
                  <Image src={firstTimeEase} alt="" />
                </div>
                <p className="text-lg font-inter-regular text-center text-black mt-12">
                  Setting up your account, eazi! Trading digital assets, eazi!
                  No need to ask for a masterclass or any format. Enjoy 24/7
                  soft transactions.
                </p>
              </div>
            </RevealOnScroll>
          </Col>
          <Col xs={24} lg={8}>
            <RevealOnScroll duration={1} direction="left">
              <div className="min-h-[520px] h-[520px] mb-4 lg:mb-0 flex flex-col items-center p-4 py-8 w-full bg-[#9FE870] rounded-[10px]">
                <p className="font-inter-medium text-xl text-black text-center">
                  Seamless Integration
                </p>
                <div className="mt-4">
                  <Image src={seamlessIntegration} alt="" />
                </div>
                <p className="text-lg font-inter-regular  text-black text-center mt-12">
                  Keep your wallet safe by using triple protection.
                </p>
              </div>
            </RevealOnScroll>
          </Col>
        </Row>
      </GeneralLandingPageWrapper>
    </section>
  );
};
