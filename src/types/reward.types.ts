import { PaginationReturn } from "@/interfaces/interfaces";

export interface ReferralCode {
  referralCode: string;
  userId: string;
}

export interface RewardJar {
  balance: number;
  totalEarned: number;
  totalRedeemed: number;
  currency: string;
  [key: string]: unknown;
}

export interface RewardRedemption {
  id: string;
  amount: number;
  currency: string;
  createdAt: string;
  [key: string]: unknown;
}

export interface RewardActivity {
  id: string;
  amount: number;
  currency: string;
  createdAt: string;
  [key: string]: unknown;
}

export interface RewardPagedResponse<T> {
  data: T[];
  metadata: PaginationReturn;
}
