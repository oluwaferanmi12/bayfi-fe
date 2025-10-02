export type MessageType = "USER" | "ADMIN";
export interface Message {
  chatMessageId: number;
  createdAt: string;
  message: string;
  imageUrls: string[];
  senderId: string;
  countryName: string;
  giftCardName: string;
  amount: number;
  messageInitiator: MessageType;
  messageInitiatorDescription: string;
}

export interface MessagePayload {
  chatTransactionId: number;
  createdAt: string;
  chatDuration: number;
  chatExpiryDate: number;
  isExpired: boolean;
  temporaryLockTime: number;
  senderId: string;
  isLocked: boolean;
  unreadForAdmin: number;
  messages: Message[];
}

export interface ChatTransaction {
  id: number;
  createdAt: string;
  chatDuration: number;
  chatExpiryDate: string;
  isExpired: boolean;
  isLocked: boolean;
  temporaryLockTime: number;
  isProcessed: boolean;
  message: number;
  imageUrl: string;
  countryName: string;
  giftCardName: string;
  amount: number;
  messageInitiator: MessageType;
  messageInitiatorDescription: string;
}
