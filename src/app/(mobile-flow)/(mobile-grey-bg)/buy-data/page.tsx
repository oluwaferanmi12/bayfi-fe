import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { MobileContactWrapper } from "@/components/mobile-components/wrappers/mobile-contact-wrapper";
import React from "react";

function BuyData() {
  return (
    <>
      <PageTitle title="Buy Data" />
      <div className="mb-3">
        <p className="text-text-color-900 font-grotesk-bold text-sm">
          Withdraw to beneficiaries
        </p>
      </div>
      <div className="flex items-center gap-4 overflow-x-scroll hide-scrollbar">
        {/* <MobileContactWrapper />
        <MobileContactWrapper />
        <MobileContactWrapper />
        <MobileContactWrapper />
        <MobileContactWrapper />
        <MobileContactWrapper />
        <MobileContactWrapper />
        <MobileContactWrapper /> */}
      </div>
      <div className="bg-white rounded-lg p-4 mt-4">
        <GInput placeholder="Airtel" label="Select Network Type" />
        <GInput label="Enter amount" placeholder="0.00" />

        <GInput label="Phone number" placeholder="Enter phone number" />
        <Button loading={false} text="Continue" fullWidth type="bgGreen" />
      </div>
    </>
  );
}

export default BuyData;
