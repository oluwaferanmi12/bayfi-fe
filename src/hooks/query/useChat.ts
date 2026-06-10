import {
  getChatDetail,
  getChats,
  getOneChatMessages,
  userChats,
} from "@/services";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetChats = (chatId: string) => {
  return useQuery({
    queryFn: () => getChats(chatId),
    queryKey: ["getChats"],
  });
};

export const useGetOneChat = (chatId: string) => {
  return useInfiniteQuery({
    queryKey: ["get-one-chat", chatId],
    queryFn: ({ pageParam = 1 }) =>
      getOneChatMessages(chatId, pageParam as number),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNext ? allPages.length + 1 : undefined,
    initialPageParam: 1,
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
