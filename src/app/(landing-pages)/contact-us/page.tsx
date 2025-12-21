import Footer from "@/components/UIs/landing/footer";
import TradingArea from "@/components/UIs/landing/trading-area";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="heightAdjustment bg-[#F2F4F1]">
        <GeneralLandingPageWrapper>
          <Row align={"middle"} justify={"center"}>
            <Col lg={12} xs={24}>
              <div>
                <p className="text-3xl hidden lg:text-6xl font-inter-medium text-[#242628] lg:leading-18">
                  Contact us for <br />{" "}
                  <span className="font-inter-bold">questions, help,</span>{" "}
                  <br /> and more.
                </p>
                 <p className="text-3xl lg:hidden lg:text-6xl font-inter-medium text-[#242628] lg:leading-18">
                  Contact us for {" "}
                  <span className="font-inter-bold">questions, help,</span>{" "}
                   and more.
                </p>
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-base lg:text-xl mb-4 ">
                    <p className="text-[#586068] font-inter-light">Hotline:</p>
                    <p className="text-[#242628] font-inter-medium">
                      +234-802-345-6789
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-base lg:text-xl mb-4 ">
                    <p className="text-[#586068] font-inter-light">
                      Product questions?
                    </p>
                    <p className="text-[#242628] font-inter-medium">
                      Schedule a meeting
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-base lg:text-xl mb-4 ">
                    <p className="text-[#586068] font-inter-light">
                      For support,
                    </p>
                    <p className="text-[#242628] font-inter-medium">
                      Start a chat
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="lg:p-8 p-4 rounded-lg border border-[#E5E8E3] bg-white">
                <Row gutter={24}>
                  <Col lg={12} xs={24}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium lg:mb-2 mb-1">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col lg={12} xs={24}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium lg:mb-2 mb-1">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col lg={12} xs={24}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium lg:mb-2 mb-1">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  

                  <Col xs={24}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-1 lg:mb-2">
                        Message*
                      </p>
                      <textarea
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="mt-4">
                      <button className="text-[#BEDD3A] w-full py-3 rounded-lg bg-black font-inter-medium">
                        Submit
                      </button>
                    </div>
                  </Col>
                </Row>
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

export default ContactUs;
