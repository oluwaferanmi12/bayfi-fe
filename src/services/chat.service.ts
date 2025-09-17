import { axiosInstance } from "@/axios";

export const getChats = async (chatId: string) => {
  const { data } = await axiosInstance.get(
    `/api/v1/giftcards/fetch/chat/transaction/${chatId}`
  );
  return data.data;
};
