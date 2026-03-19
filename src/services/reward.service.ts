import { axiosInstance } from "@/axios";
import {
  ReferralCode,
  RewardActivity,
  RewardJar,
  RewardPagedResponse,
  RewardRedemption,
} from "@/types";

export const getReferralCode = async (): Promise<ReferralCode> => {
  const { data } = await axiosInstance.get(`/rewards/referral-code`);
  return data.data;
};

export const getRewardJar = async (): Promise<RewardJar> => {
  const { data } = await axiosInstance.get(`/rewards/reward-jar`);
  return data.data;
};

export const getRedemptions = async (): Promise<
  RewardPagedResponse<RewardRedemption>
> => {
  const { data } = await axiosInstance.get(
    `/rewards/redemptions?page=${1}&size=${30}`,
  );
  return { data: data.data, metadata: data.metadata };
};

export const getRewardActivity = async (): Promise<
  RewardPagedResponse<RewardActivity>
> => {
  const { data } = await axiosInstance.get(
    `/rewards/activity?page=${1}&size=${30}`,
  );
  return { data: data.data, metadata: data.metadata };
};

export const getRewardPrograms = async () => {
  const { data } = await axiosInstance.get(`/reward-management/programs`);
  return data.data;
};
