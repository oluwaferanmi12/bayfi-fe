"use client"

import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import arrowWithBg from "@/assets/svg/arrow-with-white-bg.svg";
import feature1 from "@/assets/svg/feature-1.svg";
import feature2 from "@/assets/svg/feature-2.svg";
import feature3 from "@/assets/svg/feature-3.svg";
import feature4 from "@/assets/svg/feature-4.svg";
import playIcon from "@/assets/svg/playBgIcon.svg";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { motion } from "framer-motion";

export const FeatureSection = () => {
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
  return (
    <>
      <section className="bg-black">
        <GeneralLandingPageWrapper>
          <Row className="my-20">
            <Col xs={12} className="border-r border-[rgba(255,255,255,0.2)]">
              <RevealOnScroll delay={3}>
                <h3>
                  <span className="rounded-full font-jakarta-semibold text-white border border-[#9FE870] py-2 px-4">
                    FEATURES
                  </span>
                </h3>
              </RevealOnScroll>
              <RevealOnScroll duration={1}>
                <div className="text-white text-5xl font-jakarta-semibold my-6 leading-16">
                  <p>Our You-nique</p>
                  <p>Features</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll duration={2}>
                <div>
                  <p className="text-[#9A9A9A] text-lg font-jakarta-regular w-4/5">
                    Automation & workflow features include a drag & drop
                    builder, automated task assignments, conditional with good
                    triggers, and api integrations.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll duration={4}>
                <div className="mt-12">
                  <button className="bg-[#9FE870] rounded-full py-2 px-4 flex items-center gap-4 font-jakarta-semibold">
                    <p>Try it now</p>
                    <Image src={arrowWithBg} alt="" />
                  </button>
                </div>
              </RevealOnScroll>
            </Col>
            <Col xs={12}>
              <div className="w-4/5 ml-auto">
                {featureArray.map((item, index) => {
                  return (
                    <RevealOnScroll
                      delay={(index + 1) * 0.5}
                      direction="left"
                      key={index}
                    >
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
                    </RevealOnScroll>
                  );
                })}
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
        <div className="w-full overflow-x-hidden whitespace-nowrap">
          <motion.div
            className="flex"
              animate={{ x: ["0%", "-50%"] }} // move left
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 15, // control speed
                ease: "linear",
              }}
          >
            <span className="text-[#FFFFFF] font-jakarta-medium text-[80px] text-nowrap">
              The Trading App That Gets You The Trading App That Gets You
            </span>
            <span className="text-[#FFFFFF] font-jakarta-medium text-[80px] text-nowrap">
              The Trading App That Gets You The Trading App That Gets You
            </span>
          </motion.div>
        </div>
        <GeneralLandingPageWrapper>
          <div className="mt-12 h-[800px] rounded-t-lg bg-[#D9D9D9] flex items-center justify-center">
            <div className="bg-white h-[120px] aspect-square rounded-full flex items-center justify-center">
              <Image src={playIcon} alt="" />
            </div>
          </div>
        </GeneralLandingPageWrapper>
      </section>
    </>
  );
};
