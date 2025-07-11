"use client";

import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { MobileContactWrapper } from "@/components/mobile-components/wrappers/mobile-contact-wrapper";
import React from "react";

function Betting() {
  return (
    <>
      <PageTitle title="Betting top up" />

      <div className="bg-white rounded-lg p-4 mt-4">
        <GInput placeholder="Sporty bet" label="Select betting platform" />
        <GInput
          label="Sporty username"
          placeholder="Enter your sporty username"
        />

        <GInput label="Enter amount" placeholder="0.00" />
        <div className="mb-2 flex items-center gap-2 flex-wrap">
          <div className="border border-[#DCDCDC] rounded-lg px-4 py-2 bg-[#F6F6F6]">
            <p className="text-[#4B5563] font-grotesk-medium text-xs ">$2000</p>
          </div>
          <div className="border border-[#DCDCDC] rounded-lg px-4 py-2 bg-[#F6F6F6]">
            <p className="text-[#4B5563] font-grotesk-medium text-xs ">$2000</p>
          </div>
        </div>
        <Button loading={false} text="Continue" fullWidth type="bgGreen" />
      </div>
    </>
  );
}

export default Betting;
