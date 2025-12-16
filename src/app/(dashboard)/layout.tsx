"use client";

import { Row, Col } from "antd";
import logo from "@/assets/svg/logoBySide.svg";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/texts/text";
import bellIcon from "@/assets/svg/bellIcon.svg";
import profilePlaceholder from "@/assets/svg/profile-default-avatar.svg";
import homeIcon from "@/assets/svg/homeIcon.svg";
import { GPageWrapper } from "@/components/wrappers/GPageWrapper";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import { usePathname, useRouter } from "next/navigation";
import floatMessageIcon from "@/assets/svg/floatint-message-icon.svg";
import { DesktopChatListDrawer } from "@/components/side-drawers/chat/desktop-chat-list-drawer";
import { useEffect, useState } from "react";
import { DesktopChatSideDrawer } from "@/components/side-drawers/chat/desktop-chat-page";
import { useFetchProfile } from "@/hooks/query/useProfile";
import { useProfileStore } from "@/store/userProfileStore";
import { SetPinModal } from "@/components/modals/pin/set-pin-modal";
import { useGetWallet } from "@/hooks/query";
import { useWalletStore } from "@/store/walletStore";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [showChatList, setShowChatList] = useState(false);
  const [showChatPage, setShowChatPage] = useState(false);
  const [activeChatId, setActiveChatId] = useState<null | number>(null);
  const { data: profileDetails } = useFetchProfile();
  const [showPinModal, setShowPinModal] = useState(false);
  const { setProfile } = useProfileStore();
  const { setWallet } = useWalletStore();
  const { data: walletDetails, isPending: walletDetailsLoading } =
    useGetWallet();
  const onChatSelected = (id: number) => {
    setActiveChatId(id);
    setShowChatList(false);
    setShowChatPage(true);
  };
  const navLinks = [
    {
      navTitle: "Dashboard",
      navIcon: homeIcon,
      url: "/dashboard",
    },
    {
      navTitle: "Services",
      navIcon: homeIcon,
      url: "/services",
    },
    {
      navTitle: "Transactions",
      navIcon: homeIcon,
      url: "/transaction",
    },
    {
      navTitle: "Support",
      navIcon: homeIcon,
      url: "/support",
    },
  ];

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

  return (
    <>
      <SetPinModal
        open={showPinModal}
        close={() => {
          setShowPinModal(false);
        }}
      />
      {showChatList && (
        <DesktopChatListDrawer
          open={showChatList}
          handleClose={() => {
            setShowChatList(false);
          }}
          onSelect={onChatSelected}
        />
      )}

      {showChatPage && (
        <DesktopChatSideDrawer
          open={showChatPage}
          handleClose={() => {
            setShowChatPage(false);
            setShowChatList(true);
          }}
          chatId={String(activeChatId)}
        />
      )}

      <button
        onClick={() => {
          setShowChatList(true);
        }}
        className="fixed cursor-pointer right-6 bottom-6 pointer-events-auto"
      >
        <div className="bg-bayfi-green-500 p-3 rounded-full shadow">
          <Image src={floatMessageIcon} alt="Chat" />
        </div>
      </button>
      <div className="h-full min-h-screen w-full lg:pt-28 bg-[#F6F4F0]">
        <div className="fixed hidden lg:block  top-0 w-full z-50 bg-white border border-[#EAECF0] py-4">
          <Row justify={"center"} align={"middle"}>
            <Col xs={22}>
              <div className="flex justify-between items-center">
                <Image
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
                  src={logo}
                  alt=""
                />
                <div className="flex items-center gap-8">
                  {navLinks.map((nav) => (
                    <Link key={nav.navTitle} href={nav.url}>
                      <span
                        className={` ${pathname === nav.url ? "px-4 py-2 bg-black rounded-lg" : ""} flex items-center gap-2`}
                      >
                        <Image src={nav.navIcon} alt="" />
                        <Text
                          value={nav.navTitle}
                          type={
                            pathname === nav.url
                              ? "text-green-bold"
                              : "nav-text"
                          }
                        />
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Image className="cursor-pointer" src={bellIcon} alt="" />
                  <Image
                    width={40}
                    height={40}
                    className="cursor-pointer aspect-square rounded-full object-cover"
                    onClick={() => {
                      router.push("/profile");
                    }}
                    src={
                      profileDetails?.avatar
                        ? profileDetails.avatar
                        : profilePlaceholder
                    }
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <MobileNav />
        <GPageWrapper>{children}</GPageWrapper>
      </div>
    </>
  );
}
