import { ReactNode, useEffect } from "react";
import cancelIcon from "@/assets/svg/cancelIcon.svg";
import Image from "next/image";

export const ImagePreviewWrapper = ({
  setShow,
  show,
  imageUrl,
}: {
  setShow: () => void;
  show: boolean;
  imageUrl?: string;
}) => {
  return (
    <>
      {show && (
        <section
          onClick={() => {
            setShow();
          }}
          className="h-screen bg-black/50 z-30 flex items-center justify-center w-screen fixed top-0 right-0 left-0 bottom-0"
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              setShow();
            }}
            className="absolute cursor-pointer bg-white p-4 rounded-lg top-4 right-4 z-50"
          >
            <Image src={cancelIcon} alt="" />
          </span>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[90%] min-w-[90%] lg:h-4/5 lg:min-h-4/5 lg:w-4/5 lg:min-w-4/5 mx-auto "
          >
            <img
              src={imageUrl}
              alt=""
              className="object-contain h-full w-full rounded-lg min-w-full "
            />
          </div>
        </section>
      )}
    </>
  );
};
