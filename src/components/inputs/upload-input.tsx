import cloudAdd from "@/assets/svg/cloudAdd.svg";
import Image from "next/image";
import { Text } from "@/components/texts/text";

export const UploadInput = ({
  label,
  title,
}: {
  label: string;
  title: string;
}) => {
  return (
    <div className="mb-4">
      <Text type="input-text" value={label} />
      <div className="mt-1 bg-bayfi-grey-400 font-grotesk-medium placeholder:font-grotesk-regular text-base rounded-lg py-6 px-9 min-w-full outline-none border border-bayfi-grey-600 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <span>
            <Image src={cloudAdd} alt="" />
          </span>
          <div className="mt-1">
            <Text value={title} type={"input-text"} />
            
          </div>
        </div>
      </div>
    </div>
  );
};
