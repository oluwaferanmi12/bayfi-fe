import { Message } from "@/types";
import { UserChatHeader } from "./user/user-chat-header";
import { UserResponseContainer } from "./user/user-response-container";
import { SupportChatContainer } from "./support/support-chat-container";
import { useEffect, useRef } from "react";

export const MessageWrapper = ({
  messages,
  messageLoading,
  bgWhite,
}: {
  messages: Message[];
  messageLoading: boolean;
  bgWhite: boolean;
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
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
};
