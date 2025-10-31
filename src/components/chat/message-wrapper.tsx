import { Message, MessagePayload } from "@/types";
import { UserChatHeader } from "./user/user-chat-header";
import { UserResponseContainer } from "./user/user-response-container";
import { SupportChatContainer } from "./support/support-chat-container";
import { Fragment, useEffect, useRef } from "react";
import { ChatStatus } from "./status/chat-status";

export const MessageWrapper = ({
  messages,
  messageLoading,
  bgWhite,
  chatDetail,
}: {
  messages: Message[];
  messageLoading: boolean;
  bgWhite: boolean;
  chatDetail?: MessagePayload;
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const firstPaint = useRef(true);
  useEffect(() => {
    if (!bottomRef.current) return;
    bottomRef.current.scrollIntoView({
      behavior: firstPaint.current ? "auto" : "smooth",
      block: "end",
    });
    firstPaint.current = false;
  }, [messages.length]);
  return (
    <div>
      {messageLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {messages.map((item, index) => {
            return (
              <Fragment key={index}>
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
              </Fragment>
            );
          })}
          <ChatStatus
            status={
              chatDetail?.isExpired
                ? "Expired"
                : chatDetail?.isProcessed
                  ? "Completed"
                  : chatDetail?.isLocked
                    ? "Locked"
                    : null
            }
            chatDetails={chatDetail}
          />
          <div className="mt-20" ref={bottomRef} />
        </div>
      )}
    </div>
  );
};
