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

  const {
    handleSendMessage,
    messages,
    messageLoading,
    chatDetail,
    chatDetailLoading,
  } = useChatMessage(initMessage?.chatTransactionId, initTxn, true);

  useEffect(() => {
    if (!initMessage && messages?.length) setInitMessage(messages[0]);
  }, [messages, initMessage]);

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
