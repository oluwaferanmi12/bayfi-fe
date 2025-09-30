import { ReactNode } from "react";

export const ImagePreviewWrapper = ({
  children,
  setShow,
  show,
}: {
  children: ReactNode;
  setShow: (val: boolean) => void;
  show: boolean;
}) => {
  return (
    <>
      {show && (
        <section
          onClick={() => {
            setShow(false);
          }}
          className="h-screen bg-black/50 z-30 flex items-center justify-center w-screen fixed top-0 right-0 left-0 bottom-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
};
