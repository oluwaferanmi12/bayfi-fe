import { Terms } from "@/components/features/profile/legal/terms";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function MobileTerms() {
  return (
    <div>
      <PageTitle title="Terms and Conditions" />
      <div className="my-4"></div>
      <div className="bg-white p-4 rounded-lg">
        <Terms />
      </div>
    </div>
  );
}

export default MobileTerms;
