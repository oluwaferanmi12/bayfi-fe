import { Col, Row } from "antd";
import Link from "next/link";
import bitcoins from "@/assets/svg/bitcoin-landing.svg";
import Image from "next/image";
import landingPhone from "@/assets/svg/landing-page-phone.svg";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import bouncer from "@/assets/svg/bouncer.svg";
import firstTimeEase from "@/assets/svg/first-time-ease.svg";
import seamlessIntegration from "@/assets/svg/seamless-integration.svg";
import arrowWithBg from "@/assets/svg/arrow-with-white-bg.svg";
import feature1 from "@/assets/svg/feature-1.svg";
import feature2 from "@/assets/svg/feature-2.svg";
import feature3 from "@/assets/svg/feature-3.svg";
import feature4 from "@/assets/svg/feature-4.svg";

export default function Home() {
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
          <Row className="my-20">
            <Col xs={12} className="border-r border-[rgba(255,255,255,0.2)]">
              <h3>
                <span className="rounded-full font-jakarta-semibold text-white border border-[#9FE870] py-2 px-4">
                  FEATURES
                </span>
              </h3>
              <div className="text-white text-5xl font-jakarta-semibold my-6 leading-16">
                <p>Our You-nique</p>
                <p>Features</p>
              </div>
              <div>
                <p className="text-[#9A9A9A] text-lg font-jakarta-regular w-4/5">
                  Automation & workflow features include a drag & drop builder,
                  automated task assignments, conditional with good triggers,
                  and api integrations.
                </p>
              </div>
              <div className="flex gap-4 border-b border-[rgba(255,255,255,0.2)] w-4/5 py-16">
                <div>
                  <div className="h-[30px] border border-[#9FE870]"></div>
                  <div className="h-[30px] border border-[#9A9A9A]"></div>
                  <div className="h-[30px] border border-[#9A9A9A]"></div>
                </div>
                <div>
                  <p className="text-[#9A9A9A] font-jakarta-regular  text-lg">
                    “Working with Silver feels like a partnership; as we
                    continued to use their tool and found more use cases. ”
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <button className="bg-[#9FE870] rounded-full py-2 px-4 flex items-center gap-4 font-jakarta-semibold">
                  <p>Try it now</p>
                  <Image src={arrowWithBg} alt="" />
                </button>
              </div>
            </Col>
            <Col xs={12}>
              <div className="w-4/5 ml-auto">
                {featureArray.map((item, index) => {
                  return (
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
                  );
                })}
              </div>
            </Col>
          </Row>
        </GeneralLandingPageWrapper>
      </section>
    </>
  );
}
