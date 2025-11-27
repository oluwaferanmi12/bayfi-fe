"use client";

import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import whatWeDoImage from "@/assets/svg/what-we-do-image.svg";
import Image from "next/image";

const WhatWeDo = () => {
  const router = useRouter();
  return (
    <>
      <GeneralLandingPageWrapper>
        <section className="h-screen min-h-screen bg-white  flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Row align={"middle"} className="w-full">
              <Col xs={12}>
                <p className="text-[#D28B28] text-xl font-inter-semibold">
                  OUR SERVICES
                </p>
                <div className="font-inter-medium text-[#242628] text-6xl my-6 leading-16">
                  <p>
                    We <span className="font-inter-bold">Trade</span> , We
                    <span className="font-inter-bold"> Fund</span> ,
                  </p>
                  <p>
                    We <span className="font-inter-bold">Top up.</span>{" "}
                  </p>
                </div>
                <div>
                  <p className="text-[#242628] font-inter-regular text-xl w-4/5">
                    Supercharge your finance, empower your teams and track the
                    pulse of your business with an end-to-end expense management
                    platform tailored for African SMBs.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-12">
                  <button
                    className="bg-black px-8 py-4 rounded-lg"
                    onClick={() => router.push("/")}
                  >
                    <p className="font-inter-semibold text-lg text-[#BFFF0B]">
                      Start now
                    </p>
                  </button>
                  <button
                    className="bg-white border border-[#E5E8E3] px-8 py-4 rounded-lg"
                    onClick={() => router.push("/login")}
                  >
                    <p className="font-inter-semibold text-lg text-[#242628]">
                      Contact Sales
                    </p>
                  </button>
                </div>
              </Col>
              <Col xs={12}>
              <div className="flex items-center justify-center">

                <Image src={whatWeDoImage} alt="" />
              </div>
              </Col>
            </Row>
          </div>
        </section>
      </GeneralLandingPageWrapper>
    </>
  );
};

export default WhatWeDo;
