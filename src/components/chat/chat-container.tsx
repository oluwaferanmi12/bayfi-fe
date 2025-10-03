"use client";


import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";
import { ChatInput } from "@/components/inputs/chat-input";
import { useGetOneChat } from "@/hooks/query";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { InitiateCardTxn, Message } from "@/types";
import { useEffect, useRef, useState } from "react";

export const ChatContainer = ({
  chatType,
  bgWhite,
  initTxn,
}: {
  chatType?: "support" | "giftcard";
  bgWhite?: boolean;
  initTxn?: InitiateCardTxn;
}) => {
  const { client, isConnected, subscribe } = useStompClient();
  const [initMessage, setInitMessage] = useState<any>();
  const [messages, setMesssages] = useState<Message[]>([]);
  //refs
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const firstPaint = useRef(true);
  const handleMessage = (m: Message) => {
    if (m.amount && m.countryName && m.giftCardName) {
      setInitMessage(m);
    }
    setMesssages((prev) => [...prev, m]);
  };

  const { data: chatResponses, isPending: messsageLoading } = useGetOneChat(
    initMessage?.chatTransactionId
  );

  const handleSendMessage = (message: string, imageUrl?: string) => {
    const payload = {
      message: message,
      chatMessageInitiator: "USER",
      imageUrls: imageUrl ? [imageUrl] : [],
      chatId: initMessage.chatTransactionId,
    };
    console.log(payload, "Payload value here");
    client?.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify(payload),
    });
  };
  useEffect(() => {
    if (!isConnected || !client?.connected) return;
    subscribe(`/user/giftcard/messages`, handleMessage);
    // only publish the initial txn if one was provided
    if (initTxn) {
      try {
        client?.publish({
          destination: "/app/chat.sendMessage",
          body: JSON.stringify({ ...initTxn }),
        });
      } catch (err) {
        console.warn("Failed to publish initial txn", err);
      }
    }
  }, [isConnected, client, subscribe, initTxn]);

  useEffect(() => {
    if (chatResponses?.length) {
      setMesssages(chatResponses);
    }
  }, [chatResponses]);

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
      className={`overflow-y-scroll ${chatType && "bg-white p-4 rounded-lg"}  hide-scrollbar h-[85vh]  `}
    >
      {chatType === "support" && <SupportHeaderType />}
      {messsageLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {messages.map((item, index) => {
            return (
              <div key={item.chatMessageId || `message-${index}`}>
                {item.amount && item.countryName && item.giftCardName ? (
                  <UserChatHeader message={item} bgWhite={bgWhite} />
                ) : (
                  <>
                    <div className="mt-4">
                      {item.messageInitiator === "USER" ? (
                        <UserResponseContainer
                          message={item}
                          bgWhite={bgWhite}
                        />
                      ) : (
                        <SupportChatContainer message={item} />
                      )}
                    </div>
                  </>
                )}
                <div ref={bottomRef} />
              </div>
            );
          })}
        </div>
      )}
      <ChatInput handleMessage={handleSendMessage} bgWhite={bgWhite} />
    </div>
  );
};
