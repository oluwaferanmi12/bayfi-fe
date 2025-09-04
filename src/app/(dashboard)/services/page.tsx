"use client";

import React, { useState } from "react";
import giftCardBg from "@/assets/svg/gift-card-bg.svg";
import giftCardInner from "@/assets/svg/inner-gift-card.svg";
import { Col, Row } from "antd";
import { DesktopServiceCard } from "@/components/wrappers/desktop-service-card";
import bettingInner from "@/assets/svg/inner-betting.svg";
import innerAirtime from "@/assets/svg/inner-airtime.svg";
import innerMobileData from "@/assets/svg/inner-mobile-data.svg";
import innerCableTv from "@/assets/svg/inner-cable-tv.svg";
import appStore from "@/assets/svg/app-store.svg";
import playStore from "@/assets/svg/playstore.svg";
import Image from "next/image";
import { UserProfile } from "@/components/UIs/user-name-profile";
import { SideDrawer } from "@/components/side-drawers/side-drawer";
import { Text } from "@/components/texts/text";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import { GiftCardDrawer } from "@/components/side-drawers/services/gift-card-drawer";

const Services = () => {
  const [showAirtimeModal, setShowAirtimeModal] = useState(false);
  const [showBetting, setShowBetting] = useState(false);
  const [showBuyData, setShowBuyData] = useState(false);
  const [showCableTv, setShowCableTv] = useState(false);
  const [showGiftCard, setShowGiftCard] = useState(false);
  
  const services = [
    {
      bgImage: giftCardBg,
      text: "Gift cards",
      subText: "Buy and sell your gift card on bayfi",
      sideIcon: giftCardInner,
      bgColor: "#0D930AE5",
      clickAction: () => {
        setShowGiftCard(true);
      },
    },
    {
      bgImage: giftCardBg,
      text: "Betting",
      subText: "Sporty, Bet9ja, 1xbet",
      sideIcon: bettingInner,
      bgColor: "#17191C",
      clickAction: () => {
        setShowBetting(true);
      },
    },
    {
      bgImage: giftCardBg,
      text: "Airtime",
      subText: "MTN, Glo, Others",
      sideIcon: innerAirtime,
      bgColor: "#360A93E5",
      clickAction: () => {
        setShowAirtimeModal(true);
      },
    },
    {
      bgImage: giftCardBg,
      text: "Mobile data",
      subText: "MTN, Glo, Others",
      sideIcon: innerMobileData,
      bgColor: "#0A3993E5",
      clickAction: () => {
        setShowBuyData(true);
      },
    },
    {
      bgImage: giftCardBg,
      text: "Cable Tv",
      subText: "DSTV, GOTv , Others",
      sideIcon: innerCableTv,
      bgColor: "#934C0AE5",
      clickAction: () => {
        setShowCableTv(true);
      },
    },
  ];
  return (
    <div>
      <GiftCardDrawer
        handleClose={() => {
          setShowGiftCard(false);
        }}
        showGiftCard={showGiftCard}
        key={showGiftCard ? 1 : 2}
      />

      <SideDrawer
        title="Buy data"
        open={showBuyData}
        onClose={() => {
          setShowBuyData(false);
        }}
      >
        <div>
          <div className="mt-2 mb-4">
            <Text type="header-text-20" value="Recent beneficiaries" />
          </div>
          <div className="flex items-center justify-between">
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
          </div>

          <div className="my-4">
            <GInput label="Select network type" placeholder="Airtel" />
            <GInput label="Phone number" placeholder="Enter phone number" />
            <GInput label="Enter amount" placeholder="0.00" />
            <Button
              loading={false}
              fullWidth
              text="Buy data"
              type="bgGreen"
              action={() => {
                // setShowWithdrawOtp(true);
              }}
            />
          </div>
        </div>
      </SideDrawer>

      <SideDrawer
        title="Buy airtime"
        open={showAirtimeModal}
        onClose={() => {
          setShowAirtimeModal(false);
        }}
      >
        <div>
          <div className="mt-2 mb-4">
            <Text type="header-text-20" value="Recent beneficiaries" />
          </div>
          <div className="flex items-center justify-between">
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
          </div>

          <div className="my-4">
            <GInput label="Select network type" placeholder="Airtel" />
            <GInput label="Phone number" placeholder="Enter phone number" />
            <GInput label="Enter amount" placeholder="0.00" />
            <Button
              loading={false}
              fullWidth
              text="Buy Airtime"
              type="bgGreen"
              action={() => {
                // setShowWithdrawOtp(true);
              }}
            />
          </div>
        </div>
      </SideDrawer>

      <SideDrawer
        title="Betting"
        open={showBetting}
        onClose={() => {
          setShowBetting(false);
        }}
      >
        <div className="my-3">
          <div className="my-4">
            <GInput label="Select provider" placeholder="Sporty" />
            <GInput label="Username" placeholder="Enter your sporty name" />
            <GInput label="Enter amount" placeholder="0.00" />
            <div className="my-4 flex gap-2">
              <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                $ 2000
              </span>
              <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                $ 2000
              </span>
              <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                $ 2000
              </span>
            </div>
            <Button
              loading={false}
              fullWidth
              text="Continue"
              type="bgGreen"
              action={() => {
                // setShowWithdrawOtp(true);
              }}
            />
          </div>
        </div>
      </SideDrawer>

      <SideDrawer
        title="Cable Tv"
        open={showCableTv}
        onClose={() => {
          setShowCableTv(false);
        }}
      >
        <div className="my-3">
          <div className="my-4">
            <GInput label="Select provider" placeholder="Sporty" />
            <GInput label="Username" placeholder="Enter your sporty name" />
            <GInput label="Enter amount" placeholder="0.00" />
            <div className="my-4 flex gap-2">
              <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                $ 2000
              </span>
              <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                $ 2000
              </span>
              <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                $ 2000
              </span>
            </div>
            <Button
              loading={false}
              fullWidth
              text="Continue"
              type="bgGreen"
              action={() => {
                // setShowWithdrawOtp(true);
              }}
            />
          </div>
        </div>
      </SideDrawer>

      <Row gutter={12} className="min-h-[80vh]">
        <Col xs={18}>
          <Row gutter={12}>
            {services.map((item, index) => {
              return (
                <Col key={index} xs={8}>
                  {" "}
                  <DesktopServiceCard key={index} item={item} />{" "}
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs={6}>
          <div className=" min-h-full rounded-xl downloadApp flex items-center p-4 px-8 font-grotesk-medium flex-col justify-center text-4xl">
            <p className="text-bayfi-black-50">Download bayfi on app store</p>
            <div className="mt-8 flex items-center gap-4">
              <button className="bg-[#BEDD3A] py-2 w-full px-4 rounded-lg">
                <Image src={playStore} alt="" />
              </button>
              <button className="bg-[#BEDD3A] w-full py-2 px-4 rounded-lg">
                <Image src={appStore} alt="" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
