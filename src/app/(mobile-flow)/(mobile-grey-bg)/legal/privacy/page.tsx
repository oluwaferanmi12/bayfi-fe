import { PrivacyPolicy } from "@/components/features/profile/legal/privacy-policy";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function MobilePrivacyPolicy() {
  return (
    <>
      <PageTitle title="Privacy Policy" />
      <div className="bg-white rounded-lg">
        <PrivacyPolicy />
      </div>
    </>
  );
}

export default MobilePrivacyPolicy;
