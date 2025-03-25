"use client";
import { GPageWrapper } from "@/components/wrappers/GPageWrapper";
import { Col, Row } from "antd";
import bgImage from "@/assets/svg/walletCardImage.svg";
import Image from "next/image";
import eyeIcon from "@/assets/svg/eye-icon-black.svg";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
import bidirectionIcon from "@/assets/svg/arrow-bidirection.svg";
import arrowSlantDown from "@/assets/svg/bulkSendIcon.svg";
import arrowSlantUp from "@/assets/svg/bulkSendUp.svg";
import bulkCard from "@/assets/svg/bulkCard.svg";
import bulkCall from "@/assets/svg/bulkCall.svg";
import bulkGlobal from "@/assets/svg/bulkGlobal.svg";
import wifiSquare from "@/assets/svg/wifi-square.svg";
import cableIcon from "@/assets/svg/bulkMonitor.svg";
import dollarSquare from "@/assets/svg/dollarSquare.svg";
import chartPlaceholder from "@/assets/svg/chartPlaceholder.svg";
import sendSquare from "@/assets/svg/sendSquareIcon.svg";
import recieveSquare from "@/assets/svg/recieveSquare.svg";
import calendarIcon from "@/assets/svg/calendarIcon.svg";
import { useState } from "react";
import { SideDrawer } from "@/components/side-drawers/side-drawer";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import nairaGreyIcon from "@/assets/svg/naira-grey.svg";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";

const Dashboard = () => {
  const [depositModal, setDepositModal] = useState(false);
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  return (
    <>
      <SideDrawer
        onClose={() => {
          setShowCryptoModal(false);
        }}
        open={showCryptoModal}
        title="Trade Crypto"
      >
        <div className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
          <div>
            <Text value="Buy Crypto" type="text-plain-dark-18" />
            <div className="w-[80%]">
              <Text
                value="Swift and reliable trading of any cryptocurrencies"
                type="text-small-light"
              />
            </div>
          </div>
          <Image src={bitCoinGroup} alt="" />
        </div>
        <div className="bg-bayfi-black-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
          <div>
            <Text value="Sell crypto" type="text-plain-green-18" />
            <div className="w-[80%]">
              <Text
                value="Deposit naira via bank transfer or with your card"
                type="text-small-white"
              />
            </div>
          </div>
          <Image src={sellCryptoIcon} alt="" />
        </div>
      </SideDrawer>
      <SideDrawer
        onClose={() => {
          setDepositModal(false);
        }}
        open={depositModal}
        title="Deposit"
      >
        <div className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
          <div>
            <Text value="Crypto" type="text-plain-dark-18" />
            <div className="w-[80%]">
              <Text
                value="Swift and reliable trading of any cryptocurrencies"
                type="text-small-light"
              />
            </div>
          </div>
          <Image src={bitCoinGroup} alt="" />
        </div>
        <div className="bg-bayfi-grey-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
          <div>
            <Text value="Naira" type="text-plain-dark-18" />
            <div className="w-[80%]">
              <Text
                value="Deposit naira via bank transfer or with your card"
                type="text-small-light"
              />
            </div>
          </div>
          <Image src={nairaGreyIcon} alt="" />
        </div>
      </SideDrawer>
      <GPageWrapper>
        <Row gutter={12}>
          <Col xs={16}>
            <div className="bg-white relative py-12 text-center items-center  rounded-xl p-4 ">
              <span className="absolute left-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <span className="absolute right-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <div>
                <div className="flex justify-center">
                  <div className="bg-bayfi-green-100 rounded-full px-4 py-1 flex items-center gap-2">
                    <span>
                      <Image src={eyeIcon} alt="" />
                    </span>
                    <Text type="text-plain-dark-16" value="Wallet balance" />
                  </div>
                </div>

                <div className="py-6">
                  <Text type="number-big" value="NGN 200,000.00" />
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    loading={false}
                    text="Trade crypto"
                    icon={bidirectionIcon}
                    type="bgGreen"
                    lessRounded
                    action={() => {
                      setShowCryptoModal(true);
                    }}
                  />
                  <Button
                    loading={false}
                    text="Deposit"
                    icon={arrowSlantDown}
                    type="bgGreen"
                    lessRounded
                    action={() => {
                      setDepositModal(true);
                    }}
                  />
                  <Button
                    loading={false}
                    text="Withdraw"
                    icon={arrowSlantUp}
                    type="bgGreen"
                    lessRounded
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Text type="header-text-20" value="Other services" />
              <div className="mt-4 flex gap-6">
                <DashboardServiceWrapper icon={bulkCard} text="Gift card" />
                <DashboardServiceWrapper icon={bulkCall} text="Buy airtime" />
                <DashboardServiceWrapper icon={bulkGlobal} text="Betting" />
                <DashboardServiceWrapper icon={wifiSquare} text="Mobile data" />
                <DashboardServiceWrapper icon={cableIcon} text="Cable TV" />
              </div>
            </div>
            <div className="mt-8 bg-white rounded-2xl">
              <div className="p-4 flex items-center gap-3 border-b border-bayfi-grey-500">
                <Image src={dollarSquare} alt="" />
                <div>
                  <Text type="main-text-bold" value="Trade Analytics" />
                  <Text
                    type="body-medium"
                    value="Keep track of new and previous trades"
                  />
                </div>
              </div>
              <div className="p-4 py-8">
                <Image className="w-full" src={chartPlaceholder} alt="" />
              </div>
            </div>
          </Col>
          <Col xs={8}>
            <div className="bg-white min-h-[80vh] rounded-lg p-4">
              <Text type="main-text-regular" value="Transaction history" />
              <div className="mt-3 border border-[#EAECF0] rounded-lg bg-[#FDFEFF] p-4">
                <TransactionWrapper />
                <TransactionWrapper />
                <TransactionWrapper />
              </div>
            </div>
          </Col>
        </Row>
      </GPageWrapper>
    </>
  );
};

export default Dashboard;

const DashboardServiceWrapper = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <>
      <div className="flex justify-center bg-white rounded-2xl flex-col gap-1 items-center py-6 w-full">
        <Image src={icon} alt="" />
        <Text type={"text-plain-dark-18"} value={text} />
      </div>
    </>
  );
};

const TransactionWrapper = () => {
  return (
    <div className="border-bayfi-grey-500 flex py-2 justify-between">
      <div className="flex items-center gap-2">
        <Image src={sendSquare} alt="" />
        <div>
          <Text type="text-plain-dark-18" value="NGN 200,000.00" />
          <Text type="text-plain-16" value="Funds Withdrawal" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={calendarIcon} alt="" />
        <Text type={"text-plain-16"} value="Feb-20-2025" />
      </div>
    </div>
  );
};
