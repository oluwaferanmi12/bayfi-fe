import {
  getRedemptions,
  getReferralCode,
  getRewardActivity,
  getRewardJar,
} from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetReferralCode = () => {
  return useQuery({
    queryKey: ["get-referral-code"],
    queryFn: getReferralCode,
  });
};

export const useGetRewardJar = () => {
  return useQuery({
    queryKey: ["get-reward-jar"],
    queryFn: getRewardJar,
  });
};

export const useGetRedemptions = () => {
  return useQuery({
    queryKey: ["get-redemptions"],
    queryFn: getRedemptions,
  });
};

export const useGetRewardActivity = () => {
  return useQuery({
    queryKey: ["get-reward-activity"],
    queryFn: getRewardActivity,
  });
};
