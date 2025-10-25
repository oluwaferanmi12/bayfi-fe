"use client";

import { MessageWrapper } from "@/components/chat/message-wrapper";
import { ChatInput } from "@/components/inputs/chat-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { useSearchParams } from "next/navigation";
import React from "react";

function MChatDetails() {
  const searchParams = useSearchParams();
  const chatId = searchParams.get("id") ?? "";
  const {
    messageLoading,
    messages,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
  } = useChatMessage(chatId);
  return (
    <div className="h-full">
      <PageTitle fixed title={`Giftcard Chat`} />
      <div>
        <MessageWrapper
          messages={messages}
          messageLoading={messageLoading}
          bgWhite
          chatDetail={chatDetail}
        />

        {!chatDetailLoading &&
          !chatDetail?.isExpired &&
          !chatDetail?.isLocked && (
            <ChatInput bgWhite handleMessage={handleSendMessage} />
          )}
      </div>
    </div>
  );
}

export default MChatDetails;
