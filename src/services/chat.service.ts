import { axiosInstance } from "@/axios";
import { ChatTransaction, Message, MessagePayload } from "@/types";

export const getChats = async (chatId: string) => {
  const { data } = await axiosInstance.get(
    `/api/v1/giftcards/fetch/chat/transaction/${chatId}?page=1&pageSize=100`
  );
  return data.data;
};

export const getOneChatMessages = async (
  chatId: string
): Promise<Message[]> => {
  const { data } = await axiosInstance.get(
    `/giftcards/chats/${chatId}/messages`
  );
  return data.data.contents;
};

export const userChats = async (): Promise<ChatTransaction[]> => {
  const { data } = await axiosInstance.get(
    "/giftcards/chats?page=1&pageSize=1000"
  );
  return data.data.contents;
};

export const getChatDetail = async (
  chatId: string
): Promise<MessagePayload> => {
  const { data } = await axiosInstance.get(`/giftcards/chats/${chatId}`);
  return data.data;
};
