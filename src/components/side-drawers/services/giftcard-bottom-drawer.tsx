import { Text } from "@/components/texts/text";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import Image from "next/image";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";
import { useRouter } from "next/navigation";

export const GiftcardBottomDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const router = useRouter();
  return (
    <>
      <BottomDrawer title="Trade Giftcard" open={open} onClose={handleClose}>
        <div
          onClick={() => {
            router.push("/giftcard")
          }}
          className="bg-bayfi-black-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
        >
          <div>
            <Text value="Sell Giftcard" type="text-plain-green-18" />
            <div className="w-[80%]">
              <Text
                value="Deposit naira via bank transfer or with your card"
                type="text-small-white"
              />
            </div>
          </div>
          <Image src={sellCryptoIcon} alt="" />
        </div>
        <div
          onClick={() => {}}
          className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
        >
          <div>
            <Text value="Buy Giftcard" type="text-plain-dark-18" />
            <div className="w-[80%]">
              <Text
                value="Swift and reliable trading of any Giftcard"
                type="text-small-light"
              />
            </div>
          </div>
          <Image src={bitCoinGroup} alt="" />
        </div>
      </BottomDrawer>
    </>
  );
};
