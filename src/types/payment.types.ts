export interface SaveBeneficiary {
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  bankLogoUrl: string;
}

export interface Beneficiary {
  name: string;
}

export interface AccountLookUpInterface {
  bankCode: string;
  accountNumber: string;
}

export interface Bank {
  name: string;
  bankCode: string;
  category: string;
  bankLogoUrl: string;
}

export interface AccountLookUp {
  bankCode: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  accountStatus: string;
}

export interface Disburse {
  pin: string;
  amount: number;
  accountNumber: string;
  accountName: string;
  bankCode: string;
  key: string;
}
