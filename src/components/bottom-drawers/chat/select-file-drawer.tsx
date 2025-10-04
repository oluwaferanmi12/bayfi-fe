import { BottomDrawer } from "../bottom-drawer";
import uploadIcon from "@/assets/svg/upload-icon.svg";
import Image from "next/image";
import arrowUp from "@/assets/svg/arrow-up.svg";
import { Button } from "@/components/buttons";

export const ChatSelecteFiles = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <BottomDrawer
      showNudge
      hideHeader
      title=""
      height="medium"
      onClose={handleClose}
      open={open}
    >
      <div className="flex items-center flex-col justify-between h-full min-h-full w-full border border-[red]">
        <div className="bg-[#F3F3FA] flex items-center w-full  p-4 rounded-xl justify-between">
          <div className="flex items-center gap-2">
            <Image src={uploadIcon} alt="" />
            <p className="text-[#0F1121] text-base font-grotesk-medium">
              Upload 5 files
            </p>
          </div>

          <span>
            <Image src={arrowUp} alt="" />
          </span>
        </div>
        <div className="flex-1 h-[200px]">

        </div>
        <div className="w-full">
          <Button
            loading={false}
            fullWidth
            text="Upload images"
            type="bgGreen"
          />
        </div>
      </div>
    </BottomDrawer>
  );
};
