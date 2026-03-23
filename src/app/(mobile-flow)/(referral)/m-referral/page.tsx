"use client";
import { useState } from "react";
import { FirstReferralPage } from "@/components/features/referral/first-referral-page";
import { SecondReferalPage } from "@/components/features/referral/second-referral-page";
import { useGetRewardActivity } from "@/hooks/query";
import { Loader } from "@/components/loader/general-loader";

function MReferral() {
  const { data: rewardActivity, isLoading: rewardActivityLoading } =
    useGetRewardActivity();
  return (
    <>
      {rewardActivityLoading ? (
        <Loader />
      ) : !rewardActivity?.data.length ? (
        <FirstReferralPage />
      ) : (
        <SecondReferalPage rewardActivity={rewardActivity.data} />
      )}
    </>
  );
}

export default MReferral;

