import arrowRight from "@/assets/svg/arrowRight.svg";
import { ComingSoon } from "@/components/wrappers/coming-soon";
import Image from "next/image";

export const OtherServiceWrapper = ({
  icon,
  text,
  action,
  showComingSoon,
}: {
  icon: string;
  text: string;
  action: () => void;
  showComingSoon?: boolean;
}) => {
  return (
    <div
      onClick={action}
      style={{ border: "0.5px solid #EBF1FF" }}
      className="border cursor-pointer bg-white mb-3 relative rounded-lg p-4 py-6 flex items-center justify-between"
    >
      {showComingSoon && <ComingSoon />}
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
