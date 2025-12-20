"use client";
import { Col, Row } from "antd";
import bgImage from "@/assets/svg/walletCardImage.svg";
import Image from "next/image";
import eyeIcon from "@/assets/svg/eye-icon-black.svg";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
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
import { GInput } from "@/components/inputs/GInput";
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
import { DashboardTransactionWrapper } from "@/components/transaction/dashboard-transaction-wrapper";
import giftCardActionIcon from "@/assets/svg/trade-giftcard-dashboard.svg";
import withdrawActionIcon from "@/assets/svg/withdraw-dashboard.svg";
import cryptoActionIcon from "@/assets/svg/buy-crypto-dashboard.svg";
import { useGetWallet, useToggleWalletStatus } from "@/hooks/query/useWallet";
import { FormatNumber } from "@/utils/formatter";
import { useGetTransaction } from "@/hooks/query";
import { useProfileStore } from "@/store/userProfileStore";
import { useQueryClient } from "@tanstack/react-query";
import eyeSlash from "@/assets/svg/eye-slash.svg";
import { WithdrawDrawer } from "@/components/side-drawers/withdraw/withdraw-drawer";

function Dashboard() {
  const queryClient = useQueryClient();
  const [depositModal, setDepositModal] = useState(false);
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showCryptoDeposit, setShowCryptoDeposit] = useState(false);
  const [showCryptoDepositDetails, setShowCryptoDepositDetails] =
    useState(false);
  const [showDepositQR, setShowDepositQR] = useState(false);
  const [showBuyCrypto, setShowBuyCrypto] = useState(false);
  const [showSelectWallet, setShowSelectWallet] = useState(false);
  const { data: walletDetails } = useGetWallet();
  const { data: transactions, isPending: transactionLoading } =
    useGetTransaction();
  const mutateWalletStatus = useToggleWalletStatus((data) => {
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
  });
  const { profile } = useProfileStore();

  return (
    <>
      <div className="hidden lg:block">
        <WithdrawDrawer
          open={showWithdrawModal}
          close={() => {
            setShowWithdrawModal(false);
          }}
        />
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
            <div className="bg-white relative py-8 text-center items-center  rounded-4xl p-4 ">
              <span className="absolute left-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <span className="absolute right-0 top-0">
                <Image src={bgImage} alt="" />
              </span>
              <div>
                <div className="flex justify-center">
                  {profile && (
                    <button
                      disabled={mutateWalletStatus.isPending}
                      onClick={() => {
                        mutateWalletStatus.mutate(!profile.isBalanceVisible);
                      }}
                      className={`bg-bayfi-green-100 ${mutateWalletStatus.isPending && "opacity-50"} rounded-full px-4 py-1 flex items-center gap-2`}
                    >
                      <span>
                        <Image
                          src={profile.isBalanceVisible ? eyeIcon : eyeSlash}
                          alt=""
                          width={20}
                          height={20}
                        />
                      </span>
                      <Text type="text-plain-dark-16" value="Wallet balance" />
                    </button>
                  )}
                </div>

                <div className="py-4">
                  <Text
                    type="number-big"
                    value={
                      profile?.isBalanceVisible
                        ? `NGN ${FormatNumber(walletDetails?.walletBalance ?? 0)}`
                        : "****"
                    }
                  />
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <button
                    onClick={() => {
                      setShowCryptoModal(true);
                    }}
                    className="flex items-center border cursor-pointer border-[#E9EBF8] p-1 rounded-xl pr-4"
                  >
                    <Image src={giftCardActionIcon} alt="" />
                    <p className="text-[#444D5A] font-grotesk-bold text-base">
                      Trade Giftcard
                    </p>
                  </button>
                  <button
                    onClick={() => {
                      setDepositModal(true);
                    }}
                    className="flex items-center border gap-2 pl-2  border-[#E9EBF8] p-1 rounded-xl pr-4"
                  >
                    <Image src={cryptoActionIcon} alt="" />
                    <p className="text-[#444D5A] cursor-pointer font-grotesk-bold text-base">
                      Trade Crypto
                    </p>
                  </button>
                  <button
                    onClick={() => {
                      setShowWithdrawModal(true);
                    }}
                    className="flex items-center gap-2 pl-2 cursor-pointer border border-[#E9EBF8] p-1 rounded-xl pr-4"
                  >
                    <Image src={withdrawActionIcon} alt="" />
                    <p className="text-[#444D5A] font-grotesk-bold text-base">
                      Withdraw
                    </p>
                  </button>
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
            <div className="bg-white min-h-[80vh] rounded-3xl p-4 py-8">
              {transactionLoading ? (
                <p className="text-center my-4">loading...</p>
              ) : transactions && transactions.length ? (
                <>
                  <Text type="main-text-regular" value="Transaction history" />
                  {transactions.map((item) => {
                    return (
                      <div key={item.id} className="mt-3 rounded-lg ">
                        <DashboardTransactionWrapper transaction={item} />
                      </div>
                    );
                  })}
                </>
              ) : (
                <p className="text-center my-4">No transactions found</p>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <DashboardMobile
        transactions={transactions}
        walletDetails={walletDetails}
      />
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
