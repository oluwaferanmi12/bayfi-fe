import { getChats, getOneChatMessages } from "@/services";
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
