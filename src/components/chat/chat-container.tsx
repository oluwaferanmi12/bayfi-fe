import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";
import { ChatInput } from "@/components/inputs/chat-input";
import { useGetOneChat } from "@/hooks/query";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { InitiateCardTxn, Message } from "@/types";
import { getUserDetails } from "@/utils";
import { useEffect, useState } from "react";

export const ChatContainer = ({
  chatType,
  bgWhite,
  initTxn,
}: {
  chatType?: "support" | "giftcard";
  bgWhite?: boolean;
  initTxn?: InitiateCardTxn;
}) => {
  const {
    connect,
    client,
    disconnect,
    isConnected,
    subscribe,
    unsubscribeAll,
  } = useStompClient();
  const [initMessage, setInitMessage] = useState<any>();
  const [messages, setMesssages] = useState<Message[]>([]);
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
      imageUrl: imageUrl ?? "",
      chatId: initMessage.chatTransactionId,
    };
    client?.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify(payload),
    });
  };
  useEffect(() => {
    if (!isConnected || !client?.connected) return;
    subscribe(`/user/giftcard/messages`, handleMessage);
    client?.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify({ ...initTxn }),
    });
  }, [isConnected, client, subscribe]);

  useEffect(() => {
    if (chatResponses?.messages.length) {
      setMesssages(chatResponses.messages);
    }
  }, [chatResponses]);
  return (
    <div
      className={`overflow-y-scroll ${chatType && "bg-white p-4 rounded-lg"}  hide-scrollbar h-[85vh]  relative`}
    >
      {chatType === "support" && <SupportHeaderType />}

      {messsageLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {messages.map((item) => {
            return (
              <>
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
              </>
            );
          })}
          <ChatInput handleMessage={handleSendMessage} bgWhite={bgWhite} />
        </>
      )}
    </div>
  );
};
