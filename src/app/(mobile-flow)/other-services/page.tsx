"use client"

import { FixedMobileHeader } from "@/components/mobile-components/headers/fixed-mobile-header";
import { OtherServiceWrapper } from "@/components/mobile-components/wrappers/other-service-wrapper";
import otherGiftCardIcon from "@/assets/svg/other-giftcard-icon.svg";
import bettingIcon from "@/assets/svg/betting-black-icon.svg";
import airtimeIcon from "@/assets/svg/black-airtime-icon.svg";
import mobileIcon from "@/assets/svg/mobile-icon-black.svg";
import cableBlackIcon from "@/assets/svg/cable-tv-icon-black.svg";
import { DashboardMobile } from "@/components/mobile-screens/dashboard-mobile";

const OtherServices = () => {
  return (
    <>
      <FixedMobileHeader
        header={"Other Services"}
        subText="Pay bill, Buy airtime and others"
      />
      <div className="mt-20">
        <OtherServiceWrapper
          action={() => {}}
          icon={otherGiftCardIcon}
          text="Buy Gift Card"
        />
        <OtherServiceWrapper
          action={() => {}}
          icon={bettingIcon}
          text="Betting "
        />
        <OtherServiceWrapper
          action={() => {}}
          icon={airtimeIcon}
          text="Buy Airtime "
        />

        <OtherServiceWrapper
          action={() => {}}
          icon={mobileIcon}
          text="Mobile Data "
        />

        <OtherServiceWrapper
          action={() => {}}
          icon={cableBlackIcon}
          text="Cable TV"
        />
      </div>
    </>
  );
};

export default OtherServices;
