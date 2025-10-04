import { useGetChatDetail, useGetOneChat } from "@/hooks/query";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { Message } from "@/types";
import { useEffect, useState } from "react";

export const useChatMessage = (chatId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectToChat, setConnectToChat] = useState(false);
  const { client, isConnected, subscribe } = useStompClient({
    autoConnect: connectToChat,
  });
  const { data, isPending: messageLoading } = useGetOneChat(chatId!);
  const { data: chatDetail } = useGetChatDetail(chatId);
  const handleSendMessage = (message: string, imageUrl?: string) => {
    const payload = {
      message: message,
      chatMessageInitiator: "USER",
      imageUrls: imageUrl ? [imageUrl] : [],
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
    if (!chatDetail?.isExpired) {
      setConnectToChat(true);
    }
  }, [chatDetail]);

  useEffect(() => {
    if (!isConnected || !client?.connected) return;
    subscribe(`/user/giftcard/messages`, handleMessage);
  }, [isConnected, client, subscribe]);
  return { messages, messageLoading, handleSendMessage };
};
