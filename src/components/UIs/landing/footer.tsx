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
          <Col xs={14}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#FEFBF6] font-inter-semibold text-xl">
                  COMPANY
                </p>
                <div className="mt-8">
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
                <div className="mt-8">
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
                <div className="mt-8">
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
          <Col xs={10}>
            <div className="bg-[#FEFBF61A] rounded-[20px] p-6 w-[80%] ml-auto">
              <p className="text-[#FEFBF6] text-xl">SUBSCRIBE TO OUR</p>
              <p className="text-6xl font-jakarta-bold text-[#FEFBF6] mt-2">
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
        <div className="m-0 mt-20 p-0 leading-40">
          <p className="text-[280px] w-full text-center whitespace-nowrap text-white font-jakarta-bold">
            BAYFI LTD
          </p>
        </div>
      </GeneralLandingPageWrapper>
    </section>
  );
}

export default Footer;
