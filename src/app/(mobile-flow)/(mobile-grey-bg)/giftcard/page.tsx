"use client";

import { FlashSalesCard } from "@/components/features/giftcard/flash-sales";
import { SearchInput } from "@/components/inputs/search-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { GiftCardWrapper } from "@/components/wrappers/gift-card-wrapper";
import { useEffect, useState } from "react";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";
import { CountryWrapper } from "@/components/wrappers/country-wrapper";
import { useRouter } from "next/navigation";
import { useGetCardCountries, useGetCards } from "@/hooks/query";
import { Spin } from "antd";
import { CardInterface, CountryResponseInterface } from "@/types";
import placeholderImage from "@/assets/svg/placeholder.svg";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { Loader } from "@/components/loader/general-loader";

function GiftCard() {
  const [showCountryDrawer, setShowCountryDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { data: cards, isPending } = useGetCards({ page: 1, pageSize: 100 });
  const [selectedCard, setSelectedCard] = useState<CardInterface>();
  const [countrySelected, setCountrySelected] =
    useState<CountryResponseInterface>();
  const countryResponses = useGetCardCountries(selectedCard?.id ?? "");

  useEffect(() => {
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
    localStorage.setItem("selectedCountry", JSON.stringify(countrySelected));
  }, [selectedCard, countrySelected]);

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
        <div className="mb-2">
          <SearchInput bgGrey />
        </div>
        {countryResponses.isLoading ? (
          <Loader />
        ) : countryResponses.data?.length ? (
          countryResponses.data?.map((item) => {
            return (
              <CountryWrapper
                key={item.id}
                action={() => {
                  router.push("/giftcard/buy-details");
                  setCountrySelected(item);
                }}
                flag={item.logo_url ?? placeholderImage}
                countryName={item.name}
              />
            );
          })
        ) : (
          <GenericEmptyState />
        )}
      </BottomDrawer>
      <PageTitle title="Giftcards" />
      <SearchInput value={searchValue} onChange={setSearchValue} bgWhite />
      <FlashSalesCard />
      <div className="mt-2">
        {isPending ? (
          <Loader />
        ) : cards ? (
          cards
            .filter((item) =>
              item.cardName.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <GiftCardWrapper
                key={item.id}
                whiteBg
                action={() => {
                  setShowCountryDrawer(true);
                  setSelectedCard(item);
                }}
                text={item.cardName}
                image={item?.avatarUrl}
              />
            ))
        ) : (
          "No data available"
        )}
      </div>
    </>
  );
}

export default GiftCard;
