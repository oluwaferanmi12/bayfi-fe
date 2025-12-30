"use client";
import { DashboardHeader } from "@/components/mobile-components/headers/dashboard-header";
import { MobileDashboardAdvertise } from "@/components/mobile-components/wrappers/mobile-dashboard-advertise";
import { MobileTransactionWrapper } from "@/components/mobile-components/wrappers/mobile-dashboard-transaction";
import { MobileDashboardService } from "@/components/mobile-components/wrappers/mobile-services";
import { MobileWalletWrapper } from "@/components/mobile-components/wrappers/mobile-wallet-wrapper";
import { MobileWrapper } from "@/components/mobile-components/wrappers/mobile-wrapper";
import { Transaction, Wallet } from "@/types";
import { KycWrapper } from "../mobile-components/wrappers/kyc-wrapper";
import { useRouter } from "next/navigation";

export const DashboardMobile = ({
  transactions,
  walletDetails,
}: {
  transactions?: Transaction[];
  walletDetails?: Wallet;
}) => {
  const router = useRouter();
  return (
    <>
      <MobileWrapper>
        <DashboardHeader />
        <KycWrapper
          clickAction={() => {
            router.push("/complete-kyc");
          }}
        />
        <MobileWalletWrapper walletDetails={walletDetails} />
        <MobileDashboardService />
        <MobileDashboardAdvertise />
        <MobileTransactionWrapper transactions={transactions} />
      </MobileWrapper>
    </>
  );
};
