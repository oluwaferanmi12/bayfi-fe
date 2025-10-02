"use client"

import { ChatContainer } from "@/components/chat/chat-container";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function GiftCardChat() {
  return (
    <>
      <PageTitle title="Giftcards/Sell" />
      <ChatContainer bgWhite />
    </>
  );
}

export default GiftCardChat;
