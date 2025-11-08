import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { SideDrawer } from "../side-drawer";
import { MessageWrapper } from "@/components/chat/message-wrapper";
import { ChatInput } from "@/components/inputs/chat-input";

export const DesktopChatSideDrawer = ({
  open,
  handleClose,
  chatId,
}: {
  open: boolean;
  handleClose: () => void;
  chatId: string;
}) => {
  const {
    messageLoading,
    messages,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
  } = useChatMessage(chatId);

  return (
    <>
      <SideDrawer
        onClose={() => {
          handleClose();
        }}
        open={open}
        title="Giftcard Chat"
      >
        <div className="relative">
          <div className="flex flex-col  h-[90vh]">
            <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar">
              <MessageWrapper
                messages={messages}
                messageLoading={messageLoading}
                bgWhite
                chatDetail={chatDetail}
              />
            </div>

            <div className="shrink-0">
              {!chatDetailLoading &&
                !chatDetail?.isExpired &&
                !chatDetail?.isLocked && (
                  <ChatInput bgWhite handleMessage={handleSendMessage} />
                )}
            </div>
          </div>
        </div>
      </SideDrawer>
    </>
  );
};
