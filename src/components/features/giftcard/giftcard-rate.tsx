"use client";

import { SearchInput } from "@/components/inputs/search-input";
import { Col, Row } from "antd";
import React, { useMemo, useState } from "react";
import cautionIcon from "@/assets/svg/blue-caution-icon.svg";
import Image from "next/image";
import { useGetUserRates } from "@/hooks/query";
import { Loader } from "@/components/loader/general-loader";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { FormatNumber } from "@/utils/formatter";

export const GiftcardRates = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetUserRates();
  const filteredRates = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) {
      return data ?? [];
    }
    return (data ?? []).filter((rate) => {
      const cardName = rate.cardName?.toLowerCase() ?? "";
      const countryName = rate.countryName?.toLowerCase() ?? "";
      return cardName.includes(query) || countryName.includes(query);
    });
  }, [data, searchValue]);
  return (
    <>
      <SearchInput value={searchValue} onChange={setSearchValue} bgWhite />
      <div className="mt-2 bg-white rounded-lg p-3 flex items-center gap-2">
        <Image src={cautionIcon} alt="Caution Icon" />
        <p className="text-[#0EA5E9] font-grotesk-medium">
          All prices are updated in real time and may change.
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : filteredRates.length ? (
        <Row gutter={8} className="mt-2">
          {filteredRates.map((rate) => {
            return (
              <Col key={rate.id} xs={12}>
                <div className="bg-white border border-[#EBF1FF] mb-2 rounded-lg p-4 flex flex-col justify-center items-start">
                  <div className="bg-[#F5F5F5] flex items-center gap-2 rounded-full px-4 py-1">
                    <div className="w-2.5 relative h-2.5">
                      <Image
                        src={rate.countryAvatar}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-[#000000] font-grotesk-semi-bold">
                      {rate.countryName}
                    </p>
                  </div>
                  <p className="my-2 text-[#4B5563] text-xl font-grotesk-semi-bold">
                    {rate.cardName}
                  </p>
                  <p className="text-[#20242A] text-sm font-grotesk-medium">
                    ${FormatNumber(rate.rate, true)} at {FormatNumber(rate.rate, true)}/$
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : (
        <GenericEmptyState />
      )}
    </>
  );
};
