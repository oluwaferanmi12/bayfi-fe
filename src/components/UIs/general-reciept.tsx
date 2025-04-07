import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";

export const GReceipt = () => {
  return (
    <>
      <div className="bg-bayfi-black-500 rounded-2xl p-4">
        <div className="flex justify-center items-center flex-col">
          <Text type="header-text-white-20" value="You sent" />
          <Text type="text-green-24" value="NGN 200,000.00" />
          <div>
            <Text type="header-text-white-20" value="to" />
            <Text
              type="header-text-white-bold-20"
              value=" Akinlade Olaitan A"
            />
            <Text type="text-green-24" value=" OPAY" />
          </div>
        </div>
        <div className="border border-bayfi-black-400 py-8 px-4 mt-8 rounded-lg">
          <BrokenRecieptRecord />
          <BrokenRecieptRecord />
          <BrokenRecieptRecord />
          <BrokenRecieptRecord hideBorder />
          <div>
            <Button
              text="Get receipt"
              type="bgGreen"
              fullWidth
              loading={false}
            />
            <div className="flex justify-center mt-3">
              <Text type="text-small-green" value="Continue to homepage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BrokenRecieptRecord = ({ hideBorder }: { hideBorder?: boolean }) => {
  return (
    <div
      className={`flex justify-between items-center py-8 pb-4  ${!hideBorder && "border-b border-bayfi-black-400"} `}
    >
      <Text type="text-small-white" value="Account number" />
      <Text type="text-small-green" value="0000397042" />
    </div>
  );
};
