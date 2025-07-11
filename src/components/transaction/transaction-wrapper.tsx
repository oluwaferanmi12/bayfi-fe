import sendSquare from "@/assets/svg/sendSquareIcon.svg";
import recieveSquare from "@/assets/svg/recieveSquare.svg";
import calendarIcon from "@/assets/svg/calendarIcon.svg";
import Image from "next/image";
import { Text } from "@/components/texts/text";

export const TransactionWrapper = () => {
  return (
    <div className="border-bayfi-grey-500 flex py-2 justify-between">
      <div className="flex items-center gap-2">
        <Image src={sendSquare} alt="" />
        <div>
          <Text type="text-plain-dark-18" value="NGN 200,000.00" />
          <div>
            <Text type="text-plain-16" value="Funds Withdrawal" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={calendarIcon} alt="" />
        <Text type={"text-plain-16"} value="Feb-20-2025" />
      </div>
    </div>
  );
};
