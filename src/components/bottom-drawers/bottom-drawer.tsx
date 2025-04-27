import { Drawer } from "antd";
import { ReactNode } from "react";
import Image from "next/image";
import { Text } from "@/components/texts/text";
import cancelIcon from "@/assets/svg/cancelIcon.svg";

export const BottomDrawer = ({
  onClose,
  open,
  children,
  title,
  height,
}: {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
  height?: "short" | "medium" | "full";
}) => {
  return (
    <Drawer
      destroyOnClose={true}
      width={500}
      closeIcon={false}
      onClose={onClose}
      open={open}
      placement="bottom"
      height={
        height === "short"
          ? "50%"
          : height === "medium"
            ? "70%"
            : height === "full"
              ? "100%"
              : "50%"
      }
    >
      <div
        className={
          "flex gap-2 items-center  border-b border-bayfi-grey-500 py-2 justify-between"
        }
      >
        <Text value={title} type="main-text-regular" />
        <Image
          src={cancelIcon}
          alt=""
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="py-2">{children}</div>
    </Drawer>
  );
};
