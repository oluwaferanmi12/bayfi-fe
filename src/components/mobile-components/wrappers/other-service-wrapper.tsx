"use client";
import arrowRight from "@/assets/svg/arrowRight.svg";
import Image from "next/image";
import { useState } from "react";
import { ComingSoonModal } from "@/components/modals/coming-soon-modal";

export const OtherServiceWrapper = ({
  icon,
  text,
  action,
  showComingSoon,
}: {
  icon: string;
  text: string;
  action: () => void;
  showComingSoon?: boolean;
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ComingSoonModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={text.trim()}
      />
      <div
        onClick={showComingSoon ? () => setModalOpen(true) : action}
        style={{ border: "0.5px solid #EBF1FF" }}
        className="border cursor-pointer bg-white mb-3 relative rounded-lg p-4 py-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span>
            <Image src={icon} alt="" />
          </span>
          <p className="text-text-color-900 font-grotesk-medium text-base">
            {text}
          </p>
        </div>
        <div>
          <Image src={arrowRight} alt="" />
        </div>
      </div>
    </>
  );
};
