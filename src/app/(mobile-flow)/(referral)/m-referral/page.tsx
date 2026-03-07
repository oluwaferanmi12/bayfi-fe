"use client";
import React, { useState } from "react";
import { FirstReferralPage } from "@/components/features/referral/first-referral-page";

function MReferral() {
  const [stepOne, setStepOne] = useState(false);
  return <>
    <FirstReferralPage />
  </>;
}

export default MReferral;
