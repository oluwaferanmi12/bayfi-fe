import { FixedMobileHeader } from "@/components/mobile-components/headers/fixed-mobile-header";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import React from "react";
import filterIcon from "@/assets/svg/filter.svg";
import Image from "next/image";
import { Col, Row } from "antd";
import moneyInIcon from "@/assets/svg/moneyInIcon.svg";
import moneyOutIcon from "@/assets/svg/moneyOutIcon.svg";
import withdrawIcon from "@/assets/svg/green-withdraw-icon.svg";
import bitcoinIcon from "@/assets/svg/bitcoing1Icon.svg";
import topUpIcon from "@/assets/svg/topUpIcon.svg";
import blueGiftCardIcon from "@/assets/svg/blue-giftcard-icon.svg";

function MobileTransaction() {
  return (
    <>
      <MobileNav />
      {/* <FixedMobileHeader header="Transaction" subText="See your transaction" /> */}
      <div className="flex items-center justify-between">
        <p className="text-bayfi-black-600 text-xl font-grotesk-semi-bold">
          Transaction
        </p>
        <div className="bg-white relative z-20 py-2 px-4 rounded-lg flex items-center gap-2">
          <Image src={filterIcon} alt="" />
          <p className="text-sm font-grotesk-semi-bold text-[#747474]">
            This month
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg mt-4">
        <Row gutter={12}>
          <Col xs={12}>
            <div className="bg-[#F6F6F6] px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2 justify-between">
                <p className="text-base text-[#747474] font-grotesk-semi-bold">
                  Money in
                </p>
                <Image src={moneyInIcon} alt="" />
              </div>
              <div className="mt-3">
                <p className="text-xl font-grotesk-semi-bold ">NGN500.00k</p>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="bg-[#F6F6F6] px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2 justify-between">
                <p className="text-base text-[#747474] font-grotesk-semi-bold">
                  Money out
                </p>
                <Image src={moneyOutIcon} alt="" />
              </div>
              <div className="mt-3">
                <p className="text-xl font-grotesk-semi-bold ">NGN500.00k</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <p className="font-grotesk-medium">List of transactions</p>
          <div className="mt-1">
            <TransactionWrapper
              icon={withdrawIcon}
              amount="2,240.00"
              date="11:45am"
              subText="Bank account"
              title="Withdrawal"
            />
            <TransactionWrapper
              icon={bitcoinIcon}
              amount="2,240.00"
              date="11:45am"
              subText="Bitcoin"
              title="Crypto Purchase"
            />
            <TransactionWrapper
              icon={topUpIcon}
              amount="2,240.00"
              date="11:45am"
              subText="Wallet"
              title="Top up"
            />
            <TransactionWrapper
              icon={blueGiftCardIcon}
              amount="2,240.00"
              date="11:45am"
              subText="Other services"
              title="Gift card trade"
            />
            <TransactionWrapper
              icon={topUpIcon}
              amount="2,240.00"
              date="11:45am"
              subText="Wallet"
              title="Top up"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileTransaction;

const TransactionWrapper = ({
  icon,
  title,
  subText,
  amount,
  date,
}: {
  icon: string;
  title: string;
  subText: string;
  amount: string;
  date: string;
}) => {
  return (
    <div className="bg-[#F6F6F6] mb-2 px-4 py-2 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src={icon} alt="" />
        <div>
          <p className="text-[#171717] font-grotesk-semi-bold text-lg">
            {title}
          </p>
          <p className="text-[#747474] text-sm font-grotesk-medium">
            {subText}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#171717] font-grotesk-bold text-lg">NGN {date}</p>
        <p className="text-[#747474] text-sm font-grotesk-medium">{date}</p>
      </div>
    </div>
  );
};
