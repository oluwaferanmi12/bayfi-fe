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
import { DarkBalanceWrapper } from "@/components/wrappers/dark-balance-wrapper";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";
import { SideDrawerBreadCrumb } from "@/components/breadcrumb/side-drawer-bread-crumb";
import { SearchInput } from "@/components/inputs/search-input";
import { GiftCardWrapper } from "@/components/wrappers/gift-card-wrapper";
import giftCardPlaceHolder from "@/assets/svg/amazon-placeholder.svg";
import { CountryWrapper } from "@/components/wrappers/country-wrapper";
import usIcon from "@/assets/svg/us-icon.svg";
import { FullCardDetails } from "@/components/wrappers/full-card-details";
import { ChatContainer } from "@/components/chat/chat-container";
import { useGetCards } from "@/hooks/query";

const Services = () => {
  const [showAirtimeModal, setShowAirtimeModal] = useState(false);
  const [showBetting, setShowBetting] = useState(false);
  const [showBuyData, setShowBuyData] = useState(false);
  const [showCableTv, setShowCableTv] = useState(false);
  const [showGiftCard, setShowGiftCard] = useState(false);
  const [showGiftCardList, setShowGiftCardList] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showGiftCardAmount, setShowGiftCardAmount] = useState(false);
  const [showGiftcardChat, setGiftCardChat] = useState(false);
  const cards = useGetCards({ page: 1, pageSize: 100 });


  console.log(cards.data)

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
      <SideDrawer
        onClose={() => {
          setShowGiftCard(false);
        }}
        open={showGiftCard}
        title="Sell Giftcard"
      >
        <div>
          {showGiftCardList ? (
            <>
              <SideDrawerBreadCrumb
                breadCrumbArray={[
                  { text: "home", active: false, action: () => { } },
                  { text: "Select coin", active: false, action: () => { } },
                  { text: "Network", active: true, action: () => { } },
                ]}
              />
              <div className="my-2">
                <SearchInput />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowGiftCardList(false);
                  setShowCountry(true);
                }}
              >
                {Array.isArray(cards.data) && cards.data.length > 0 ? (
                  cards.data.map((item) => (
                    <GiftCardWrapper
                      key={item.id}
                      text={item.cardName}
                      image={item.avatarUrl}
                    />
                  ))
                ) : (
                  <span>No data available</span>
                )}
                
                
              </div>
            </>
          ) : showCountry ? (
            <>
              <div className="my-2">
                <SearchInput />
              </div>
              <div
                onClick={() => {
                  setShowGiftCardAmount(true);
                  setShowCountry(false);
                }}
              >
                <CountryWrapper flag={usIcon} countryName={"USA"} />
              </div>
            </>
          ) : showGiftCardAmount ? (
            <div>
              <SideDrawerBreadCrumb
                breadCrumbArray={[
                  { text: "home", active: false, action: () => { } },
                  { text: "Select coin", active: false, action: () => { } },
                  { text: "Network", active: true, action: () => { } },
                ]}
              />
              <div className="my-3">
                <FullCardDetails
                  flag={usIcon}
                  cardName="Amazon"
                  country="USA"
                  cardIcon={giftCardPlaceHolder}
                />
              </div>
              <div className="mt-4 flex items-center gap-2">
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
              <div className="mt-4">
                <GInput placeholder="0.00" label="Enter amount" />
              </div>
              <Button
                action={() => {
                  setGiftCardChat(true);
                  setShowGiftCardAmount(false);
                }}
                loading={false}
                text="Get rate"
                type="bgGreen"
                fullWidth
              />
            </div>
          ) : showGiftcardChat ? (
            <div className="relative ">
              <SideDrawerBreadCrumb
                breadCrumbArray={[
                  { text: "home", active: false, action: () => { } },
                  { text: "Select coin", active: false, action: () => { } },
                  { text: "Network", active: true, action: () => { } },
                ]}
              />
              <ChatContainer />
            </div>
          ) : (
            <>
              <div
                onClick={() => {
                  setShowGiftCardList(true);
                }}
                className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
              >
                <div>
                  <Text value="Buy Giftcard" type="text-plain-dark-18" />
                  <div className="w-[80%]">
                    <Text
                      value="Swift and reliable trading of any Giftcard"
                      type="text-small-light"
                    />
                  </div>
                </div>
                <Image src={bitCoinGroup} alt="" />
              </div>
              <div className="bg-bayfi-black-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
                <div>
                  <Text value="Sell Giftcard" type="text-plain-green-18" />
                  <div className="w-[80%]">
                    <Text
                      value="Deposit naira via bank transfer or with your card"
                      type="text-small-white"
                    />
                  </div>
                </div>
                <Image src={sellCryptoIcon} alt="" />
              </div>
            </>
          )}
        </div>
      </SideDrawer>
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
