import { Message } from "@/types";
import { FormatNumber } from "@/utils/formatter";
import moment from "moment";

export const UserChatHeader = ({
  bgWhite,
  message,
}: {
  bgWhite?: boolean;
  message: Message;
}) => {
  return (
    <div
      className={`border ${bgWhite && "bg-white rounded-lg"} border-[#EAECF0] my-3 p-4 rounded-lg`}
    >
      <p className="text-[#868C98] text-sm font-grotesk-medium">You</p>
      <p className="text-[#292929] font-grotesk-medium text-sm">
        {message.message}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <div className="bg-[#F6F6F6] rounded-lg border flex items-center border-[#DCDCDC]">
          <p className="text-text-color-500 text-sm font-grotesk-medium flex items-center px-3 py-1">
            {message.giftCardName}
          </p>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg border flex items-center border-[#DCDCDC]">
          <p className="text-text-color-500 text-sm font-grotesk-medium flex items-center px-3 py-1">
            {message.countryName}
          </p>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg border flex items-center border-[#DCDCDC]">
          <p className="text-text-color-500 text-sm font-grotesk-medium flex items-center px-3 py-1">
            ${FormatNumber(message.amount)}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-[#878787] text-xs font-grotesk-regular">
          {moment(message.createdAt).format("MMM Do, YYYY hh:mm:ss A")}
        </p>
      </div>
    </div>
  );
};
