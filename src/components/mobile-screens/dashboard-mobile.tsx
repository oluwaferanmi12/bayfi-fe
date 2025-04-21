import { DashboardHeader } from "@/components/mobile-components/headers/dashboard-header";
import { MobileWalletWrapper } from "@/components/mobile-components/wrappers/mobile-wallet-wrapper";
import { MobileWrapper } from "@/components/mobile-components/wrappers/mobile-wrapper";
import { SupportWaiting } from "@/components/mobile-components/wrappers/support-waiting";

export const DashboardMobile = () => {
  return (
    <>
      <MobileWrapper>
        <DashboardHeader />
        <SupportWaiting />
        <MobileWalletWrapper />
      </MobileWrapper>
    </>
  );
};
