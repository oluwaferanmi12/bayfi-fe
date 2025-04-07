import copyIcon from "@/assets/svg/copyIcon.svg";
import Image from "next/image";

export const CopyButton = () => {
  return (
    <button className="bg-bayfi-green-50 flex items-center gap-2 border border-bayfi-green-500 p-1 px-4 rounded-lg">
      <Image src={copyIcon} alt="" />
      <p className="text-bayfi-black-800 font-grotesk-semi-bold">Copy</p>
    </button>
  );
};
