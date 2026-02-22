import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { MobileContactWrapper } from "@/components/mobile-components/wrappers/mobile-contact-wrapper";
import React from "react";

function BuyCable() {
  return (
    <>
      <PageTitle title="Buy Cable" />
      <div className="mb-3">
        <p className="text-text-color-900 font-grotesk-bold text-sm">
          Popular platforms
        </p>
      </div>
      <div className="flex items-center gap-4 overflow-x-scroll hide-scrollbar">
        {/* <MobileContactWrapper initials="DV" name="DSTV" />
        <MobileContactWrapper initials="S" name="Showmax" /> */}
       
      </div>
      <div className="bg-white rounded-lg p-4 mt-4">
        <GInput placeholder="Airtel" label="Select Platform" />
        <GInput placeholder="Premium" label="Select Bouquet number" />
        <GInput label="Enter amount" placeholder="0.00" />

        <GInput label="Smart card number" placeholder="Enter number" />
        <Button loading={false} text="Continue" fullWidth type="bgGreen" />
      </div>
    </>
  );
}

export default BuyCable;
