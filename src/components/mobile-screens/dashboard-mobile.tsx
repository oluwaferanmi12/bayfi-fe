import { DashboardHeader } from "@/components/mobile-components/headers/dashboard-header";
import { MobileDashboardAdvertise } from "@/components/mobile-components/wrappers/mobile-dashboard-advertise";
import { MobileTransactionWrapper } from "@/components/mobile-components/wrappers/mobile-dashboard-transaction";
import { MobileDashboardService } from "@/components/mobile-components/wrappers/mobile-services";
import { MobileWalletWrapper } from "@/components/mobile-components/wrappers/mobile-wallet-wrapper";
import { MobileWrapper } from "@/components/mobile-components/wrappers/mobile-wrapper";
import { SupportWaiting } from "@/components/mobile-components/wrappers/support-waiting";
import { Transaction, Wallet } from "@/types";
import { KycWrapper } from "../mobile-components/wrappers/kyc-wrapper";

export const DashboardMobile = ({
  transactions,
  walletDetails,
}: {
  transactions?: Transaction[];
  walletDetails?: Wallet;
}) => {
  return (
    <>
      <MobileWrapper>
        <DashboardHeader />
        <KycWrapper clickAction={() => {}} />
        {/* <SupportWaiting /> */}
        <MobileWalletWrapper walletDetails={walletDetails} />
        <MobileDashboardService />
        <MobileDashboardAdvertise />
        <MobileTransactionWrapper transactions={transactions} />
      </MobileWrapper>
    </>
  );
};
