"use client";

import { PageTitle } from "@/components/mobile-components/headers/page-title";

import { GiftcardRates } from "@/components/features/giftcard/giftcard-rate";

function HotCardDeals() {
  
  return (
    <div>
      <PageTitle title="Hot Deals" />
      <GiftcardRates />
    </div>
  );
}

export default HotCardDeals;
