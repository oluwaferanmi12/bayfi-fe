import { useChatMessage } from "@/hooks/custom/chat/useMessage";
import { SideDrawer } from "../side-drawer";
import { MessageWrapper } from "@/components/chat/message-wrapper";
import { ChatInput } from "@/components/inputs/chat-input";
import { useEffect, useRef } from "react";

export const DesktopChatSideDrawer = ({
  open,
  handleClose,
  chatId,
}: {
  open: boolean;
  handleClose: () => void;
  chatId: string;
}) => {
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const prevScrollHeightRef = useRef(0);

  const {
    messageLoading,
    messages,
    handleSendMessage,
    chatDetail,
    chatDetailLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useChatMessage(chatId);

  // Capture scroll height before fetching older pages
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el || !isFetchingNextPage) return;
    prevScrollHeightRef.current = el.scrollHeight;
  }, [isFetchingNextPage]);

  // Restore scroll position after older pages are prepended
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el || isFetchingNextPage) return;
    const diff = el.scrollHeight - prevScrollHeightRef.current;
    if (diff > 0) el.scrollTop += diff;
  }, [messages, isFetchingNextPage]);

  // Fetch next page when user scrolls near the top
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollTop < 100 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
          <div className="flex flex-col h-[90vh]">
            <div
              ref={chatScrollRef}
              className="flex-1 min-h-0 overflow-y-auto hide-scrollbar"
            >
              <MessageWrapper
                messages={messages}
                messageLoading={messageLoading}
                bgWhite
                chatDetail={chatDetail}
                isFetchingNextPage={isFetchingNextPage}
              />
            </div>

            <div className="">
              {!chatDetailLoading &&
                !chatDetail?.isExpired &&
                !chatDetail?.isLocked &&
                !chatDetail?.isProcessed && (
                  <ChatInput handleMessage={handleSendMessage} />
                )}
            </div>
          </div>
        </div>
      </SideDrawer>
    </>
  );
};
