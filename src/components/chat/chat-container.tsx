import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";
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
  const {
    handleSendMessage,
    messages,
    messageLoading,
    chatDetail,
    chatDetailLoading,
  } = useChatMessage(initMessage?.chatTransactionId, initTxn, true);

  console.log(messages);

  useEffect(() => {
    if (!initMessage && messages && messages.length) {
      setInitMessage(messages[0]);
    }
  }, [messages]);

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
      className={`overflow-y-scroll ${chatType && "bg-white p-4 rounded-lg"}  hide-scrollbar h-[85vh] relative `}
    >
      {chatType === "support" && <SupportHeaderType />}
      {messageLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <MessageWrapper
            bgWhite
            messages={messages}
            messageLoading={messageLoading}
            chatDetail={chatDetail}
          />

          <div ref={bottomRef} />
        </div>
      )}
      <ChatInput handleMessage={handleSendMessage} bgWhite={bgWhite} />
    </div>
  );
};
