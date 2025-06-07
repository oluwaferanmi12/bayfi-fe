import arrowRight from "@/assets/svg/arrowRight.svg";
import Image from "next/image";

export const OtherServiceWrapper = ({
  icon,
  text,
  action,
}: {
  icon: string;
  text: string;
  action: () => void;
}) => {
  return (
    <div
      style={{ border: "0.5px solid #EBF1FF" }}
      className="border bg-white mb-3 rounded-lg p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <span>
          <Image src={icon} alt="" />
        </span>
        <p className="text-text-color-900  font-grotesk-medium text-base">
          {text}
        </p>
      </div>

      <div>
        <Image src={arrowRight} alt="" />
      </div>
    </div>
  );
};
