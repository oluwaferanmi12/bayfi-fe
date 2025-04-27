import { SearchInput } from "@/components/inputs/search-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { CoinWrapper } from "@/components/wrappers/coin-wrapper";
import React from "react";

const BuyCrytpoMobile = () => {
  return (
    <>
      <PageTitle title="Buy Crypto" />
      <div className="py-2">
        <SearchInput />
      </div>
      <div>
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
        <CoinWrapper withWhiteBg />
      </div>
    </>
  );
};

export default BuyCrytpoMobile;
