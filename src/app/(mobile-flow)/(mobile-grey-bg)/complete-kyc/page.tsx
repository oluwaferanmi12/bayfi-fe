import { KycForm } from "@/components/features/profile/kyc-form";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function CompleteKyc() {
  return (
    <>
      <PageTitle title="Complete Kyc" />
      <KycForm />
    </>
  );
}

export default CompleteKyc;
