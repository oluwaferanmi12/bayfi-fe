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
