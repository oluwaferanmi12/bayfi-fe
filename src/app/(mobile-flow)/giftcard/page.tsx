"use client";

import { FlashSalesCard } from "@/components/giftcard/flash-sales";
import { SearchInput } from "@/components/inputs/search-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { GiftCardWrapper } from "@/components/wrappers/gift-card-wrapper";
import React, { useState } from "react";
import giftCardPlaceHolder from "@/assets/svg/amazon-placeholder.svg";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";
import { CountryWrapper } from "@/components/wrappers/country-wrapper";
import usIcon from "@/assets/svg/us-icon.svg";

function GiftCard() {
  const [showCountryDrawer, setShowCountryDrawer] = useState(false);
  return (
    <>
      <BottomDrawer
        open={showCountryDrawer}
        onClose={() => {
          setShowCountryDrawer(false);
        }}
        title="Select country"
        height="full"
      >
        <CountryWrapper flag={usIcon} countryName="USA" />
        <CountryWrapper flag={usIcon} countryName="USA" />
        <CountryWrapper flag={usIcon} countryName="USA" />
      </BottomDrawer>
      <PageTitle title="Giftcards" />
      <SearchInput />
      <FlashSalesCard />
      <div className="mt-2">
        <GiftCardWrapper
          action={() => {
            setShowCountryDrawer(true);
          }}
          text="Amazon"
          image={giftCardPlaceHolder}
        />
        <GiftCardWrapper
          action={() => {
            setShowCountryDrawer(true);
          }}
          text="Amazon"
          image={giftCardPlaceHolder}
        />
        <GiftCardWrapper
          action={() => {
            setShowCountryDrawer(true);
          }}
          text="Amazon"
          image={giftCardPlaceHolder}
        />
        <GiftCardWrapper
          action={() => {
            setShowCountryDrawer(true);
          }}
          text="Amazon"
          image={giftCardPlaceHolder}
        />
      </div>
    </>
  );
}

export default GiftCard;
