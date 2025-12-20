import { Modal } from "antd";
import { ReactNode } from "react";
import modalIcon from "@/assets/svg/generic-modal-icon.svg";
import Image from "next/image";
import cancelIcon from "@/assets/svg/cancelIcon.svg";

export const ModalWrapper = ({
  modalActive,
  onClose,
  children,
  icon,
  width,
  hideHeader,
}: {
  modalActive: boolean;
  onClose: () => void;
  children: ReactNode;
  icon?: string;
  width?: number;
  hideHeader?: boolean;
}) => {
  return (
    <>
      <Modal
        zIndex={2000}
        footer={false}
        closeIcon={false}
        onCancel={onClose}
        open={modalActive}
        {...(width ? { width: `${width}px` } : {})}
      >
        {!hideHeader && (
          <div className="flex items-center justify-between mb-3">
            <Image src={icon ?? modalIcon} alt="" />
            <Image
              src={cancelIcon}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                onClose();
              }}
            />
          </div>
        )}

        {children}
      </Modal>
    </>
  );
};
