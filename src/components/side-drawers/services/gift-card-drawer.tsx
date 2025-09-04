import { SideDrawerBreadCrumb } from "@/components/breadcrumb/side-drawer-bread-crumb";
import { SideDrawer } from "../side-drawer";
import { GiftCardWrapper } from "@/components/wrappers/gift-card-wrapper";
import { useEffect, useState } from "react";
import { SearchInput } from "@/components/inputs/search-input";
import { useGetCards } from "@/hooks/query";
import giftCardPlaceHolder from "@/assets/svg/amazon-placeholder.svg";
import { ChatContainer } from "@/components/chat/chat-container";
import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import Image from "next/image";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";
import { CountryWrapper } from "@/components/wrappers/country-wrapper";
import usIcon from "@/assets/svg/us-icon.svg";
import { FullCardDetails } from "@/components/wrappers/full-card-details";
import { GInput } from "@/components/inputs/GInput";
import { SideDrawerBreadCrumbProps } from "@/interfaces/interfaces-ui";
import { CardInterface } from "@/types";

export const GiftCardDrawer = ({
  handleClose,
  showGiftCard,
}: {
  handleClose: () => void;
  showGiftCard: boolean;
}) => {
  const [showGiftCardList, setShowGiftCardList] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showGiftCardAmount, setShowGiftCardAmount] = useState(false);
  const { data: cards, isPending } = useGetCards({ page: 1, pageSize: 100 });
  const [showGiftcardChat, setGiftCardChat] = useState(false);
  const [sellGiftCard, setSellGiftCard] = useState(0);
  const [breadCrumData, setBreadCrumbData] = useState<
    SideDrawerBreadCrumbProps[]
  >([]);
  const [selectedCard, setSelectedCard] = useState<CardInterface>();

  useEffect(() => {
    if (sellGiftCard === 1) {
      setBreadCrumbData((prev) => [
        {
          text: "home",
          action: () => {
            setShowGiftCardList(false);
          },
          active: false,
        },
        {
          text: "Sell Giftcard",
          action: () => {
            setShowGiftCardList(true);
          },
          active: true,
        },
      ]);
    }
  }, [sellGiftCard]);

  return (
    <SideDrawer
      onClose={() => {
        handleClose();
      }}
      open={showGiftCard}
      title="Sell Giftcard"
    >
      <div>
        {showGiftCardList ? (
          <>
            <SideDrawerBreadCrumb breadCrumbArray={breadCrumData} />
            <div className="my-2">
              <SearchInput />
            </div>

            {isPending ? (
              <p>loading...</p>
            ) : cards ? (
              cards.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() => {
                    setShowGiftCardList(false);
                    setShowCountry(true);
                    setSelectedCard(item);
                  }}
                >
                  <GiftCardWrapper
                    text={item.cardName}
                    image={item.avatarUrl}
                  />
                </div>
              ))
            ) : (
              "No data available"
            )}
          </>
        ) : showCountry ? (
          <>
            <div className="my-2">
              <SearchInput />
            </div>

            {selectedCard?.countryResponses.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowGiftCardAmount(true);
                    setShowCountry(false);
                  }}
                >
                  <CountryWrapper
                    flag={item.logo_url}
                    countryName={item.name}
                  />
                </div>
              );
            })}
          </>
        ) : showGiftCardAmount ? (
          <div>
            <SideDrawerBreadCrumb breadCrumbArray={breadCrumData} />
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
                { text: "home", active: false, action: () => {} },
                { text: "Select coin", active: false, action: () => {} },
                { text: "Network", active: true, action: () => {} },
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
            <div
              onClick={() => {
                setShowGiftCardList(true);
                setSellGiftCard(1);
              }}
              className="bg-bayfi-black-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
            >
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
  );
};
