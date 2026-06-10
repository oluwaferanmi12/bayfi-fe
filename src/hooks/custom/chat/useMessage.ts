import { useGetChatDetail, useGetOneChat } from "@/hooks/query";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { InitiateCardTxn, Message } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useChatMessage = (
  chatId: string,
  initTxn?: InitiateCardTxn,
  autoConnect?: boolean,
) => {
  const queryClient = useQueryClient();
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectToChat, setConnectToChat] = useState(autoConnect);
  const { client, isConnected, subscribe } = useStompClient({
    autoConnect: connectToChat,
  });
  const router = useRouter();
  const pathName = usePathname();
  const [showInput, setShowInput] = useState(false);
  const {
    data,
    isPending: messageLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetOneChat(chatId!);
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
    if (pathName.includes("giftcard/chat") && m.chatTransactionId) {
      router.push(`${pathName}?id=${m.chatTransactionId}`);
      localStorage.removeItem("initiateCardTxn");
    }
    setMessages((prev) => [...prev, m]);
  };

  const handleGiftcardStatus = () => {
    queryClient.invalidateQueries({ queryKey: ["one-chat-detail", chatId] });
    queryClient.invalidateQueries({ queryKey: ["user-transaction"] });
  };

  const handleLockTriggered = (res: any) => {
    queryClient.invalidateQueries({ queryKey: ["one-chat-detail"] });
  };

  // Flatten pages in reverse so oldest messages appear at the top,
  // newest (page 1) at the bottom — same pattern as bayfi-admin.
  useEffect(() => {
    if (data) {
      const flat = data.pages
        .slice()
        .reverse()
        .flatMap((p) => p.data);
      setMessages(flat);
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
    subscribe(`/user/giftcard/status`, handleGiftcardStatus);
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
    showInput,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
