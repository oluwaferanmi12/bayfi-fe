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
  amount: number;
  currency: string;
  createdAt: string;
  [key: string]: unknown;
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
