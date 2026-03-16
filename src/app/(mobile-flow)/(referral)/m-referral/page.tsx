"use client";
import React, { useState } from "react";
import { FirstReferralPage } from "@/components/features/referral/first-referral-page";
import { SecondReferalPage } from "@/components/features/referral/second-referral-page";

function MReferral() {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      {currentStep === 1 && <FirstReferralPage setStep={setCurrentStep} />}
      {currentStep === 2 && <SecondReferalPage setStep={setCurrentStep} />}
    </>
  );
}

export default MReferral;
