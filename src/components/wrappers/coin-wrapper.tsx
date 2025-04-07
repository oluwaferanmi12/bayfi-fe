import bitcoinIcon from "@/assets/svg/bitcoing1Icon.svg";
import Image from "next/image";
import { Text } from "@/components/texts/text";
export const CoinWrapper = ({ action }: { action?: () => void }) => {
  return (
    <div
      onClick={action}
      className="p-4 my-2 flex justify-between items-center cursor-pointer rounded-lg border border-[#EBF1FF]"
    >
      <div className="flex items-center gap-3">
        <div>
          <Image src={bitcoinIcon} alt="" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-grotesk-bold text-bayfi-black-900">
            Bitcoin
          </p>
          <p className="text-base font-grotesk-regular text-bayfi-black-900">
            BTC
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#757575] text-base font-grotesk-medium text-right">
          0.00 BTC
        </p>
        <p className="text-[#757575] text-base font-grotesk-medium text-right">
          $0.00
        </p>
      </div>
    </div>
  );
};
