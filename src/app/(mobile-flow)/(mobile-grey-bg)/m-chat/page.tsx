"use client";

import { FixedMobileHeader } from "@/components/mobile-components/headers/fixed-mobile-header";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import { MobileChatListCard } from "@/components/mobile-components/wrappers/mobile-chat-list-card";
import messageIcon from "@/assets/svg/chat-dark-icon.svg";
import { useState } from "react";
import Image from "next/image";
import { useGetActivChat } from "@/hooks/query";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/loader/general-loader";
import { GenericEmptyState } from "@/components/UIs/empty-state/generic-empty-state";
import { ComingSoonModal } from "@/components/modals/coming-soon-modal";

export default function MobileChatList() {
  const [activeTab, setActiveTab] = useState<"chat" | "support">("chat");
  const [showSupportComingSoon, setShowSupportComingSoon] = useState(false);
  const { data, isPending } = useGetActivChat();
  const router = useRouter();
  return (
    <>
      <ComingSoonModal
        open={showSupportComingSoon}
        onClose={() => setShowSupportComingSoon(false)}
        title="Support"
      />
      <MobileNav />
      <FixedMobileHeader
        header="Chat & Support"
        subText="Giftcard chats & Supports"
      />
      <div className="mt-20 pb-20">
        <div className="w-full flex items-center mb-4">
          <div
            onClick={() => {
              setActiveTab("chat");
            }}
            className={` ${activeTab === "chat" && "border-b border-[#67811A] bg-[#EFF8D5]"} gap-2 items-center  flex justify-center py-2  w-full`}
          >
            {activeTab === "chat" && <Image src={messageIcon} alt="" />}
            <p className="text-lg font-grotesk-medium">Chat</p>
          </div>
          <div
            onClick={() => {
              setShowSupportComingSoon(true);
            }}
            className={`flex gap-2 items-center justify-center py-2 w-full`}
          >
            {activeTab === "support" && <Image src={messageIcon} alt="" />}
            <p className="text-lg font-grotesk-medium">Support</p>
          </div>
        </div>
        {isPending ? (
          <Loader />
        ) : data?.length ? (
          <>
            {data.map((item) => (
              <div
                onClick={() => {
                  router.push(`/m-chat/chat?id=${item.id}`);
                }}
                key={item.id}
              >
                <MobileChatListCard chat={item} key={item.id} />
              </div>
            ))}
          </>
        ) : (
          <GenericEmptyState />
        )}
      </div>
    </>
  );
}
