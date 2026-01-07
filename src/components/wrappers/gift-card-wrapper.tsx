import Image from "next/image";
import placeholderImage from "@/assets/svg/placeholder.svg"

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
      <p className="text-base text-text-color-900 font-grotesk-medium">{text}</p>
      <div className="relative w-12.5 h-7.5">
        <Image className="object-cover" src={image ?? placeholderImage} fill alt="" />
      </div>
    </div>
  );
};
