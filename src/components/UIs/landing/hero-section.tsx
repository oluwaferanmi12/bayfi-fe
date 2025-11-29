"use client";

import { Col, Row } from "antd";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import bitcoins from "@/assets/svg/bitcoin-landing.svg";
import landingPhone from "@/assets/svg/landing-page-phone.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // 0 -> when top hits top, 1 -> when bottom hits top
  });

  // Text fades out as you scroll down the hero
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Phone fades in + moves into center mid-way
  const phoneOpacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const phoneY = useTransform(scrollYProgress, [0.2, 0.7], [100, 0]);
  const phoneScale = useTransform(scrollYProgress, [0.2, 0.7], [0.8, 1]);
  return (
    <section
      ref={heroRef}
      className="relative h-[200vh] bg-[#1C1B1F] hero-bg mb-20"
    >
      <div className=" top-0 sticky h-screen flex justify-center items-center flex-col">
        <Row className="w-full" justify={"center"}>
          <Col xs={12} className="relative flex flex-col items-center">
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="text-center text-white"
            >
              <div className="text-[64px] relative text-white text-center font-manrope-medium">
                <RevealOnScroll direction="up" withOpacity duration={1}>
                  <h1 className="text-center">Trade it, Get Cash</h1>
                </RevealOnScroll>
                <RevealOnScroll duration={1.5}>
                  <h1 className="bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
                    <span>Fast fast, No Wahala</span>
                  </h1>
                </RevealOnScroll>
              </div>
              <RevealOnScroll duration={2}>
                <p className="text-[#EAEAF1] font-manrope-regular text-lg my-4 text-center">
                  Siuuuuuper fast transactions
                </p>
              </RevealOnScroll>
              <RevealOnScroll duration={2.5}>
                <div className="flex items-center justify-center mt-8">
                  <Link href="/login">
                    <button className="bg-white rounded-full p-4 px-8 ">
                      <p className="font-manrope-semibold text-[#0C0C13]">
                        Start trading
                      </p>
                    </button>
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll duration={3}>
                <div className="flex items-center justify-center ">
                  <Image src={bitcoins} alt="" />
                </div>
              </RevealOnScroll>
            </motion.div>

            <motion.div
              style={{
                opacity: phoneOpacity,
                y: phoneY,
                scale: phoneScale,
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="absolute w-full flex justify-center ">
                <Image src={landingPhone} alt="" />
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
