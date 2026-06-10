"use client";
import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { ChatInput } from "@/components/inputs/chat-input";
import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { InitiateCardTxn, Message } from "@/types";
import { useEffect, useRef, useState } from "react";
import { MessageWrapper } from "./message-wrapper";
import { Loader } from "../loader/general-loader";
import { usePathname, useSearchParams } from "next/navigation";


export const ChatContainer = ({
  chatType,
  bgWhite,
  initTxn,
}: {
  chatType?: "support" | "giftcard";
  bgWhite?: boolean;
  initTxn?: InitiateCardTxn;
}) => {
  const [initMessage, setInitMessage] = useState<any>();
  const [extractedChatId, setExtractedId] = useState<string | undefined>();
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const prevScrollHeightRef = useRef(0);

  const {
    handleSendMessage,
    messages,
    messageLoading,
    chatDetail,
    chatDetailLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useChatMessage(
    extractedChatId ?? initMessage?.chatTransactionId,
    initTxn,
    true,
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setExtractedId(searchParams.get("id") ?? undefined);
  }, []);

  useEffect(() => {
    if (!initMessage && messages?.length) setInitMessage(messages[0]);
  }, [messages, initMessage]);

  // Capture scroll height before fetching older pages
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el || !isFetchingNextPage) return;
    prevScrollHeightRef.current = el.scrollHeight;
  }, [isFetchingNextPage]);

  // Restore scroll position after older pages are prepended
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el || isFetchingNextPage) return;
    const diff = el.scrollHeight - prevScrollHeightRef.current;
    if (diff > 0) el.scrollTop += diff;
  }, [messages, isFetchingNextPage]);

  // Fetch next page when user scrolls near the top
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollTop < 100 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div
      className={`h-[85vh] flex flex-col ${chatType ? "bg-white p-4 rounded-lg" : ""}`}
    >
      {chatType === "support" && <SupportHeaderType />}

      {/* scrollable messages */}
      <div
        ref={chatScrollRef}
        className="flex-1 min-h-0 overflow-y-auto hide-scrollbar"
      >
        {messageLoading ? (
          <Loader />
        ) : (
          <MessageWrapper
            bgWhite
            messages={messages}
            messageLoading={messageLoading}
            chatDetail={chatDetail}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </div>

      {/* footer input (no fixed/absolute) */}
      <div className="shrink-0">
        {!chatDetailLoading &&
          !chatDetail?.isExpired &&
          !chatDetail?.isLocked &&
          !chatDetail?.isProcessed && (
            <ChatInput handleMessage={handleSendMessage} bgWhite={bgWhite} />
          )}
      </div>
    </div>
  );
};
