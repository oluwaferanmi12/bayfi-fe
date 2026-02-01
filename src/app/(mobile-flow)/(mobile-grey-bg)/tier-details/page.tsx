"use client";
import { TierDetails } from "@/components/features/profile/tier-details";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function MobileTierDetails() {
  return (
    <>
      <PageTitle title="Tier Information" />
      <TierDetails />
    </>
  );
}

export default MobileTierDetails;
