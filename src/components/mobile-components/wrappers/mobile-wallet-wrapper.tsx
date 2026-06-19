import Image from "next/image";
import { Text } from "@/components/texts/text";
import { useState } from "react";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";
import nairaGreyIcon from "@/assets/svg/naira-grey.svg";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";
import { useRouter } from "next/navigation";
import { Wallet } from "@/types";
import { FormatNumber } from "@/utils/formatter";
import { useProfileStore } from "@/store/userProfileStore";
import { useToggleWalletStatus } from "@/hooks/query";
import { useQueryClient } from "@tanstack/react-query";
import eyeGreyBg from "@/assets/svg/eye-grey-bg.svg";
import mobileBgPattern from "@/assets/svg/mobile-bg-pattern.svg";
import giftCardActionIcon from "@/assets/svg/trade-giftcard-dashboard.svg";
import withdrawActionIcon from "@/assets/svg/withdraw-dashboard.svg";
import cryptoActionIcon from "@/assets/svg/buy-crypto-dashboard.svg";
import { GiftcardBottomDrawer } from "@/components/side-drawers/services/giftcard-bottom-drawer";
import { ComingSoonWrapper } from "@/components/modals/coming-soon-modal";

export const MobileWalletWrapper = ({
  walletDetails,
}: {
  walletDetails?: Wallet;
}) => {
  const queryClient = useQueryClient();
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showGiftcardModal, setShowGiftcardModal] = useState(false);
  const mutateWalletStatus = useToggleWalletStatus((data) => {
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    queryClient.invalidateQueries({ queryKey: ["get-wallet"] });
  });
  const router = useRouter();
  const { profile } = useProfileStore();
  return (
    <>
      <GiftcardBottomDrawer
        open={showGiftcardModal}
        handleClose={() => {
          setShowGiftcardModal(false);
        }}
      />
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

      <div className="bg-bayfi-black-600 min-h-25 relative p-4 rounded-xl mt-4">
        <div className="absolute  right-0  ">
          <Image src={mobileBgPattern} alt="" />
        </div>
        <div
          onClick={() => {
            mutateWalletStatus.mutate(!profile?.isBalanceVisible);
          }}
          className="flex items-center gap-2"
        >
          <div
            className={`relative ${mutateWalletStatus.isPending && "opacity-50"}`}
          >
            <Image src={eyeGreyBg} alt="" />
            {!profile?.isBalanceVisible && (
              <span className="absolute left-1/2 top-1/2 w-5 h-[1.5px] bg-white -translate-x-1/2 -translate-y-1/2 rotate-[-35deg]" />
            )}
          </div>
          <button
            disabled={mutateWalletStatus.isPending}
            className={`border border-[#F0F0F033]  rounded-full bg-[#F0F0F066] px-4 gap-2 ${mutateWalletStatus.isPending && "opacity-50"}`}
          >
            <p className="font-grotesk-medium text-base text-[#FBFBFB]">
              Bayfi Balance
            </p>
          </button>
        </div>
        <div>
          {profile && (
            <p className="text-[32px] text-[#F6F4F0] font-grotesk-bold py-3 w-full">
              {profile.isBalanceVisible
                ? `NGN ${FormatNumber(walletDetails?.walletBalance ?? 0)}`
                : "****"}
            </p>
          )}
        </div>
      </div>

      <div className="my-4 flex items-center gap-3">
        <button
          onClick={() => {
            setShowGiftcardModal(true);
          }}
          className="bg-white w-full border border-[#E9EBF8] rounded-xl p-4  flex flex-col items-center justify-center"
        >
          <div>
            <Image src={giftCardActionIcon} alt="" />
          </div>
          <p className="text-[#444D5A] font-grotesk-bold text-xs mt-1">
            Trade Giftcard
          </p>
        </button>
        <ComingSoonWrapper title="Trade Crypto">
          <div className="bg-white w-full border border-[#E9EBF8] rounded-xl p-4 flex flex-col items-center justify-center">
            <div>
              <Image src={cryptoActionIcon} alt="" />
            </div>
            <p className="text-[#444D5A] font-grotesk-bold text-xs mt-1">
              Trade Crypto
            </p>
          </div>
        </ComingSoonWrapper>
        <button
          onClick={() => {
            router.push("withdrawal");
          }}
          className="bg-white w-full border border-[#E9EBF8] rounded-xl p-4 flex flex-col items-center justify-center"
        >
          <div>
            <Image src={withdrawActionIcon} alt="" />
          </div>
          <p className="text-[#444D5A] font-grotesk-bold text-xs mt-1">
            Withdraw
          </p>
        </button>
      </div>
    </>
  );
};
