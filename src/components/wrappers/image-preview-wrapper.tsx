import { ReactNode, useEffect } from "react";

export const ImagePreviewWrapper = ({
  children,
  setShow,
  show,
  cleanUpFunc,
}: {
  children: ReactNode;
  setShow: () => void;
  show: boolean;
  cleanUpFunc: () => void;
}) => {
  
  return (
    <>
      {show && (
        <section
          onClick={() => {
            setShow()
          }}
          className="h-screen bg-black/50 z-50 flex items-center justify-center w-screen fixed top-0 right-0 left-0 bottom-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full"
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
};
