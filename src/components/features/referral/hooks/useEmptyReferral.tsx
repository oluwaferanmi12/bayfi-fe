import React, { useEffect } from "react";
import { toast } from "sonner";
import { useGetReferralCode } from "@/hooks/query";

export const useEmptyReferral = () => {
  const { data } = useGetReferralCode();
  const referralCode = data?.referralCode;

  const handleCopyCode = async () => {
    if (!referralCode) {
      toast.error("Referral code is not available yet");
      return;
    }

    const referralMessage = `Hey, join Bayfi and use my referral code **${referralCode}** to get started. You can earn rewards after signing up and completing your first transactions. Let us win together 🚀`;

    try {
      await navigator.clipboard.writeText(referralMessage);
      toast.success("Referral message copied");
    } catch (error) {
      toast.error("Failed to copy referral message");
    }
  };
  useEffect(() => {}, []);
  return { referralCode, handleCopyCode };
};
