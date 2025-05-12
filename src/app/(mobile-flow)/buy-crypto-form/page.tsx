"use client";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React, { useState } from "react";
import buyCryptoIcon from "@/assets/svg/buyCrypto.svg";
import dollarCircle from "@/assets/svg/dollar-circle.svg";
import { Text } from "@/components/texts/text";
import bitcoinInputIcon from "@/assets/svg/bitcoing-(btc).svg";
import { Button } from "@/components/buttons";
import { CoinWrapper } from "@/components/wrappers/coin-wrapper";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";
import walletTypeIcon from "@/assets/svg/bitcoin-btc.svg";
import Image from "next/image";
import { CopyButton } from "@/components/buttons/copy-button";
import qrCodeIcon from "@/assets/svg/qr-code.svg";

const BuyCryptoForm = () => {
  const [showWalletType, setShowWalletType] = useState(false);
  const [showWalletDetails , setShowWalletDetails] = useState(true)
  return (
    <>
      <BottomDrawer
        open={showWalletType}
        height="medium"
        title="Wallet type"
        onClose={() => {
          setShowWalletType(false);
        }}
      >
        <div>
          <MobileWalletType />
          <MobileWalletType />
          <MobileWalletType />
          <MobileWalletType />
        </div>
      </BottomDrawer>
      <BottomDrawer
        open={showWalletDetails}
        height="medium"
        title="Wallet type"
        onClose={() => {
          setShowWalletDetails(false);
        }}
      >
        <div>
          <CoinWrapper />
          <div className="mt-3 bg-bayfi-grey-300 rounded-lg p-4">
            <p className="text-black text-lg font-grotesk-bold">bep-20</p>
            <p className="text-bayfi-black-800 text-sm font-grotesk-regular">
              0xa8400a2782eed05d10721ff9282b37084a7416df
            </p>
            <div className="my-2">
              <CopyButton />
            </div>
            <div className="flex justify-center my-2 items-center">
              <Image src={qrCodeIcon} alt="" />
            </div>
            <div className="bg-white px-4 py-2 rounded-lg my-4">
              <p className="text-bayfi-black-900 text-base font-grotesk-regular">
                Confirm the wallet you are sending to to avoid issues
              </p>
            </div>
          </div>
          <p className="text-[#FF3B30] font-grotesk-medium mt-2">
            Ensure you are sending BTC to the correct wallet address.
            Transactions are irreversible
          </p>
        </div>
      </BottomDrawer>
      <PageTitle title="Buy Crypto" />
      <CoinWrapper blackBg />
      <div className="my-3 bg-white p-4 rounded-lg">
        <GInput
          label="Select wallet type"
          placeholder="bep-20"
          icon={buyCryptoIcon}
        />
        <GInput
          label="How much do you want to purchase in dollars?"
          placeholder="Enter amount"
          icon={dollarCircle}
          noMarginBottom
        />
        <div className="mb-3">
          <Text type="text-small-red" value="Minimum amoutn $50" />
        </div>
        <GInput
          label="Enter wallet address"
          placeholder="Enter amount"
          icon={bitcoinInputIcon}
          noMarginBottom
        />
        <div className="mb-3">
          <Text type="text-small-red" value="Hint text" />
        </div>
        <Button fullWidth text="Proceed" loading={false} type="bgGreen" />
      </div>
    </>
  );
};

export default BuyCryptoForm;

const MobileWalletType = () => {
  return (
    <>
      <div className="bg-bayfi-grey-300 p-2 mb-2 flex gap-2 items-center  rounded-lg ">
        <Image src={walletTypeIcon} alt="" />
        <p className="font-grotesk-semi-bold">
            TRC 20
        </p>
      </div>
    </>
  );
};
