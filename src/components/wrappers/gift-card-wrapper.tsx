import Image from "next/image";

export const GiftCardWrapper = ({
  text,
  image,
  whiteBg,
  action,
}: {
  text: string;
  image: string;
  whiteBg?: boolean;
  action?: () => void;
}) => {
  return (
    <div
      onClick={action}
      className={`flex border cursor-pointer  border-[#EBF1FF] ${whiteBg ? "bg-white" : "bg-bayfi-grey-400"}  mb-3 items-center justify-between p-2 rounded-lg`}
    >
      <p className="text-sm text-text-color-900 font-grotesk-medium">{text}</p>
      <div>
        <Image src={image} alt="" />
      </div>
    </div>
  );
};
