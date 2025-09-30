import { SideDrawerBreadCrumb } from "@/components/breadcrumb/side-drawer-bread-crumb";
import { SideDrawer } from "../side-drawer";
import { GiftCardWrapper } from "@/components/wrappers/gift-card-wrapper";
import { useEffect, useState } from "react";
import { SearchInput } from "@/components/inputs/search-input";
import { useGetCards, useInitiateCardTxn } from "@/hooks/query";
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
import {
  CardInterface,
  CountryResponseInterface,
  InitiateCardTxn,
} from "@/types";
import { text } from "stream/consumers";

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
  const [initiateCardTxn, setInitiateCardTxn] = useState<InitiateCardTxn>();
  // const initiateTxn = useInitiateCardTxn((data) => {
  //   setShowGiftCardAmount(false)
  //   setGiftCardChat(true);
  //   setGiftCardChat(true);
  // });
  const [giftCardAmount, setGiftCardAmount] = useState(0);
  const [countrySelected, setCountrySelected] =
    useState<CountryResponseInterface>();
  const [breadCrumData, setBreadCrumbData] = useState<
    SideDrawerBreadCrumbProps[]
  >([
    {
      text: "home",
      action: () => {
        setShowGiftCardList(false);
        setShowGiftCardAmount(false);
        setShowCountry(false);
        handlRemoveFromBreadCrumb("home");
        setGiftCardChat(false);
      },
      active: false,
    },
  ]);
  const [selectedCard, setSelectedCard] = useState<CardInterface>();

  const handeUpdateBreadCrumb = (data: SideDrawerBreadCrumbProps) => {
    setBreadCrumbData((prev) => {
      const newData = prev.map((data_) => ({ ...data_, active: false }));
      newData.push(data);
      return newData;
    });
  };

  const handlRemoveFromBreadCrumb = (id: string) => {
    setBreadCrumbData((prev) => {
      const activeIndex = prev.findIndex((item) => item.text === id);
      if (activeIndex === -1) return prev;

      const trimmed = prev.slice(0, activeIndex + 1);
      const updated = trimmed.map((item, idx, arr) => ({
        ...item,
        active: idx === arr.length - 1,
      }));
      return updated;
    });
  };
  useEffect(() => {
    if (initiateCardTxn) {
      setShowGiftCardAmount(false);
      setGiftCardChat(true);
      setGiftCardChat(true);
    }
  }, [initiateCardTxn]);

  return (
    <SideDrawer
      onClose={() => {
        handleClose();
      }}
      open={showGiftCard}
      title="Sell Giftcard"
    >
      <div>
        <SideDrawerBreadCrumb breadCrumbArray={breadCrumData} />
        {showGiftCardList ? (
          <>
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
                    setBreadCrumbData((prev) => {
                      const newData = prev.map((item) => ({
                        ...item,
                        active: false,
                      }));
                      return [
                        ...newData,
                        {
                          text: "Countries",
                          action: () => {
                            setShowCountry(true);
                            handlRemoveFromBreadCrumb("Countries");
                          },
                          active: true,
                        },
                      ];
                    });
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
                    setCountrySelected(item);
                    handeUpdateBreadCrumb({
                      text: "Details",
                      action: () => {
                        handlRemoveFromBreadCrumb("Details");
                      },
                      active: true,
                    });
                  }}
                  className="cursor-pointer"
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
            <div className="my-3">
              <FullCardDetails
                flag={countrySelected?.logo_url ?? ""}
                cardName={selectedCard?.cardName ?? ""}
                country={countrySelected?.name ?? ""}
                cardIcon={selectedCard?.avatarUrl ?? ""}
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
              <GInput
                inputVal={String(giftCardAmount)}
                placeholder="0.00"
                label="Enter amount"
                setInput={(e) => {
                  setGiftCardAmount(+e);
                }}
              />
            </div>
            <Button
              action={() => {
                // setShowGiftCardAmount(false);
                setInitiateCardTxn({
                  amount: giftCardAmount,
                  chatId: null,
                  chatMessageInitiator: "USER",
                  countryName: countrySelected?.name ?? "",
                  giftCardName: selectedCard?.cardName ?? "",
                  imageUrls: [],
                  message: "I want to trade",
                });
              }}
              loading={false}
              text="Get rate"
              type="bgGreen"
              fullWidth
            />
          </div>
        ) : showGiftcardChat && initiateCardTxn ? (
          <div className="relative ">
            <ChatContainer bgWhite={false} initTxn={initiateCardTxn} />
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
                setBreadCrumbData((prev) => [
                  ...prev,
                  {
                    text: "Sell Giftcard",
                    action: () => {
                      setShowGiftCardList(true);
                      handlRemoveFromBreadCrumb("Sell Giftcard");
                    },
                    active: true,
                  },
                ]);
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
