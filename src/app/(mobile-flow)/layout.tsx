"use client";
import mobileFlowIcon from "@/assets/svg/mobileFlowIcon.svg";
import { useFetchProfile, useGetWallet } from "@/hooks/query";
import { useProfileStore } from "@/store/userProfileStore";
import { useWalletStore } from "@/store/walletStore";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setProfile } = useProfileStore();
  const { setWallet } = useWalletStore();
  const { data: profileDetails } = useFetchProfile();
  const { data: walletDetails, isPending: walletDetailsLoading } =
    useGetWallet();
  const [showPinModal, setShowPinModal] = useState(false);
  useEffect(() => {
    if (profileDetails) {
      setProfile(profileDetails);
    }
    if (profileDetails && !profileDetails?.isPinCreated) {
      setShowPinModal(true);
    }
  }, [profileDetails]);

  useEffect(() => {
    if (!walletDetailsLoading && walletDetails) {
      setWallet(walletDetails);
    }
  }, [walletDetails, walletDetailsLoading]);
  return <div>{children}</div>;
}
