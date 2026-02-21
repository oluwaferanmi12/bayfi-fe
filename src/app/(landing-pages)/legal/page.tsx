"use client";

import Footer from "@/components/UIs/landing/footer";
import { Legal } from "@/components/features/profile/legal/legal";
import GeneralLandingPageWrapper from "@/components/wrappers/lading-wrapper/general-landing-wrapper";
import React from "react";

const LegalPage = () => {
  return (
    <>
      <section className="pt-30 pb-16 bg-[#FAFAF9] min-h-screen">
        <GeneralLandingPageWrapper>
          <div className="bg-white border border-[#E5E8E3] rounded-2xl p-4 lg:p-8">
            <p className="text-[#879D29] text-sm lg:text-base font-inter-semibold mb-2">
              LEGAL
            </p>
            <h1 className="text-[#242628] text-2xl lg:text-4xl font-jakarta-semibold mb-2">
              Terms of Use &amp; Privacy Policy
            </h1>
            <p className="text-[#586068] text-sm lg:text-base mb-8">
              Review BAYFI&apos;s legal terms and privacy commitments.
            </p>

            <Legal />
          </div>
        </GeneralLandingPageWrapper>
      </section>
      <Footer />
    </>
  );
};

export default LegalPage;
