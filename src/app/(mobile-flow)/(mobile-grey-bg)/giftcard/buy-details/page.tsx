"use client";

import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { FullCardDetails } from "@/components/wrappers/full-card-details";
import React from "react";
import usIcon from "@/assets/svg/us-icon.svg";
import giftCardPlaceHolder from "@/assets/svg/amazon-placeholder.svg";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CardInterface, CountryResponseInterface } from "@/types";
import { InitiateCardTxn } from "@/types";
import placeholderImage from "@/assets/svg/placeholder.svg";
import { numberFormatter, stripCommas } from "@/utils/formatter";

function BuyCardDetails() {
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>(null);
  const [countrySelected, setCountrySelected] =
    useState<CountryResponseInterface | null>(null);
  const [giftCardAmount, setGiftCardAmount] = useState(0);
  const [amountError, setAmountError] = useState("");
  const [initiateCardTxn, setInitiateCardTxn] = useState<InitiateCardTxn>();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const handleAmountChange = (val: string) => {
    setGiftCardAmount(+stripCommas(val));
    setAmountError("");
  };

  const handlePresetSelect = (val: number) => {
    setGiftCardAmount(val);
    setAmountError("");
  };

  const handleGetRate = () => {
    if (!giftCardAmount || giftCardAmount <= 0) {
      setAmountError("Please enter a valid amount");
      return;
    }

    const txn = {
      amount: giftCardAmount,
      chatId: null,
      chatMessageInitiator: "USER",
      countryName: countrySelected?.name ?? "",
      giftCardName: selectedCard?.cardName ?? "",
      imageUrls: [],
      message: "I want to trade",
    } as InitiateCardTxn;

    // persist txn so the chat page can read it after navigation
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("initiateCardTxn", JSON.stringify(txn));
      } catch (err) {
        // ignore storage errors
        console.warn("Failed to persist initiateCardTxn", err);
      }
    }

    setInitiateCardTxn(txn);
    router.push("/giftcard/chat");
  };

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      try {
        const card = localStorage.getItem("selectedCard");
        const country = localStorage.getItem("selectedCountry");
        setSelectedCard(card ? JSON.parse(card) : null);
        setCountrySelected(country ? JSON.parse(country) : null);
      } catch (error) {
        console.warn("Failed to access localStorage:", error);
      }
    }
  }, []);

  const presetValues = [25, 50, 100, 200, 500];

  if (!isClient) {
    return (
      <>
        <PageTitle title="Giftcard/Sell" />
        <div className="my-3">
          <div className="bg-white flex rounded-lg justify-between items-center p-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
              <div>
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="w-12.5 h-7.5 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            {presetValues.map((item, index) => {
              return (
                <span
                  onClick={() => {
                    handlePresetSelect(item);
                  }}
                  key={index}
                  className="bg-[#F6F6F6] whitespace-nowrap w-full text-text-color-500 border border-[#DCDCDC] text-sm py-2 px-4 rounded-lg text-center font-grotesk-medium"
                >
                  $ {item}
                </span>
              );
            })}
          </div>
          <div className="mt-4">
            <GInput
              inputVal={numberFormatter(giftCardAmount.toString())}
              placeholder="0.00"
              label="Enter amount"
              setInput={handleAmountChange}
              error={amountError}
              inputMode="numeric"
            />
          </div>
          <Button
            action={handleGetRate}
            loading={false}
            text="Get rate"
            type="bgGreen"
            fullWidth
          />
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle title="Giftcard/Sell" />
      <div className="my-3">
        <FullCardDetails
          bgWhite
          flag={countrySelected?.logo_url || placeholderImage}
          cardName={selectedCard?.cardName || ""}
          country={countrySelected?.name || ""}
          cardIcon={selectedCard?.avatarUrl || ""}
        />
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="mt-4 flex items-center gap-2 md:flex-nowrap flex-wrap">
          {presetValues.map((item, index) => {
            return (
              <span
                onClick={() => {
                  handlePresetSelect(item);
                }}
                key={index}
                className="bg-[#F6F6F6] md:w-full text-text-color-500 border border-[#DCDCDC] text-sm py-2 px-4 rounded-lg text-center whitespace-nowrap font-grotesk-medium"
              >
                $ {item}
              </span>
            );
          })}
        </div>
        <div className="mt-4">
          <GInput
            inputVal={numberFormatter(giftCardAmount.toString())}
            placeholder="0.00"
            label="Enter amount"
            setInput={handleAmountChange}
            error={amountError}
          />
        </div>
        <Button
          action={handleGetRate}
          loading={false}
          text="Get rate"
          type="bgGreen"
          fullWidth
        />
      </div>
    </>
  );
}

export default BuyCardDetails;
