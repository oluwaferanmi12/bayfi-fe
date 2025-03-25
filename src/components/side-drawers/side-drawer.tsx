import React, { ReactNode } from "react";
import { Drawer } from "antd";
import cancelIcon from "@/assets/svg/cancelIcon.svg";
import { Text } from "@/components/texts/text";
import Image from "next/image";

export const SideDrawer = ({
  onClose,
  open,
  children,
  title,
}: {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
}) => {
  return (
    <Drawer
      destroyOnClose={true}
      width={500}
      closeIcon={false}
      onClose={onClose}
      open={open}
    >
      <div className={"flex gap-2 items-center  border-b border-bayfi-grey-500 py-2 justify-between"}>
        <Text value={title} type="main-text-regular" />
        <Image src={cancelIcon} alt="" className="cursor-pointer" onClick={onClose} />
      </div>

      <div className="py-2">{children}</div>
    </Drawer>
  );
};
