import {
  getChatDetail,
  getChats,
  getOneChatMessages,
  userChats,
} from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetChats = (chatId: string) => {
  return useQuery({
    queryFn: () => getChats(chatId),
    queryKey: ["getChats"],
  });
};

export const useGetOneChat = (chatId: string) => {
  return useQuery({
    queryFn: () => getOneChatMessages(chatId),
    queryKey: ["get-one-chat", chatId],
    enabled: !!chatId,
  });
};

export const useGetActivChat = () => {
  return useQuery({
    queryFn: () => userChats(),
    queryKey: ["user-chats"],
  });
};

export const useGetChatDetail = (chatId: string) => {
  return useQuery({
    queryFn: () => getChatDetail(chatId),
    queryKey: ["one-chat-detail", chatId],
    enabled: !!chatId,
  });
};
