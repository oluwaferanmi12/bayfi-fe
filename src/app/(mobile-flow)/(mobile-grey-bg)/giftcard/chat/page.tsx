"use client";

import { ChatContainer } from "@/components/chat/chat-container";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React, { useEffect, useState } from "react";
import { InitiateCardTxn } from "@/types";

function GiftCardChat() {
  const [initTxn, setInitTxn] = useState<InitiateCardTxn | undefined>(
    undefined,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("initiateCardTxn");
        if (raw) {
          const parsed = JSON.parse(raw) as InitiateCardTxn;
          setInitTxn(parsed);
        }
      } catch (err) {
        console.warn("Failed to read initiateCardTxn from storage", err);
      }
    }
  }, []);
  return (
    <>
      <PageTitle title="Giftcards/Sell" />
      <div>
        <ChatContainer bgWhite initTxn={initTxn} />
      </div>
    </>
  );
}

export default GiftCardChat;
