import { getChats } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetChats = (chatId: string) => {
  return useQuery({
    queryFn: () => getChats(chatId),
    queryKey: ["getChats"],
  });
};
