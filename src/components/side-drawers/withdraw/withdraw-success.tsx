import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import { DisburseResponse } from "@/types";
import { FormatNumber } from "@/utils/formatter";
import checkCircleGreen from "@/assets/svg/check-circle-green.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const WithdrawSuccess = ({
  payload,
  accountName,
  bankName,
  handleClose,
  transactionRoute = "/transaction",
}: {
  payload: DisburseResponse;
  accountName: string;
  bankName: string;
  handleClose: () => void;
  transactionRoute?: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
      <Image src={checkCircleGreen} alt="Transfer initiated" width={64} height={64} />
      <Text type="header-text-20" value="Transfer Initiated" />
      <div>
        <Text type="text-green-24" value={`NGN ${FormatNumber(payload.amount)}`} />
        <div className="mt-1">
          <Text type="main-text-regular" value="has been sent to " />
          <Text type="main-text-bold" value={accountName} />
        </div>
        <div className="mt-1">
          <Text type="main-text-regular" value={bankName} />
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-2">{payload.message}</p>
      <div className="w-full mt-4 flex flex-col gap-3">
        <Button
          text="View transactions"
          type="bgGreen"
          fullWidth
          loading={false}
          action={() => {
            handleClose();
            router.replace(transactionRoute);
          }}
        />
        <div className="flex justify-center cursor-pointer" onClick={handleClose}>
          <Text type="text-small-green" value="Back to homepage" />
        </div>
      </div>
    </div>
  );
};
