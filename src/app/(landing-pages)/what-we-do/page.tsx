import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import React from "react";

const WhatWeDo = () => {
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
                <div className="flex items-center gap-2 mt-4">
                  <button className="bg-black">
                      <p className="font-inter-">Start now</p>
                  </button>
                </div>
              </Col>
              <Col xs={12}></Col>
            </Row>
          </div>
        </section>
      </GeneralLandingPageWrapper>
    </>
  );
};

export default WhatWeDo;
