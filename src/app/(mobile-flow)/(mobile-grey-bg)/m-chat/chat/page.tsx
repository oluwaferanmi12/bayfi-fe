"use client";

import { MessageWrapper } from "@/components/chat/message-wrapper";
import { ChatInput } from "@/components/inputs/chat-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function MChatDetails() {
  const [chatId, setChatId] = useState("");

  const {
    messageLoading,
    messages,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
    showInput,
  } = useChatMessage(chatId);

  useEffect(() => {
    const getId = new URLSearchParams(window.location.search);
    setChatId(getId.get("id") ?? "");
  }, []);
  return (
    <div className="h-full">
      <PageTitle fixed title={`Giftcard Chat`} />
      <div >
        <MessageWrapper
          messages={messages}
          messageLoading={messageLoading}
          bgWhite
          chatDetail={chatDetail}
        />

        {showInput && <ChatInput bgWhite handleMessage={handleSendMessage} />}
      </div>
    </div>
  );
}

export default MChatDetails;
