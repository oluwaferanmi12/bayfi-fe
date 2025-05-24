import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";
import { ChatInput } from "@/components/inputs/chat-input";

export const ChatContainer = () => {
  return (
    <div className="overflow-y-scroll hide-scrollbar h-[85vh] relative">
      <UserChatHeader />
      <p className="font-grotesk-semi-bold text-base">
        Admin will respond in 5:00 mins
      </p>
      <div className="mt-4">
        <SupportChatContainer />
        <UserResponseContainer />
        <SupportChatContainer />
        <ChatInput />
      </div>
    </div>
  );
};
