import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import { DisburseResponse } from "@/types";
import { FormatNumber } from "@/utils/formatter";
import { useRouter } from "next/navigation";

export const GReceipt = ({ payload }: { payload: DisburseResponse }) => {
  const router = useRouter();
  return (
    <>
      <div className="bg-bayfi-black-500 rounded-2xl p-4">
        <div className="flex justify-center items-center flex-col">
          <Text type="header-text-white-20" value="You sent" />
          <Text
            type="text-green-24"
            value={`NGN ${FormatNumber(payload.transactionValueAmount)}`}
          />
          <div>
            <Text type="header-text-white-20" value="to" />{" "}
            <Text
              type="header-text-white-bold-20"
              value={payload.beneficiaryAccountName}
            />{" "}
            <Text type="text-green-24" value={payload.beneficiaryBankName} />
          </div>
        </div>
        <div className="border border-bayfi-black-400 py-8 px-4 mt-8 rounded-3xl">
          <BrokenRecieptRecord
            leftText="Account number"
            rightText={payload.beneficiaryAccountNumber}
          />
          <BrokenRecieptRecord
            leftText="Account name"
            rightText={payload.beneficiaryAccountName}
          />
          <BrokenRecieptRecord
            leftText="Bank name"
            rightText={payload.beneficiaryBankName}
          />
          <BrokenRecieptRecord
            leftText="Reference"
            rightText={payload.reference}
          />
          <BrokenRecieptRecord
            leftText="Amount"
            rightText={FormatNumber(payload.transactionValueAmount)}
            hideBorder
          />
        </div>
        <div className="mt-4">
          <Button text="Get receipt" type="bgGreen" fullWidth loading={false} />
          <div
            className="flex justify-center mt-3 cursor-pointer"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <Text type="text-small-green" value="Continue to homepage" />
          </div>
        </div>
      </div>
    </>
  );
};

const BrokenRecieptRecord = ({
  hideBorder,
  leftText,
  rightText,
}: {
  hideBorder?: boolean;
  leftText: string;
  rightText: string;
}) => {
  return (
    <div
      className={`flex justify-between items-center py-8 pb-4   ${!hideBorder && "border-b border-bayfi-black-400"} `}
    >
      <Text type="text-small-white" value={leftText} />
      <div className="w-[70%] flex justify-end">
        <Text type="text-small-green" value={rightText} />
      </div>
    </div>
  );
};
