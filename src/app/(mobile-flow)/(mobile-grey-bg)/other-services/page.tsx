"use client";

import { FixedMobileHeader } from "@/components/mobile-components/headers/fixed-mobile-header";
import { OtherServiceWrapper } from "@/components/mobile-components/wrappers/other-service-wrapper";
import otherGiftCardIcon from "@/assets/svg/other-giftcard-icon.svg";
import bettingIcon from "@/assets/svg/betting-black-icon.svg";
import airtimeIcon from "@/assets/svg/black-airtime-icon.svg";
import mobileIcon from "@/assets/svg/mobile-icon-black.svg";
import cableBlackIcon from "@/assets/svg/cable-tv-icon-black.svg";
import { DashboardMobile } from "@/components/mobile-screens/dashboard-mobile";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import { useRouter } from "next/navigation";

const OtherServices = () => {
  const router = useRouter();
  return (
    <>
      <MobileNav />
      <FixedMobileHeader
        header={"Other Services"}
        subText="Pay bill, Buy airtime and others"
      />
      <div className="mt-20">
        <OtherServiceWrapper
          action={() => {
            router.push("/giftcard");
          }}
          icon={otherGiftCardIcon}
          text="Sell Gift Card"
        />
        <OtherServiceWrapper
          action={() => {
            // router.push("/betting");
          }}
          showComingSoon
          icon={bettingIcon}
          text="Betting "
        />
        <OtherServiceWrapper
          action={() => {
            // router.push("/buy-airtime");
          }}
          showComingSoon
          icon={airtimeIcon}
          text="Buy Airtime "
        />

        <OtherServiceWrapper
          action={() => {
            // router.push("/buy-data");
          }}
          showComingSoon
          icon={mobileIcon}
          text="Mobile Data "
        />

        <OtherServiceWrapper
          action={() => {
            // router.push("/buy-cable");
          }}
          showComingSoon
          icon={cableBlackIcon}
          text="Cable TV"
        />
      </div>
    </>
  );
};

export default OtherServices;
