export interface CreateCardInterface {
  cardName: string;
  minimumPurchaseAmount: number;
  maximumPurChaseAmount: number;
  avatarUrl: string;
  priority: number;
  countryIds: number[];
}

export interface EditCardInterface {
  countryIds: number[];
  cardName: string;
  minimumPurchaseAmount: number;
  maximumPurChaseAmount: number;
  avatarUrl: string;
  id: string;
}

export interface CountryResponseInterface {
  id: number;
  name: string;
  logo_url: string;
}

export interface CardInterface {
  id: string;
  cardName: string;
  minimumPurchaseAmount: number;
  maximumPurchaseAmount: number;
  avatarUrl: string;
  priority: string;
  countryResponses: CountryResponseInterface[];
  status: boolean;
}

export interface ManageCardInterface {
  id: string;
  status: boolean;
}

export interface InitiateCardTxn {
  chatId: number;
  message: string;
  imageUrl: string;
  countryName: string;
  giftCardName: string;
  amount: number;
  chatMessageInitiator: "USER" | "ADMIN";
}
