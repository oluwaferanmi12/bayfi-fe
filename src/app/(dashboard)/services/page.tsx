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
import BettingDrawer from "@/components/side-drawers/services/betting-drawer";
import AirtimeDrawer from "@/components/side-drawers/services/airtime-drawer";
import MobileDataDrawer from "@/components/side-drawers/services/mobile-data-drawer";
import CableTvDrawer from "@/components/side-drawers/services/cable-tv-drawer";

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

      <MobileDataDrawer
        handleClose={() => {
          setShowBuyData(false);
        }}
        showBuyData={showBuyData}
        key={showBuyData ? 3 : 4}
      />

      <AirtimeDrawer
        handleClose={() => {
          setShowAirtimeModal(false);
        }}
        showAirtimeModal={showAirtimeModal}
        key={showAirtimeModal ? 5 : 6}
      />

      <BettingDrawer
        handleClose={() => {
          setShowBetting(false);
        }}
        showBetting={showBetting}
        key={showBetting ? 7 : 8}
      />

      <CableTvDrawer
        handleClose={() => {
          setShowCableTv(false);
        }}
        showCableTv={showCableTv}
        key={showCableTv ? 9 : 10}
      />



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
