export interface Wallet {
  walletId: string;
  walletBalance: number;
  tierLevel: number;
}

export interface SaveBeneficiary {
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  bankLogoUrl: string;
}
