import giftCardIcon from "@/assets/svg/gift-card-chat-icon.svg";
import { Message } from "@/types";
import { messageDateFormatter } from "@/utils/formatter";
import Image from "next/image";
import amazonCard from "@/assets/svg/amazon-placeholder.svg";
import { ImagePreviewWrapper } from "@/components/wrappers/image-preview-wrapper";
import { useState } from "react";

export const UserResponseContainer = ({
  bgWhite,
  message,
}: {
  bgWhite?: boolean;
  message: Message;
}) => {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <>
      <ImagePreviewWrapper show={showPreview} setShow={setShowPreview}>
        <div className="relative w-[500px] aspect-square">
          <Image src={message.imageUrls[0]} alt="" fill />
        </div>
      </ImagePreviewWrapper>
      <div
        className={`border ${bgWhite && "bg-white"} border-[#EAECF0] rounded-lg p-2 px-4 mb-4`}
      >
        <p className="text-[#868C98] text-sm font-grotesk-medium">You</p>
        {message.imageUrls.length ? (
          <div>
            <div
              onClick={() => {
                setShowPreview(true);
              }}
              className="relative cursor-pointer my-2 w-[100px] h-[60px]"
            >
              <Image alt="" src={message.imageUrls[0]} fill />
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="mt-2">
          {message.message && (
            <p className="text-[#292929] text-sm font-grotesk-medium">
              {message.message}
            </p>
          )}
        </div>
        <div className="mt-2">
          <p className="font-grotesk-regular text-xs">
            {messageDateFormatter(message.createdAt)}
          </p>
        </div>
      </div>
    </>
  );
};
