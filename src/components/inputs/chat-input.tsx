import fileUploadIcon from "@/assets/svg/input-attachment.svg";
import sendIcon from "@/assets/svg/chat-send-icon.svg";
import Image from "next/image";

export const ChatInput = ({
  bgWhite,
  handleMessage,
}: {
  bgWhite?: boolean;
  handleMessage: () => void;
}) => {
  return (
    <div className="fixed lg:absolute left-0 py-4 bottom-0 w-full">
      <div className="relative  ">
        <span
          onClick={() => {
            handleMessage();
          }}
          className="absolute right-4 top-2"
        >
          <Image src={sendIcon} alt="" />
        </span>
        <span className="absolute left-4 top-2">
          <Image src={fileUploadIcon} alt="" />
        </span>
        <input
          className={`w-full rounded-full ${bgWhite ? "bg-white" : "bg-bayfi-grey-300"}  p-3`}
        />
      </div>
    </div>
  );
};
