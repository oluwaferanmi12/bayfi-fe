import uploadIcon from "@/assets/svg/upload-icon.svg";
import Image from "next/image";
import arrowUp from "@/assets/svg/arrow-up.svg";
import { Button } from "@/components/buttons";
import { Col, Row } from "antd";
import { CustomBottomDrawer } from "../custom-bottom-drawer";
import binIcon from "@/assets/svg/bin-icon.svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImagePreviewWrapper } from "@/components/wrappers/image-preview-wrapper";
import { toast } from "sonner";

export const ChatSelecteFiles = ({
  open,
  handleClose,
  previewUrls,
  selectedFiles,
  handleRemove,
  uploadLoading,
  uploadImage,
  convertedImageUrls,
}: {
  open: boolean;
  handleClose: () => void;
  previewUrls: string[];
  selectedFiles: File[];
  handleRemove: (idx: number) => void;
  uploadLoading: boolean;
  uploadImage: () => Promise<string[]>;
  convertedImageUrls: string[];
}) => {
  const [showImages, setShowImages] = useState(true);
  const [showActiveImage, setShowActiveImage] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const MAX_FILE_TO_UPLOAD = 4;

  useEffect(() => {
    if (selectedIndex >= 0) {
      setShowActiveImage(true);
    }
  }, [selectedIndex]);
  return (
    <>
      <ImagePreviewWrapper
        show={showActiveImage}
        setShow={() => {
          setShowActiveImage(false);
          setSelectedIndex(-1);
        }}
        imageUrl={previewUrls[selectedIndex]}
      />
      <CustomBottomDrawer
        open={open}
        onClose={() => {
          handleClose();
        }}
        height={showImages ? "medium" : "small"}
        portalTarget={"inline"}
        stickMoreToBottom
      >
        <div className="flex flex-col h-full min-h-full w-full">
          <div className="pt-4 px-4">
            <div className="bg-[#F3F3FA] flex  items-center w-full p-4 rounded-xl justify-between">
              <div className="flex items-center gap-2">
                <Image src={uploadIcon} alt="" />
                <p className="text-[#0F1121] text-base font-grotesk-medium">
                  Upload {previewUrls.length} file(s)
                </p>
              </div>
              <span
                className={`${!showImages && "rotate-180"}`}
                onClick={() => {
                  setShowImages((prev) => !prev);
                }}
              >
                <Image src={arrowUp} alt="" />
              </span>
            </div>
          </div>
          {previewUrls.length > 4 && (
            <div className="px-4">
              <p className="font-grotesk-medium text-[#EF4444] text-sm">
                Only a maximum of{" "}
                {MAX_FILE_TO_UPLOAD - convertedImageUrls.length} image(s) can be
                uploaded
              </p>
            </div>
          )}

          <div className="flex-1 min-h-0 overflow-y-auto p-4  mt-3">
            <AnimatePresence>
              {showImages && (
                <motion.div
                  key="images-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Row gutter={12} className="w-full">
                    {previewUrls.map((item, index) => (
                      <Col key={index} xs={12} className="mb-3">
                        <div
                          onClick={() => {
                            setSelectedIndex(index);
                          }}
                          className="w-full h-[100px]  aspect-square relative rounded-lg overflow-hidden"
                        >
                          <Image
                            fill
                            src={item}
                            alt=""
                            className="object-cover"
                          />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <p
                            title={selectedFiles[index].name}
                            className="text-[#0F1121] flex-1 truncate font-grotesk-semi-bold text-base"
                          >
                            {selectedFiles[index].name}
                          </p>
                          <button
                            onClick={() => {
                              handleRemove(index);
                            }}
                            className="shrink-0"
                          >
                            <Image src={binIcon} alt="" />
                          </button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="sticky bottom-0 left-0 right-0 p-2  bg-white">
            <Button
              action={async () => {
                if (
                  previewUrls.length >
                  MAX_FILE_TO_UPLOAD - convertedImageUrls.length
                ) {
                  toast.error(
                    `Only ${MAX_FILE_TO_UPLOAD - convertedImageUrls.length} image(s) are allowed`
                  );
                } else {
                  await uploadImage();
                }
              }}
              loading={uploadLoading}
              fullWidth
              text="Upload image(s)"
              type="bgGreen"
            />
          </div>
        </div>
      </CustomBottomDrawer>
    </>
  );
};
