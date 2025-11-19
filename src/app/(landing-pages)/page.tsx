import { Col, Row } from "antd";
import Link from "next/link";
import bitcoins from "@/assets/svg/bitcoin-landing.svg";
import Image from "next/image";
import landingPhone from "@/assets/svg/landing-page-phone.svg";

export default function Home() {
  return (
    <>
      <section className="min-h-screen mb-[480px] h-screen bg-[#1C1B1F] hero-bg flex justify-center items-center flex-col">
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
      <div className="text-black">Next content to be tested</div>
    </>
  );
}
