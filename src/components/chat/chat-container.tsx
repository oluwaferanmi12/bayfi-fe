import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";

export const ChatContainer = () => {
  return (
    <>
      <UserChatHeader />
      <p className="font-grotesk-semi-bold text-base">
        Admin will respond in 5:00 mins
      </p>
      <div className="mt-4">
        <SupportChatContainer />
        <UserResponseContainer />
        <SupportChatContainer />
      </div>
    </>
  );
};
