import { useGetChatDetail, useGetOneChat } from "@/hooks/query";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { InitiateCardTxn, Message } from "@/types";
import { useEffect, useState } from "react";

export const useChatMessage = (
  chatId: string,
  initTxn?: InitiateCardTxn,
  autoConnect?: boolean
) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectToChat, setConnectToChat] = useState(autoConnect);
  const { client, isConnected, subscribe } = useStompClient({
    autoConnect: connectToChat,
  });
  const { data, isPending: messageLoading } = useGetOneChat(chatId!);
  const { data: chatDetail, isPending: chatDetailLoading } =
    useGetChatDetail(chatId);
  const handleSendMessage = (message: string, imageUrls?: string[]) => {
    const payload = {
      message: message,
      chatMessageInitiator: "USER",
      imageUrls: imageUrls && imageUrls.length ? imageUrls : [],
      chatId: chatId,
    };
    client?.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify(payload),
    });
  };
  const handleMessage = (m: Message) => {
    setMessages((prev) => [...prev, m]);
  };
  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  useEffect(() => {
    if (chatDetail && !chatDetail?.isExpired) {
      setConnectToChat(true);
    }
  }, [chatDetail]);

  useEffect(() => {
    if (!isConnected || !client?.connected) return;
    subscribe(`/user/giftcard/messages`, handleMessage);
    if (initTxn) {
      client?.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify({ ...initTxn }),
      });
    }
  }, [isConnected, client, subscribe]);

  return {
    messages,
    messageLoading,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
  };
};
