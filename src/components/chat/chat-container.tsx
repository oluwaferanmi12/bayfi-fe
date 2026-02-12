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
  const {
    handleSendMessage,
    messages,
    messageLoading,
    chatDetail,
    chatDetailLoading,
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

  useEffect(() => {}, []);

  return (
    <div
      // Fills parent; becomes a column; only middle area scrolls
      className={`h-[85vh] flex flex-col ${chatType ? "bg-white p-4 rounded-lg" : ""}`}
    >
      {chatType === "support" && <SupportHeaderType />}

      {/* scrollable messages */}
      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar">
        {messageLoading ? (
          <Loader />
        ) : (
          <>
            <MessageWrapper
              bgWhite
              messages={messages}
              messageLoading={messageLoading}
              chatDetail={chatDetail}
            />
          </>
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
