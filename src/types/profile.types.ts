export type TierLevel = "TIER1" | "TIER2" | "TIER3";

export interface ProfileDataInterface {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  role: string;
  userType: string;
  isPinCreated: boolean;
  verified: boolean;
  isBalanceVisible: boolean;
  isBvnVerified: boolean;
  tierLevel: TierLevel;
}

export interface PostProfileInterface {
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
}

export interface UpdatePin {
  oldPin: string;
  newPin: string;
}

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export interface KYC {
  firstName: string;
  lastName: string;
  bvn: string;
}

export interface TierDetails {
  id: string;
  level: string;
  name: string;
  active: boolean;
  requiresBvnVerified: boolean;
  dailyDebitLimit: number;
  dailyCreditLimit: number;
  requirement: string;
  isCurrentPlan: boolean;
  isEligible: boolean;
  createdAt: string;
  lastUpdatedAt: string;
}
