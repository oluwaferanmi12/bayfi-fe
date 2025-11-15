import { useGetChatDetail, useGetOneChat } from "@/hooks/query";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { InitiateCardTxn, Message } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useChatMessage = (
  chatId: string,
  initTxn?: InitiateCardTxn,
  autoConnect?: boolean
) => {
  const queryClient = useQueryClient();
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectToChat, setConnectToChat] = useState(autoConnect);
  const { client, isConnected, subscribe } = useStompClient({
    autoConnect: connectToChat,
  });
  const [showInput, setShowInput] = useState(false);
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

  const handleLockTriggered = (res: any) => {
    queryClient.invalidateQueries({ queryKey: ["one-chat-detail"] });
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
    subscribe(`/topic/admin/locks`, handleLockTriggered);
    if (initTxn) {
      client?.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify({ ...initTxn }),
      });
    }
  }, [isConnected, client, subscribe]);

  useEffect(() => {
    if (
      !chatDetailLoading &&
      !chatDetail?.isExpired &&
      !chatDetail?.isLocked &&
      !chatDetail?.isProcessed
    ) {
      setShowInput(true);
    }
  }, [chatDetail, chatDetailLoading]);

  return {
    messages,
    messageLoading,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
    showInput
  };
};
