import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";
import arrowRightGreen from "@/assets/svg/arrow-right-bg-green.svg";
import ipadPhone from "@/assets/svg/ipad-pro.svg";

function TradingArea() {
  return (
    <section className="bg-white pt-12 pb-8">
      <GeneralLandingPageWrapper>
        <div className="bg-black rounded-lg">
          <Row>
            <Col xs={24} lg={12} className="zigZagBg">
              <div className=" lg:w-[70%] w-full mx-auto py-10 lg:py-20 px-4">
                <p className="font-jakarta-semibold text-3xl lg:text-5xl leading-10 lg:leading-16 text-white">
                  Trading Giftcards is easier than Further Maths
                </p>
                <div className="my-8">
                  <p className="text-[#9A9A9A] text-base lg:text-lg font-jakarta-regular">
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
            <Col xs={24} lg={12}>
              <div className="relative h-full w-full flex items-center justify-center">
                <Image src={ipadPhone} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </GeneralLandingPageWrapper>
    </section>
  );
}

export default TradingArea;
