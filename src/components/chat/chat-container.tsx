import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { ChatInput } from "@/components/inputs/chat-input";
import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { InitiateCardTxn, Message } from "@/types";
import { useEffect, useRef, useState } from "react";
import { MessageWrapper } from "./message-wrapper";

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
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const firstPaint = useRef(true);

  const { handleSendMessage, messages, messageLoading, chatDetail } =
    useChatMessage(initMessage?.chatTransactionId, initTxn, true);

  useEffect(() => {
    if (!initMessage && messages?.length) setInitMessage(messages[0]);
  }, [messages, initMessage]);

  useEffect(() => {
    if (!bottomRef.current) return;
    bottomRef.current.scrollIntoView({
      behavior: firstPaint.current ? "auto" : "smooth",
      block: "end",
    });
    firstPaint.current = false;
  }, [messages.length]);

  return (
    <div
      // Fills parent; becomes a column; only middle area scrolls
      className={`h-[85vh] flex flex-col ${chatType ? "bg-white p-4 rounded-lg" : ""}`}
    >
      {chatType === "support" && <SupportHeaderType />}

      {/* scrollable messages */}
      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar">
        {messageLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <MessageWrapper
              bgWhite
              messages={messages}
              messageLoading={messageLoading}
              chatDetail={chatDetail}
            />
            <div ref={bottomRef} />
          </>
        )}
      </div>

      {/* footer input (no fixed/absolute) */}
      <div className="shrink-0">
        <ChatInput handleMessage={handleSendMessage} bgWhite={bgWhite} />
      </div>
    </div>
  );
};
