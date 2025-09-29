import { axiosInstance } from "@/axios";
import { MessagePayload } from "@/types";

export const getChats = async (chatId: string) => {
  const { data } = await axiosInstance.get(
    `/api/v1/giftcards/fetch/chat/transaction/${chatId}?page=1&pageSize=100`
  );
  return data.data;
};

export const getOneChatMessages = async (
  chatId: string
): Promise<MessagePayload> => {
  const { data } = await axiosInstance.get(
    `/giftcards/fetch/chat/transaction/${chatId}?page=1&pageSize=100`
  );
  return data.data;
};
