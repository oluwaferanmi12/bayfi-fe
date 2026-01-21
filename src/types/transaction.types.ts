export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  receiverId: string;
  receiverName: string;
  receiver_account_number: string;
  receiverAccountBalanceBefore: number;
  receiverAccountBalanceAfter: number;
  transactionReference: string;
  transactionType: "CREDIT" | "DEBIT";
  transactionStatus: string;
  transactionCategory: keyof typeof TransactionCategory;
  units: number;
  isLogged: boolean;
  createdAt: string;
}

export enum TransactionCategory {
  BUY_GIFT_CARD = "Giftcard Purchase",
  SELL_GIFT_CARD = "Giftcard Sale",
  BUY_CRYPTO = "Crypto Purchase",
  SELL_CRYPTO = "Crypto Sales",
  AIRTIME = "Airtime",
  FUND_WALLET = "Wallet Funding",
  WALLET_WITHDRAWAL = "Wallet Withdrawal",
  DATA = "Mobile Data",
  CABLE_TV = "Cable Tv",
  REWARD_BONUS = "Reward Bonus",
}

export interface InnerTransactionSummary {
  btc: number;
  giftcard: number;
  others: number;
  total: number;
}
export interface TransactionSummary {
  inflow: InnerTransactionSummary;
  outflow: InnerTransactionSummary;
}

export interface TransactionMeta {
  page: number;
  pageSize: number;
  category: string;
  status: string;
  search: string;
}

export interface GiftCardTransactionLog {
  adminView: boolean;
  chatTransactionId: number;
  createdAt: string;
  id: number;
  lineTotalToUser: number;
  quantity: number;
  requestTotalToUser: number;
  transactionReference: string;
  unitAmountToUser: number;
}

export interface WalletTransactionLog {
  beneficiaryAccountName: string;
  beneficiaryAccountNumber: string;
  beneficiaryBankName: string;
  currency: string;
  reference: string;
  responseMessage: string;
  sessionId: string;
  transactionEndDate: string;
  transactionStartDate: string;
  transactionValueAmount: number;
}
