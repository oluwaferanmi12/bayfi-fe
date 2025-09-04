"use client";
import { GPageWrapper } from "@/components/wrappers/GPageWrapper";
import { Col, Row } from "antd";
import bgImage from "@/assets/svg/walletCardImage.svg";
import Image from "next/image";
import eyeIcon from "@/assets/svg/eye-icon-black.svg";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
import bidirectionIcon from "@/assets/svg/arrow-bidirection.svg";
import arrowSlantDown from "@/assets/svg/bulkSendIcon.svg";
import arrowSlantUp from "@/assets/svg/bulkSendUp.svg";
import bulkCard from "@/assets/svg/bulkCard.svg";
import bulkCall from "@/assets/svg/bulkCall.svg";
import bulkGlobal from "@/assets/svg/bulkGlobal.svg";
import wifiSquare from "@/assets/svg/wifi-square.svg";
import cableIcon from "@/assets/svg/bulkMonitor.svg";
import dollarSquare from "@/assets/svg/dollarSquare.svg";
import chartPlaceholder from "@/assets/svg/chartPlaceholder.svg";

import { useState } from "react";
import { SideDrawer } from "@/components/side-drawers/side-drawer";
import bitCoinGroup from "@/assets/svg/bitCoinGroup.svg";
import nairaGreyIcon from "@/assets/svg/naira-grey.svg";
import sellCryptoIcon from "@/assets/svg/sellCryptoIcon.svg";
import { UserProfile } from "@/components/UIs/user-name-profile";
import { DarkBalanceWrapper } from "@/components/wrappers/dark-balance-wrapper";
import { GInput } from "@/components/inputs/GInput";
import padLockIcon from "@/assets/svg/padLockIcon.svg";
import { OTPInput } from "@/components/inputs/otp-input";
import { GReceipt } from "@/components/UIs/general-reciept";
import { SideDrawerBreadCrumb } from "@/components/breadcrumb/side-drawer-bread-crumb";
import { SearchInput } from "@/components/inputs/search-input";
import { CoinWrapper } from "@/components/wrappers/coin-wrapper";
import { CoinNetworkWrappr } from "@/components/wrappers/network-wrapper";
import { CopyButton } from "@/components/buttons/copy-button";
import qrCodeIcon from "@/assets/svg/qr-code.svg";
import buyCryptoIcon from "@/assets/svg/buyCrypto.svg";
import dollarCircle from "@/assets/svg/dollar-circle.svg";
import bitcoinInputIcon from "@/assets/svg/bitcoing-(btc).svg";
import { DashboardMobile } from "@/components/mobile-screens/dashboard-mobile";
import { TransactionWrapper } from "@/components/transaction/transaction-wrapper";

function Dashboard() {
  const [depositModal, setDepositModal] = useState(false);
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showWithdrawOtp, setShowWithdrawOtp] = useState(false);
  const [showReciept, setShowReciept] = useState(false);
  const [showCryptoDeposit, setShowCryptoDeposit] = useState(false);
  const [showCryptoDepositDetails, setShowCryptoDepositDetails] =
    useState(false);
  const [showDepositQR, setShowDepositQR] = useState(false);
  const [showBuyCrypto, setShowBuyCrypto] = useState(false);
  const [showSelectWallet, setShowSelectWallet] = useState(false);
  return (
    <>
      <div className="hidden lg:block">
        <SideDrawer
          title="Withdraw"
          open={showWithdrawModal}
          onClose={() => {
            setShowWithdrawModal(false);
          }}
        >
          {!showWithdrawOtp ? (
            <div>
              <div className="mt-2 mb-4">
                <Text type="header-text-20" value="Recent beneficiaries" />
              </div>
              <div className="flex items-center justify-between">
                <UserProfile />
                <UserProfile />
                <UserProfile />
                <UserProfile />
                <UserProfile />
              </div>
              <div className="my-4">
                <DarkBalanceWrapper />
              </div>
              <div>
                <GInput
                  label="How much would you like to withdraw?"
                  placeholder="0.00"
                />
                <GInput label="Select bank" placeholder="0.00" />
                <GInput
                  label="Recipient Account"
                  placeholder="Enter 10 digits account number"
                />
                <Button
                  loading={false}
                  fullWidth
                  text="Continue"
                  type="bgGreen"
                  action={() => {
                    setShowWithdrawOtp(true);
                  }}
                />
              </div>
            </div>
          ) : showReciept ? (
            <GReceipt />
          ) : (
            <div className="flex items-center justify-center flex-col">
              <Text type="header-text-20" value="You are about to send" />
              <Text type="text-green-24" value="NGN 200,000.00" />
              <div>
                <Text type="main-text-regular" value="to " />
                <Text type="main-text-bold" value=" Akinlade Olaitan A" />
                <Text type="text-green-24" value=" OPAY" />
              </div>
              <div className="my-6">
                <Image src={padLockIcon} alt="" />
              </div>
              <div className="mb-4">
                <Text type="input-text" value="Enter your pin to confirm" />
              </div>
              <OTPInput onChange={() => {}} value="" />
              <div className="my-4 w-full">
                <Button
                  action={() => {
                    setShowReciept(true);
                  }}
                  fullWidth
                  loading={false}
                  type="bgGreen"
                  text="Withdraw money"
                />
              </div>
            </div>
          )}
        </SideDrawer>
        <SideDrawer
          onClose={() => {
            setShowCryptoModal(false);
          }}
          open={showCryptoModal}
          title="Trade Crypto"
        >
          <SideDrawerBreadCrumb
            breadCrumbArray={[
              { text: "home", active: false, action: () => {} },
              { text: "Select coin", active: false, action: () => {} },
              { text: "Network", active: true, action: () => {} },
            ]}
          />
          {showBuyCrypto ? (
            <>
              <div className="my-3">
                <SearchInput />
                <div className="mt-4">
                  <CoinWrapper
                    action={() => {
                      setShowBuyCrypto(false);
                      setShowSelectWallet(true);
                    }}
                  />
                  <CoinWrapper />
                  <CoinWrapper />
                </div>
              </div>
            </>
          ) : showSelectWallet ? (
            <div className="my-3">
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
          ) : (
            <>
              <div
                onClick={() => {
                  setShowBuyCrypto(true);
                }}
                className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
              >
                <div>
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
          )}
        </SideDrawer>
        <SideDrawer
          onClose={() => {
            setDepositModal(false);
          }}
          open={depositModal}
          title="Deposit"
        >
          <SideDrawerBreadCrumb
            breadCrumbArray={[
              { text: "home", active: false, action: () => {} },
              { text: "Select coin", active: false, action: () => {} },
              { text: "Network", active: true, action: () => {} },
            ]}
          />
          {showCryptoDeposit ? (
            <div>
              <div className="my-3">
                <SearchInput />
                <div className="mt-4">
                  <CoinWrapper
                    action={() => {
                      setShowCryptoDepositDetails(true);
                      setShowCryptoDeposit(false);
                    }}
                  />
                  <CoinWrapper />
                  <CoinWrapper />
                </div>
              </div>
            </div>
          ) : showCryptoDepositDetails ? (
            <>
              <CoinWrapper />
              <div>
                <p className="text-text-color-600 text-base font-grotesk-medium">
                  Select your preferred network
                </p>
                <div className="mt-4">
                  <CoinNetworkWrappr
                    action={() => {
                      setShowCryptoDepositDetails(false);
                      setShowCryptoDeposit(false);
                      setShowDepositQR(true);
                    }}
                  />
                  <CoinNetworkWrappr />
                  <CoinNetworkWrappr />
                </div>
              </div>
            </>
          ) : showDepositQR ? (
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
          ) : (
            <>
              <div
                onClick={() => {
                  setShowCryptoDeposit(true);
                }}
                className="bg-bayfi-green-500 my-4 cursor-pointer rounded-lg p-4 flex justify-between"
              >
                <div>
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
          )}
        </SideDrawer>
        <Row gutter={12}>
          <Col xs={16}>
            <div className="bg-white relative py-12 text-center items-center  rounded-xl p-4 ">
              <span className="absolute left-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <span className="absolute right-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <div>
                <div className="flex justify-center">
                  <div className="bg-bayfi-green-100 rounded-full px-4 py-1 flex items-center gap-2">
                    <span>
                      <Image src={eyeIcon} alt="" />
                    </span>
                    <Text type="text-plain-dark-16" value="Wallet balance" />
                  </div>
                </div>

                <div className="py-6">
                  <Text type="number-big" value="NGN 200,000.00" />
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Button
                    loading={false}
                    text="Trade crypto"
                    icon={bidirectionIcon}
                    type="bgGreen"
                    lessRounded
                    action={() => {
                      setShowCryptoModal(true);
                    }}
                  />
                  <Button
                    loading={false}
                    text="Deposit"
                    icon={arrowSlantDown}
                    type="bgGreen"
                    lessRounded
                    action={() => {
                      setDepositModal(true);
                    }}
                  />
                  <Button
                    loading={false}
                    text="Withdraw"
                    icon={arrowSlantUp}
                    type="bgGreen"
                    action={() => {
                      setShowWithdrawModal(true);
                    }}
                    lessRounded
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Text type="header-text-20" value="Other services" />
              <div className="mt-4 flex gap-6">
                <DashboardServiceWrapper icon={bulkCard} text="Gift card" />
                <DashboardServiceWrapper icon={bulkCall} text="Buy airtime" />
                <DashboardServiceWrapper icon={bulkGlobal} text="Betting" />
                <DashboardServiceWrapper icon={wifiSquare} text="Mobile data" />
                <DashboardServiceWrapper icon={cableIcon} text="Cable TV" />
              </div>
            </div>
            <div className="mt-8 bg-white rounded-2xl">
              <div className="p-4 flex items-center gap-3 border-b border-bayfi-grey-500">
                <Image src={dollarSquare} alt="" />
                <div>
                  <Text type="main-text-bold" value="Trade Analytics" />
                  <div>
                    <Text
                      type="body-medium"
                      value="Keep track of new and previous trades"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 py-8">
                <Image className="w-full" src={chartPlaceholder} alt="" />
              </div>
            </div>
          </Col>
          <Col xs={8}>
            <div className="bg-white min-h-[80vh] rounded-lg p-4">
              <Text type="main-text-regular" value="Transaction history" />
              <div className="mt-3 border border-[#EAECF0] rounded-lg bg-[#FDFEFF] p-4">
                <TransactionWrapper />
                <TransactionWrapper />
                <TransactionWrapper />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <DashboardMobile />
    </>
  );
}

export default Dashboard;

const DashboardServiceWrapper = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <>
      <div className="flex justify-center bg-white rounded-2xl flex-col gap-1 items-center py-6 w-full">
        <Image src={icon} alt="" />
        <Text type={"text-plain-dark-18"} value={text} />
      </div>
    </>
  );
};
