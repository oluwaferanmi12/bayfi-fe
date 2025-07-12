import { SupportChatContainer } from "@/components/chat/support/support-chat-container";
import { SupportHeaderType } from "@/components/chat/support/support-header-type";
import { UserChatHeader } from "@/components/chat/user/user-chat-header";
import { UserResponseContainer } from "@/components/chat/user/user-response-container";
import { ChatInput } from "@/components/inputs/chat-input";

export const ChatContainer = ({
  chatType,
  bgWhite,
}: {
  chatType?: "support" | "giftcard";
  bgWhite?: boolean;
}) => {
  return (
    <div
      className={`overflow-y-scroll ${chatType && "bg-white p-4 rounded-lg"} hide-scrollbar h-[85vh] relative`}
    >
      {chatType === "support" && <SupportHeaderType />}
      <UserChatHeader bgWhite={bgWhite} />
      <p className="font-grotesk-semi-bold text-base">
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
