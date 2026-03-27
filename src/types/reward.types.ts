import { PaginationReturn } from "@/interfaces/interfaces";

export interface ReferralCode {
  referralCode: string;
  userId: string;
}

export interface RewardJar {
  currentBalance: number;
  targetAmount: number;
  carryOverBaseLine: number;
  eligibleForRedemption: boolean;
  redeemableAmount: number | null;
  progressPercent: number;
}

export interface RewardRedemption {
  id: string;
  category: string;
  amountNgn: number;
  description: string;
  metadata: null;
  createdAt: string;
}

export interface RewardActivity {
  amountNgn: number;
  category: string;
  createdAt: string;
  description: string;
  id: string;
  metadata: string;
}

export interface RewardPagedResponse<T> {
  data: T[];
  metadata: PaginationReturn;
}
