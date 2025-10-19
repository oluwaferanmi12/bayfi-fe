import { ReactNode, useEffect } from "react";

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
          className="h-screen bg-black/50 z-50 flex items-center justify-center w-screen fixed top-0 right-0 left-0 bottom-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full"
          >
            <div className="w-[90%] min-w-[90%] h-[200px] mx-auto ">
              <img
                src={imageUrl}
                alt=""
                className="object-cover h-full w-full rounded-lg min-w-full "
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
