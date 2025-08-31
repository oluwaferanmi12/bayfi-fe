import { TableStatus } from "@/components/status/table-status";
import Image from "next/image";
import bitcoinIcon from "@/assets/svg/bitcoin-small-icon.svg";

export const SupportHeaderType = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <p className="mb-1 text-xl font-grotesk-medium">Bcryp020</p>
          <div>
            <TableStatus text="Open" type="Pending" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={bitcoinIcon} alt="" />
          <p className="text-text-color-600 font-grotesk-medium">Crypto</p>
        </div>
      </div>
    </>
  );
};
