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


function BuyCardDetails() {
  const [selectedCard, setSelectedCard] = useState<CardInterface | null>(null);
  const [countrySelected, setCountrySelected] = useState<CountryResponseInterface | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const card = localStorage.getItem("selectedCard");
      const country = localStorage.getItem("selectedCountry");
      setSelectedCard(card ? JSON.parse(card) : null);
      setCountrySelected(country ? JSON.parse(country) : null);
    }
  }, []);

  return (
    <>
      <PageTitle title="Giftcard/Sell" />
      <div className="my-3">
        <FullCardDetails
          bgWhite
          flag={countrySelected?.logo_url || ""}
          cardName={selectedCard?.cardName || ""}
          country={countrySelected?.name || ""}
          cardIcon={selectedCard?.avatarUrl || ""}
        />
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="mt-4 flex items-center gap-2">
          <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] text-sm py-2 px-4 rounded-lg text-center font-grotesk-medium">
            $ 2000
          </span>
          <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] text-sm py-2 px-4 rounded-lg text-center font-grotesk-medium">
            $ 2000
          </span>
          <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 text-sm px-4 rounded-lg text-center font-grotesk-medium">
            $ 2000
          </span>
        </div>
        <div className="mt-4">
          <GInput placeholder="0.00" label="Enter amount" />
        </div>
        <Button
          action={() => {
            router.push("/giftcard/chat");
          }}
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
