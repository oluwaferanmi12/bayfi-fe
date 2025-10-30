import bayfiIcon from "@/assets/svg/chat-logo.svg";
import { ImagePreviewWrapper } from "@/components/wrappers/image-preview-wrapper";
import { Message } from "@/types";
import { messageDateFormatter } from "@/utils/formatter";
import { Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SupportChatContainer = ({ message }: { message: Message }) => {
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
          setSelectedIndex(-1);
          setShowPreview(false);
        }}
        imageUrl={message.imageUrls[selectedIndex]}
      />
      <div className="bg-[#EBF4C2] mb-4  border border-[#BEDD3A] rounded-lg p-2 px-4">
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <p className="font-grotesk-medium text-sm">Bayfi support</p>
            <Image src={bayfiIcon} alt="" />
          </div>
        </div>

        {message.imageUrls.length ? (
          <Row gutter={12}>
            {message.imageUrls.map((item, index) => {
              return (
                <Col key={item} xs={12}>
                  <div
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    className="relative cursor-pointer my-2 w-full lg:h-[120px] h-[80px]"
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
        <div>
          <p className="text-[#292929] text-sm font-grotesk-medium">
            {message.message}
          </p>
          <div className="mt-2">
            <p className="font-grotesk-regular text-xs">
              {messageDateFormatter(message.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
