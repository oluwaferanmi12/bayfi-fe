import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";
import { ChatInput } from "@/components/inputs/chat-input";
import { useStompClient } from "@/hooks/stomp/useChatStomp";
import { InitiateCardTxn } from "@/types";
import { getUserDetails } from "@/utils";
import { useEffect } from "react";

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
  const handleMessage = (m: any) => {
    console.log(m, "Message result");
  };
  useEffect(() => {
    if (!isConnected || !client?.connected) return;
    console.log("Right insiee heree");
    console.log(getUserDetails().userDetailsResponse.id, "user details here");
    const userSub = subscribe(
      `/user/giftcard/messages`,
      handleMessage
    );
    console.log(initTxn, "init txn");
    client?.publish({
      destination: "/app/chat.sendMessage",
      body: JSON.stringify({...initTxn}),
    });
  }, [isConnected, client, subscribe]);
  return (
    <div
      className={`overflow-y-scroll ${chatType && "bg-white p-4 rounded-lg"} hide-scrollbar h-[85vh] relative`}
    >
      {chatType === "support" && <SupportHeaderType />}
      <UserChatHeader bgWhite={bgWhite} />
      <p className="font-grotesk-semi-bold text-sm lg:text-base">
        Admin will respond in 5:00 mins
      </p>
      <div className="mt-4">
        <SupportChatContainer />
        <UserResponseContainer bgWhite={bgWhite} />
        <SupportChatContainer />
        <ChatInput bgWhite />
      </div>
    </div>
  );
};
