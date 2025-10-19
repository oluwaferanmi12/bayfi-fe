import giftCardIcon from "@/assets/svg/gift-card-chat-icon.svg";
import { Message } from "@/types";
import { messageDateFormatter } from "@/utils/formatter";
import Image from "next/image";
import amazonCard from "@/assets/svg/amazon-placeholder.svg";
import { ImagePreviewWrapper } from "@/components/wrappers/image-preview-wrapper";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";

export const UserResponseContainer = ({
  bgWhite,
  message,
}: {
  bgWhite?: boolean;
  message: Message;
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(() => {
    if (selectedIndex >= 0) {
      setShowPreview(true);
    }
  }, [selectedIndex]);
  return (
    <>
      <ImagePreviewWrapper
        show={showPreview}
        setShow={() => {
          setShowPreview(false);
        }}
        imageUrl={message.imageUrls[selectedIndex]}
      />

      <div
        className={`border ${bgWhite && "bg-white"} border-[#EAECF0] rounded-lg p-2 px-4 mb-4`}
      >
        <p className="text-[#868C98] text-sm font-grotesk-medium">You</p>
        {message.imageUrls.length ? (
          <Row gutter={12}>
            {message.imageUrls.map((item, index) => {
              return (
                <Col key={item} xs={12}>
                  <div
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    className="relative cursor-pointer my-2 w-full h-[80px]"
                  >
                    <Image
                      alt=""
                      src={item}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
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
