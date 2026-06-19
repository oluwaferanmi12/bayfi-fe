"use client";
import { useState } from "react";
import { Modal } from "antd";
import cancelIcon from "@/assets/svg/cancelIcon.svg";
import Image from "next/image";
import { Button } from "@/components/buttons";

export const ComingSoonModal = ({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
}) => {
  return (
    <Modal
      zIndex={2000}
      footer={false}
      closeIcon={false}
      onCancel={onClose}
      open={open}
      width={380}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[#888] font-grotesk-medium">
          {title ?? "coming soon"}
        </p>
        <Image
          src={cancelIcon}
          alt="close"
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex flex-col items-center text-center py-6 gap-4">
        <span className="text-5xl">🚀</span>

        <h2
          className="text-5xl font-black"
          style={{
            fontFamily: "Roboto, sans-serif",
            background: "linear-gradient(205.25deg, #5C77FA 0%, #BEDD3A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Coming Soon
        </h2>

        <p className="font-grotesk-semi-bold text-lg text-bayfi-black-300">
          This feature would be launched soon, sit tight while me make magic!
        </p>

        <div className="w-full mt-4">
          <Button
            text="Ok"
            type="bgGreen"
            fullWidth
            loading={false}
            action={onClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export const ComingSoonWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ComingSoonModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
      />
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        {children}
      </div>
    </>
  );
};
