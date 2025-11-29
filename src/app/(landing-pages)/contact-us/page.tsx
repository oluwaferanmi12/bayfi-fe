import Footer from "@/components/UIs/landing/footer";
import TradingArea from "@/components/UIs/landing/trading-area";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="min-h-screen h-screen bg-[#F2F4F1]">
        <GeneralLandingPageWrapper>
          <Row align={"middle"} justify={"center"}>
            <Col xs={12}>
              <div>
                <p className=" text-6xl font-inter-medium text-[#242628] leading-18">
                  Contact us for <br />{" "}
                  <span className="font-inter-bold">questions, help,</span>{" "}
                  <br /> and more.
                </p>
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-xl mb-4 ">
                    <p className="text-[#586068] font-inter-light">Hotline:</p>
                    <p className="text-[#242628] font-inter-medium">
                      +234-802-345-6789
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xl mb-4 ">
                    <p className="text-[#586068] font-inter-light">
                      Product questions?
                    </p>
                    <p className="text-[#242628] font-inter-medium">
                      Schedule a meeting
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xl mb-4 ">
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
            <Col xs={12}>
              <div className="p-8 rounded-lg border border-[#E5E8E3] bg-white">
                <Row gutter={24}>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
                        First name*
                      </p>
                      <input
                        placeholder="Enter name"
                        className="w-full placeholder:text-[rgb(188,188,188)] font-inter-regular border border-[#E5E8E3] p-2 rounded-lg"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="mb-4">
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
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
                      <p className="text-[#586068] text-sm font-inter-medium mb-2">
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
