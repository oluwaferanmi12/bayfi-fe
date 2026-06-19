"use client";
import bettingIcon from "@/assets/svg/bettingMobileIcon.svg";
import airtimeIcon from "@/assets/svg/airtimeMobileIcon.svg";
import giftCardIcon from "@/assets/svg/giftCardMobileIcon.svg";
import otherIcon from "@/assets/svg/othersMobileIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiftcardBottomDrawer } from "@/components/side-drawers/services/giftcard-bottom-drawer";
import { useState } from "react";
import { ComingSoonWrapper } from "@/components/modals/coming-soon-modal";

export const MobileDashboardService = () => {
  const router = useRouter();
  const [showGiftcardDrawer, setShowGiftcardDrawer] = useState(false);
  return (
    <>
      <GiftcardBottomDrawer
        handleClose={() => {
          setShowGiftcardDrawer(false);
        }}
        open={showGiftcardDrawer}
      />
      <div className="my-3">
        <p className="text-bayfi-black-900 text-lg font-grotesk-semi-bold">
          Other services
        </p>
        <div className="my-4 flex items-center justify-between">
          <div
            onClick={() => {
              router.push("/giftcard");
            }}
            className="flex flex-col cursor-pointer items-center justify-center gap-2"
          >
            <Image src={giftCardIcon} alt="" />
            <p className="text-bayfi-black-500 font-grotesk-semi-bold text-sm">
              Gift card
            </p>
          </div>
          <ComingSoonWrapper title="Airtime">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={airtimeIcon} alt="" />
              <p className="text-bayfi-black-500 font-grotesk-semi-bold text-sm">
                Airtime
              </p>
            </div>
          </ComingSoonWrapper>
          <ComingSoonWrapper title="Betting">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={bettingIcon} alt="" />
              <p className="text-bayfi-black-500 font-grotesk-semi-bold text-sm">
                Betting
              </p>
            </div>
          </ComingSoonWrapper>
          <Link href={"/other-services"}>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={otherIcon} alt="" />
              <p className="text-bayfi-black-500 font-grotesk-semi-bold text-sm">
                Others
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
