import { DashboardHeader } from "@/components/mobile-components/headers/dashboard-header";
import { MobileDashboardAdvertise } from "@/components/mobile-components/wrappers/mobile-dashboard-advertise";
import { MobileTransactionWrapper } from "@/components/mobile-components/wrappers/mobile-dashboard-transaction";
import { MobileDashboardService } from "@/components/mobile-components/wrappers/mobile-services";
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
        <MobileDashboardService />
        <MobileDashboardAdvertise />
        <MobileTransactionWrapper />
      </MobileWrapper>
    </>
  );
};
