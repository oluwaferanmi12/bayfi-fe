import { ServiceContentInterface } from "@/interfaces/interfaces-ui";
import Image from "next/image";

export const DesktopServiceCard = ({
  item,
}: {
  item: ServiceContentInterface;
}) => {
  return (
    <>
      <div
        className="w-full min-h-[250px] serviceCardBg rounded-xl mb-4 p-4 flex items-center justify-between"
        style={{ backgroundColor: item.bgColor }}
      >
        {/* <Image src={item.bgImage} alt="" /> */}
        <div>
          <p className="text-2xl text-bayfi-black-50 font-grotesk-semi-bold">{item.text}</p>
          <p className="text-bayfi-black-50 mt-2 text-base  font-grotesk-medium">{item.subText}</p>
        </div>
        <div>
          <Image src={item.sideIcon} alt="" />
        </div>
      </div>
    </>
  );
};
