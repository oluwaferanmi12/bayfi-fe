import { AnimatePresence, motion } from "framer-motion";
import { CustomBottomDrawer } from "../custom-bottom-drawer";
import { ImagePreviewWrapper } from "@/components/wrappers/image-preview-wrapper";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import binIcon from "@/assets/svg/bin-icon.svg";
import { useDeleteImage } from "@/hooks/query";

export const UploadedFilesDrawer = ({
  open,
  handleClose,
  imageUrls,
  setImageUrl,
}: {
  open: boolean;
  handleClose: () => void;
  imageUrls: string[];
  setImageUrl: Dispatch<SetStateAction<string[]>>;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showActiveImage, setShowActiveImage] = useState(false);
  const [deleteIndexSelected, setDeletedIndexSelected] = useState(-1);
  const { mutate, isPending } = useDeleteImage(
    () => {
      setDeletedIndexSelected(-1);
      setImageUrl((prev) => {
        const newArray = [...prev];
        newArray.splice(deleteIndexSelected, 1);
        return newArray;
      });
    },
    () => {
      setDeletedIndexSelected(-1);
    }
  );

  useEffect(() => {
    if (selectedIndex >= 0) {
      setShowActiveImage(true);
    }
  }, [selectedIndex]);

  return (
    <>
      <ImagePreviewWrapper
        cleanUpFunc={() => {
          setSelectedIndex(-1);
        }}
        show={showActiveImage}
        setShow={() => {
          setShowActiveImage(false);
          setSelectedIndex(-1);
        }}
      >
        <div className="w-[90%] min-w-[90%] h-[200px] mx-auto ">
          <img
            src={imageUrls[selectedIndex]}
            alt=""
            className="object-cover h-full w-full rounded-lg min-w-full "
          />
        </div>
      </ImagePreviewWrapper>
      <CustomBottomDrawer
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div className="flex flex-col h-full min-h-full w-full">
          <div className="flex-1 min-h-0 overflow-y-auto p-2  mt-3">
            <AnimatePresence>
              <motion.div
                key="images-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Row gutter={12} className="w-full">
                  {imageUrls.map((item, index) => (
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
                      <div
                        className={`${deleteIndexSelected === index && "opacity-50"} flex items-center justify-between mt-2`}
                      >
                        <button
                          disabled={deleteIndexSelected === index}
                          onClick={() => {
                            setDeletedIndexSelected(index);
                            mutate(imageUrls[index]);
                            // handleRemove(index);
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
            </AnimatePresence>
          </div>
        </div>
      </CustomBottomDrawer>
    </>
  );
};
