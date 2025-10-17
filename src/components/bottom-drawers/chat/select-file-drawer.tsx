import { BottomDrawer } from "../bottom-drawer";
import uploadIcon from "@/assets/svg/upload-icon.svg";
import Image from "next/image";
import arrowUp from "@/assets/svg/arrow-up.svg";
import { Button } from "@/components/buttons";
import { Col, Row } from "antd";

export const ChatSelecteFiles = ({
  open,
  handleClose,
  previewUrls,
}: {
  open: boolean;
  handleClose: () => void;
  previewUrls: string[];
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
      <div className="flex flex-col h-full min-h-0 w-full">
        {/* Header / summary */}
        <div className=" pt-4">
          <div className="bg-[#F3F3FA] flex items-center w-full p-4 rounded-xl justify-between">
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
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto  border border-[red]">
          <Row gutter={12} className="w-full mt-3">
            {previewUrls.map((item, index) => (
              <Col key={index} xs={12}>
                <div className="w-full h-[100px] relative rounded-lg overflow-hidden">
                  <Image fill src={item} alt="" className="object-cover" />
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* FOOTER (sticky) */}
        <div className="p-4 border-t">
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
