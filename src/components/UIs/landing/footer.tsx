import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";

function Footer() {
  const companyArray = [
    "About-us",
    "Why you choose us",
    "Partnership",
    "Work with us",
  ];
  const serviceArray = ["Giftcard Trade", "Crypto Trade", "Bill Payment"];
  const clientsArray = ["Blogs", "Case Studies", "Testimonials"];
  return (
    <section className="bg-black pt-20 relative overflow-hidden">
      <GeneralLandingPageWrapper>
        <Row>
          <Col xs={24} lg={14}>
            <div className="flex lg:flex-row flex-col items-start justify-between">
              <div>
                <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                  COMPANY
                </p>
                <div className="lg:mt-8 mt-4">
                  {companyArray.map((item, index) => {
                    return (
                      <Link key={index} href={""}>
                        <p className="text-[#9A9A9A] font-inter-light mb-4 text-base">
                          {item.toUpperCase()}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                  SERVICES
                </p>
                <div className="lg:mt-8 mt-4">
                  {serviceArray.map((item, index) => {
                    return (
                      <Link key={index} href={""}>
                        <p className="text-[#9A9A9A] font-inter-light mb-4 text-base">
                          {item.toUpperCase()}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                  CLIENTS
                </p>
                <div className="lg:mt-8 mt-4">
                  {clientsArray.map((item, index) => {
                    return (
                      <Link key={index} href={""}>
                        <p className="text-[#9A9A9A] font-inter-light mb-4 text-base">
                          {item.toUpperCase()}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <div className="bg-[#FEFBF61A] rounded-[20px] p-6 w-full lg:w-[80%] ml-auto">
              <p className="text-[#FEFBF6] text-base lg:text-xl">
                SUBSCRIBE TO OUR
              </p>
              <p className="lg:text-6xl text-3xl font-jakarta-bold text-[#FEFBF6] mt-2">
                NEWSLETTER
              </p>
              <Row align="middle" className="flex mt-12">
                <Col xs={16}>
                  <div>
                    <input
                      className="py-3 font-inter-regular  text-[#9A9A9A] border-b border-[#FEFBF61A] w-full"
                      placeholder="Enter your email address..."
                    />
                  </div>
                </Col>
                <Col xs={8}>
                  <button className="bg-white p-4 py-3 text-base text-[#222222] font-inter-semibold rounded-full w-full">
                    Subscribe
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </GeneralLandingPageWrapper>
      <div className="m-0 lg:mt-30 mt-10 p-0 leading-40 overflow-hidden">
        <p className="lg:text-[280px] text-[120px] w-full text-center whitespace-nowrap text-white font-jakarta-bold">
          BAYFI
        </p>
      </div>
    </section>
  );
}

export default Footer;
