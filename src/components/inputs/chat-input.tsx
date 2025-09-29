import fileUploadIcon from "@/assets/svg/input-attachment.svg";
import sendIcon from "@/assets/svg/chat-send-icon.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useSaveImage } from "@/hooks/query";

export const ChatInput = ({
  bgWhite,
  handleMessage,
}: {
  bgWhite?: boolean;
  handleMessage: (val: string, imageUrl?: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const { mutate: saveImage, isPending: uploadImageLoading } = useSaveImage(
    (data) => {
      setImageUrl(data.data);
    }
  );
  const [imageDetails, setImageDetails] = useState<File | null>(null);

  const expanded = focused || message.trim().length > 0;

  const onSend = () => {
    if (!message.trim()) return;
    const toSend = message;
    handleMessage(toSend, imageUrl);
    setMessage("");
    setImageUrl("");
    setImageDetails(null);
    textareaRef.current?.focus(); // keep expanded
  };

  const getImageUrl = (file?: File) => {
    if (!file) {
      toast.error("No File Selected");
      return;
    }
    setImageDetails(file);
    const formData = new FormData();
    formData.append("file", file);
    saveImage({ folderType: "chat-transaction", file: formData });
  };

  return (
    <div className="fixed lg:absolute left-0 py-4 bottom-0 w-full">
      <div className="absolute -top-1 bg-white">
        <p className="text-xs font-grotesk-medium">{imageDetails?.name}</p>
      </div>
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

        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          className={`absolute left-4 z-10 cursor-pointer transition-all ${
            expanded ? "top-3 translate-y-0" : "top-1/2 -translate-y-1/2"
          }`}
          aria-label="Attach file"
        >
          <input
            onChange={(e) => {
              getImageUrl(e.target.files?.[0]);
            }}
            accept="image/*"
            type="file"
            className="absolute w-6 opacity-0 -left-2"
          />
          <Image src={fileUploadIcon} alt="" />
        </button>

        <motion.textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          initial={false}
          animate={{
            height: expanded ? 120 : 48,
            borderRadius: expanded ? 12 : 9999, // pill → rounded
          }}
          transition={{
            height: { duration: 0.25, ease: "easeInOut" },
            borderRadius: { duration: 0.2, ease: "easeInOut" },
          }}
          className={`w-full resize-none pr-12 pl-12 ${
            bgWhite ? "bg-white" : "bg-bayfi-grey-300"
          } py-3 outline-none`}
          placeholder="Type a message..."
          style={{
            boxShadow: expanded ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
          }}
        />
      </div>
    </div>
  );
};
