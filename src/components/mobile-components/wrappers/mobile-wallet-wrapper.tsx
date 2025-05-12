import eyeIcon from "@/assets/svg/eyeIcon.svg";
import Image from "next/image";
import tradeIcon from "@/assets/svg/mobileTradeIcon.svg";
import withdrawIcon from "@/assets/svg/mobileWithdrawIcon.svg";
import depositIcon from "@/assets/svg/mobileDepositIcon.svg";
import { Text } from "@/components/texts/text";
import { useState } from "react";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";
import nairaGreyIcon from "@/assets/svg/naira-grey.svg";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";
import { useRouter } from "next/navigation";

export const MobileWalletWrapper = () => {
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <BottomDrawer
        open={showDepositModal}
        onClose={() => {
          setShowDepositModal(false);
        }}
        title="Deposit"
      >
        <>
          <div
            onClick={() => {
              // setShowCryptoDeposit(true);
            }}
            className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
          >
            <div
              onClick={() => {
                router.push("deposit-crypto");
              }}
            >
              <Text value="Crypto" type="text-plain-dark-18" />
              <div className="w-[80%]">
                <Text
                  value="Swift and reliable trading of any cryptocurrencies"
                  type="text-small-light"
                />
              </div>
            </div>
            <Image src={bitCoinGroup} alt="" />
          </div>
          <div className="bg-bayfi-grey-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
            <div>
              <Text value="Naira" type="text-plain-dark-18" />
              <div className="w-[80%]">
                <Text
                  value="Deposit naira via bank transfer or with your card"
                  type="text-small-light"
                />
              </div>
            </div>
            <Image src={nairaGreyIcon} alt="" />
          </div>
        </>
      </BottomDrawer>
      <BottomDrawer
        open={showTradeModal}
        title="Trade"
        onClose={() => {
          setShowTradeModal(false);
        }}
      >
        <>
          <div
            onClick={() => {
              // setShowBuyCrypto(true);
            }}
            className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
          >
            <div onClick={() => router.push("buy-crypto")}>
              <Text value="Buy Crypto" type="text-plain-dark-18" />
              <div className="w-[80%]">
                <Text
                  value="Swift and reliable trading of any cryptocurrencies"
                  type="text-small-light"
                />
              </div>
            </div>
            <Image src={bitCoinGroup} alt="" />
          </div>
          <div className="bg-bayfi-black-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between">
            <div>
              <Text value="Sell crypto" type="text-plain-green-18" />
              <div className="w-[80%]">
                <Text
                  value="Deposit naira via bank transfer or with your card"
                  type="text-small-white"
                />
              </div>
            </div>
            <Image src={sellCryptoIcon} alt="" />
          </div>
        </>
      </BottomDrawer>

      <div className="bg-white p-4 my-2 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 ">
          <Image src={eyeIcon} alt="" />
          <p className="text-bayfi-grey-900 font-grotesk-medium text-sm">
            Wallet Balance
          </p>
        </div>
        <p className="text-2xl font-grotesk-bold py-3 border-b w-full text-center border-[#F0F0F0]">
          NGN200,000.00
        </p>
        <div className="py-3 flex px-6 items-center justify-between w-full">
          <div
            onClick={() => {
              setShowTradeModal(true);
            }}
            className="flex flex-col cursor-pointer items-center justify-center gap-2"
          >
            <Image src={tradeIcon} alt="" />
            <p className="text-bayfi-black-500 font-semibold text-sm">Trade</p>
          </div>
          <div
            onClick={() => {
              setShowDepositModal(true);
            }}
            className="flex cursor-pointer flex-col items-center justify-center gap-2"
          >
            <Image src={depositIcon} alt="" />
            <p className="text-bayfi-black-500 font-semibold text-sm">
              Deposit
            </p>
          </div>
          <div
            onClick={() => {
              router.push("withdrawal")
            }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Image src={withdrawIcon} alt="" />
            <p className="text-bayfi-black-500 font-semibold text-sm">
              Withdraw
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
