import { Drawer } from "antd";
import { ReactNode } from "react";
import Image from "next/image";
import { Text } from "@/components/texts/text";
import cancelIcon from "@/assets/svg/cancelIcon.svg";
import rectangularNudge from "@/assets/svg/modal-horizontal-bar.svg";
import { useBottomDrawerSize } from "@/hooks/custom/others/useBottomDrawerSize";

export const BottomDrawer = ({
  onClose,
  open,
  children,
  title,
  height,
  hideHeader,
  showNudge,
  footer,
}: {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  title: string;
  height?: "short" | "medium" | "full";
  hideHeader?: boolean;
  showNudge?: boolean;
  footer?: ReactNode;
}) => {
  const size = useBottomDrawerSize(open, height);
  return (
    <Drawer
      destroyOnHidden={true}
      closeIcon={false}
      onClose={onClose}
      footer={footer}
      open={open}
      placement="bottom"
      size={size}
    >
      {showNudge && (
        <div className="flex items-center justify-center">
          <Image src={rectangularNudge} alt="" />
        </div>
      )}
      {!hideHeader && (
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
      )}

      <div className="py-2">{children}</div>
    </Drawer>
  );
};
