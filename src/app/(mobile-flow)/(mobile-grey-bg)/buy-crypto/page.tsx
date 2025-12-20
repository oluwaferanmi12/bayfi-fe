import { SearchInput } from "@/components/inputs/search-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { CoinWrapper } from "@/components/wrappers/coin-wrapper";
import Link from "next/link";
import React from "react";

const BuyCrytpoMobile = () => {
  return (
    <>
      <PageTitle title="Buy Crypto" />
      <div className="py-2">
        <SearchInput />
      </div>
      <div>
        <Link href={"/select-preferred-network"}>
          <CoinWrapper withWhiteBg />
        </Link>
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
