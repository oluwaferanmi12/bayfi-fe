"use client";

import { ChatContainer } from "@/components/chat/chat-container";
import { MessageWrapper } from "@/components/chat/message-wrapper";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { ChatInput } from "@/components/inputs/chat-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { useGetOneChat } from "@/hooks/query";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

function MChatDetails() {
  const searchParams = useSearchParams();
  const chatId = searchParams.get("id") ?? "";
  const { messageLoading, messages } = useChatMessage(chatId);
  return (
    <>
      <PageTitle title="Apple Giftcard Chat" />
      <div>
        <MessageWrapper
          messages={messages}
          messageLoading={messageLoading}
          bgWhite
        />

        <ChatInput  />
      </div>
    </>
  );
}

export default MChatDetails;
