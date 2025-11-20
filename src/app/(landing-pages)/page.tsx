import { Col, Row } from "antd";
import Link from "next/link";
import bitcoins from "@/assets/svg/bitcoin-landing.svg";
import Image from "next/image";
import landingPhone from "@/assets/svg/landing-page-phone.svg";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import bouncer from "@/assets/svg/bouncer.svg";
import firstTimeEase from "@/assets/svg/first-time-ease.svg";
import seamlessIntegration from "@/assets/svg/seamless-integration.svg";

export default function Home() {
  return (
    <>
      <section className="min-h-screen mb-[600px] h-screen bg-[#1C1B1F] hero-bg flex justify-center items-center flex-col">
        <Row className="w-full" justify={"center"}>
          <Col xs={12}>
            <div className="text-[64px] relative text-white text-center font-manrope-medium">
              <h1 className="text-center">Trade it, Get Cash</h1>
              <h1 className="bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
                <span>Fast fast, No Wahala</span>
              </h1>
            </div>
            <p className="text-[#EAEAF1] font-manrope-regular text-lg my-4 text-center">
              Siuuuuuper fast transactions
            </p>
            <div className="flex items-center justify-center mt-8">
              <Link href="/login">
                <button className="bg-white rounded-full p-4 px-8 ">
                  <p className="font-manrope-semibold text-[#0C0C13]">
                    Start trading
                  </p>
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Image src={bitcoins} alt="" />
            </div>
            <div className="absolute w-full flex justify-center ">
              <Image
                src={landingPhone}
                alt=""
                className="border-6 rounded-[48px] border-[#BEDD3A]"
              />
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <GeneralLandingPageWrapper>
          <p className="text-[#232323] text-center font-inter-semibold text-5xl">
            Bayfi makes life eazii
          </p>
          <div className="text-[#9A9A9A] w-1/2 mx-auto text-center mt-4 font-inter-light text-lg">
            <p>With our user-friendly interface, you can change all</p>
            <p>your crypto and giftcards to cash in seconds.</p>
          </div>
          <Row gutter={24} className="my-20">
            <Col xs={8}>
              <div className="min-h-[520px] h-[520px] flex flex-col items-center w-full p-4 py-8 bg-[#000000] rounded-[10px]">
                <p className="text-white font-inter-medium text-xl text-center">
                  Bouncer Level Security
                </p>
                <div className="mt-4">
                  <Image src={bouncer} alt="" />
                </div>
                <div>
                  <p className="text-lg font-inter-regular text-[#9A9A9A]">
                    Trade crypto sell gift cards or withdraw funds in just a few
                    taps all protected with top level security.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={8}>
              <div className="min-h-[520px] h-[520px] flex flex-col items-center p-4 py-8 w-full bg-bayfi-grey-500 rounded-[10px]">
                <p className="font-inter-medium text-xl text-black text-center">
                  First Time Ease
                </p>
                <div className="mt-4">
                  <Image src={firstTimeEase} alt="" />
                </div>
                <p className="text-lg font-inter-regular text-black mt-12">
                  Setting up your account, eazi! Trading digital assets, eazi!
                  No need to ask for a masterclass or any format. Enjoy 24/7
                  soft transactions.
                </p>
              </div>
            </Col>
            <Col xs={8}>
              <div className="min-h-[520px] h-[520px] flex flex-col items-center p-4 py-8 w-full bg-[#9FE870] rounded-[10px]">
                <p className="font-inter-medium text-xl text-black text-center">
                  Seamless Integration
                </p>
                <div className="mt-4">
                  <Image src={seamlessIntegration} alt="" />
                </div>
                <p className="text-lg font-inter-regular text-black text-justify mt-12">
                  Keep your wallet safe by using triple protection.
                </p>
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
      <section className="bg-black">
        <GeneralLandingPageWrapper>
          <div className="my-12">

          </div>
        </GeneralLandingPageWrapper>
      </section>
    </>
  );
}
