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

    try {
      await navigator.clipboard.writeText(referralCode);
      toast.success("Referral code copied");
    } catch (error) {
      toast.error("Failed to copy referral code");
    }
  };

  const handleCopyLink = async () => {
    if (!referralCode) {
      toast.error("Referral code is not available yet");
      return;
    }

    const registerUrl = new URL("/register", window.location.origin);
    registerUrl.searchParams.set("ref", referralCode);

    try {
      await navigator.clipboard.writeText(registerUrl.toString());
      toast.success("Referral link copied");
    } catch (error) {
      toast.error("Failed to copy referral link");
    }
  };

  return { referralCode, handleCopyCode, handleCopyLink };
};
