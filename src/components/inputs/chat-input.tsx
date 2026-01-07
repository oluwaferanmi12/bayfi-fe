import fileUploadIcon from "@/assets/svg/input-attachment.svg";
import sendIcon from "@/assets/svg/chat-send-icon.svg";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useSaveImage } from "@/hooks/query";
import { ChatSelecteFiles } from "../bottom-drawers/chat/select-file-drawer";
import { useImageUtils } from "@/hooks/custom/chat/useChatImage";
import { UploadedFilesDrawer } from "../bottom-drawers/chat/uploaded-files-drawer";

type ChatInputProps = {
  bgWhite?: boolean;
  handleMessage: (val: string, imageUrls?: string[]) => void;
};

export const ChatInput = ({ bgWhite, handleMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [showEditUploadedFile, setShowEditUploadedFile] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [focused, setFocused] = useState(false);
  const {
    handleFilesPicked,
    openDrawer,
    removeImageAt,
    setOpenDrawer,
    topLabel,
    uploadAllFiles,
    selectedFiles,
    setSelectedFiles,
    previewUrls,
    uploadImageLoading,
    setPreviewUrls,
    convertedImageUrls,
    setConvertedImageUrls,
    uploadAllFileLoading,
  } = useImageUtils();

  const expanded =
    focused || message.trim().length > 0 || selectedFiles.length > 0;

  const onSend = async () => {
    if (!message.trim() && selectedFiles.length === 0) return;

    try {
      const toSend = message.trim() || " ";
      handleMessage(
        toSend,
        convertedImageUrls.length ? convertedImageUrls : undefined
      );

      setConvertedImageUrls([]);
      setPreviewUrls([]);
      // reset
      setMessage("");
      setSelectedFiles([]);
      setPreviewUrls((old) => {
        old.forEach((u) => URL.revokeObjectURL(u));
        return [];
      });
      textareaRef.current?.blur();
    } catch (e) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  // Helper: upload all selected files and return array of uploaded URLs (strings)
  return (
    <>
      <ChatSelecteFiles
        previewUrls={previewUrls}
        open={openDrawer}
        handleClose={() => setOpenDrawer(false)}
        handleRemove={removeImageAt}
        selectedFiles={selectedFiles}
        uploadLoading={uploadAllFileLoading}
        uploadImage={uploadAllFiles}
        convertedImageUrls={convertedImageUrls}
      />

      <UploadedFilesDrawer
        open={showEditUploadedFile}
        handleClose={() => {
          setShowEditUploadedFile(false);
        }}
        imageUrls={convertedImageUrls}
        setImageUrl={setConvertedImageUrls}
      />

      <div className="lg:static fixed left-0 bottom-0 lg:px-0 px-2  z-10 w-full">
        {topLabel && (
          <div className="absolute -top-1 bg-white">
            <p className="text-xs font-grotesk-medium">{topLabel}</p>
          </div>
        )}

        {/* PREVIEW STRIP */}

        <div className="relative">
          <button
            disabled={uploadImageLoading}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onSend}
            className={`absolute ${uploadImageLoading && "opacity-30"} right-4 z-10 cursor-pointer transition-all ${
              expanded ? "top-3 translate-y-0" : "top-1/2 -translate-y-1/2"
            }`}
            aria-label="Send message"
          >
            <Image src={sendIcon} alt="" />
          </button>
          <div className="absolute left-4 top-3">
            <div className="relative">
              {!!convertedImageUrls.length && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowEditUploadedFile(true);
                  }}
                  className="w-[24px] h-[24px]"
                >
                  {convertedImageUrls.map((item, i) => {
                    const dir = i % 2 === 0 ? 1 : -1;
                    const baseAngle = 8;
                    const stepAngle = 2;
                    const maxAngle = 32;
                    const baseShift = 2;
                    const stepShift = 1.5;
                    const maxShift = 18;
                    const angle =
                      dir * Math.min(baseAngle + stepAngle * i, maxAngle);
                    const shift =
                      dir * Math.min(baseShift + stepShift * i, maxShift);
                    return (
                      <img
                        key={item}
                        src={item}
                        className="absolute z-50 inset-0 w-full h-full rounded-lg shadow-sm transition-transform duration-300 object-cover"
                        style={{
                          transform: `translateX(${shift}px) rotate(${angle}deg) scale(0.9)`,
                          transformOrigin: "50% 50%",
                          zIndex: i + 1,
                        }}
                      />
                    );
                  })}
                  <div className="absolute z-20 top-1 ">
                    <p
                      style={{ backgroundColor: "rgba(102, 102, 102, 0.5)" }}
                      className="text-white bg-bayfi-black-300 rounded-full w-4 aspect-square text-xs flex items-center justify-center"
                    >
                      +{convertedImageUrls.length}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`absolute  w-[30px] h-[30px] ${convertedImageUrls.length ? "left-10" : "left-1"} z-10 cursor-pointer transition-all ${
              expanded ? "top-3 translate-y-0" : "top-1/2 -translate-y-1/2"
            }`}
          >
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              aria-label="Attach files"
              className={`absolute top-0 left-2 cursor-pointer `}
              onClick={() => {
                if (convertedImageUrls.length === 4) {
                  toast.error(
                    "Only a maximum of 4 images are allowed, kindly delete from the existing ones"
                  );
                }
              }}
            >
              {convertedImageUrls.length < 4 && (
                <input
                  className="w-6 opacity-0 h-6 absolute"
                  onChange={(e) => handleFilesPicked(e.target.files)}
                  accept="image/*"
                  type="file"
                  multiple
                />
              )}

              <Image className="" src={fileUploadIcon} alt="" />
            </button>
          </div>

          <motion.textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                onSend();
              }
            }}
            initial={false}
            animate={{
              height: expanded ? 120 : 48,
              borderRadius: expanded ? 12 : 9999,
            }}
            transition={{
              height: { duration: 0.25, ease: "easeInOut" },
              borderRadius: { duration: 0.2, ease: "easeInOut" },
            }}
            className={`w-full resize-none pr-12 ${convertedImageUrls.length ? "pl-18" : "pl-10"} ${
              bgWhite ? "bg-white" : "bg-bayfi-grey-300"
            } py-3 outline-none`}
            placeholder="Type a message..."
            style={{
              boxShadow: expanded ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
            }}
          />
        </div>
      </div>
    </>
  );
};
