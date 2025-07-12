export const UserChatHeader = ({ bgWhite }: { bgWhite ?: boolean }) => {
  return (
    <div
      className={`border ${bgWhite && "bg-white rounded-lg"} border-[#EAECF0] my-3 p-4 rounded-lg`}
    >
      <p className="text-[#868C98] text-sm font-grotesk-medium">You</p>
      <p className="text-[#292929] font-grotesk-medium text-sm">
        I want to trade my gift card
      </p>
      <div className="flex items-center gap-2 mt-2">
        <div className="bg-[#F6F6F6] rounded-lg border flex items-center border-[#DCDCDC]">
          <p className="text-text-color-500 font-grotesk-medium flex items-center px-3 py-1">
            Itunes card
          </p>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg border flex items-center border-[#DCDCDC]">
          <p className="text-text-color-500 font-grotesk-medium flex items-center px-3 py-1">
            Canada
          </p>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg border flex items-center border-[#DCDCDC]">
          <p className="text-text-color-500 font-grotesk-medium flex items-center px-3 py-1">
            $2000
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-[#878787] font-grotesk-regular">
          Mar 23rd, 2024 12:45:23 AM
        </p>
      </div>
    </div>
  );
};
