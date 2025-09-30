import { axiosInstance } from "@/axios";
import { Message, MessagePayload } from "@/types";

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
  console.log(data.data, "DAta value here");
  return data.data.content;
};
