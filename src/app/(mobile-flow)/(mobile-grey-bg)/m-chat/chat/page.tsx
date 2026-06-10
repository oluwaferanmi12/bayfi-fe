"use client";

import { MessageWrapper } from "@/components/chat/message-wrapper";
import { ChatInput } from "@/components/inputs/chat-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import React, { useEffect, useRef, useState } from "react";

function MChatDetails() {
  const [chatId, setChatId] = useState("");
  const prevScrollHeightRef = useRef(0);

  const {
    messageLoading,
    messages,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
    showInput,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useChatMessage(chatId);

  useEffect(() => {
    const getId = new URLSearchParams(window.location.search);
    setChatId(getId.get("id") ?? "");
  }, []);

  // Capture full document height before fetching older pages
  useEffect(() => {
    if (!isFetchingNextPage) return;
    prevScrollHeightRef.current = document.documentElement.scrollHeight;
  }, [isFetchingNextPage]);

  // Restore scroll position after older pages are prepended
  useEffect(() => {
    if (isFetchingNextPage) return;
    const diff =
      document.documentElement.scrollHeight - prevScrollHeightRef.current;
    if (diff > 0) window.scrollBy({ top: diff });
  }, [messages, isFetchingNextPage]);

  // Fetch next page when the window is scrolled near the top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="flex flex-col">
      <PageTitle fixed title={`Giftcard Chat`} />
      <MessageWrapper
        messages={messages}
        messageLoading={messageLoading}
        bgWhite
        chatDetail={chatDetail}
        isFetchingNextPage={isFetchingNextPage}
      />
      {showInput && <ChatInput bgWhite handleMessage={handleSendMessage} />}
    </div>
  );
}

export default MChatDetails;
