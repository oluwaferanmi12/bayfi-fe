"use client";
import { SearchInput } from "@/components/inputs/search-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { Col, Row } from "antd";
import React, { useState } from "react";
import cautionIcon from "@/assets/svg/blue-caution-icon.svg";
import Image from "next/image";

function HotCardDeals() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <PageTitle title="Hot Deals" />
      <SearchInput value={searchValue} onChange={setSearchValue} bgWhite />
      <div className="mt-2 bg-white rounded-lg p-3 flex items-center gap-2">
        <Image src={cautionIcon} alt="Caution Icon" />
        <p className="text-[#0EA5E9] font-grotesk-medium">
          All prices are updated in real time and may change.
        </p>
      </div>
      <Row gutter={8} className="mt-2">
        <Col xs={12}>
          <div className="bg-white border border-[#EBF1FF] mb-2 rounded-lg p-4 flex flex-col justify-center items-start">
            <div className="bg-[#F5F5F5] rounded-full px-6 py-1">
              <p className="text-[#000000] font-grotesk-semi-bold">USA</p>
            </div>
            <p className="my-2 text-[#4B5563] text-xl font-grotesk-semi-bold">
              Google play
            </p>
            <p className="text-[#20242A] text-sm font-grotesk-medium">
              $25 at 800/$
            </p>
          </div>
        </Col>
        <Col xs={12}>
          <div className="bg-white border border-[#EBF1FF] mb-2 rounded-lg p-4 flex flex-col justify-center items-start">
            <div className="bg-[#F5F5F5] rounded-full px-6 py-1">
              <p className="text-[#000000] font-grotesk-semi-bold">USA</p>
            </div>
            <p className="my-2 text-[#4B5563] text-xl font-grotesk-semi-bold">
              Google play
            </p>
            <p className="text-[#20242A] text-sm font-grotesk-medium">
              $25 at 800/$
            </p>
          </div>
        </Col>
        <Col xs={12}>
          <div className="bg-white border border-[#EBF1FF] mb-2 rounded-lg p-4 flex flex-col justify-center items-start">
            <div className="bg-[#F5F5F5] rounded-full px-6 py-1">
              <p className="text-[#000000] font-grotesk-semi-bold">USA</p>
            </div>
            <p className="my-2 text-[#4B5563] text-xl font-grotesk-semi-bold">
              Google play
            </p>
            <p className="text-[#20242A] text-sm font-grotesk-medium">
              $25 at 800/$
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HotCardDeals;
