import { TextInterface } from "@/interfaces/interfaces";

export const Text = ({ value, type, blockType }: TextInterface) => {
  return (
    <span
      className={`${type === "header-32" ? "text-4xl font-grotesk-semi-bold text-black" : type === "input-text" ? "text-base text-text-color-500 font-grotesk-semi-bold" : type === "header-subtext" ? "text-lg text-text-color-500 font-grotesk-semi-bold" : type === "text-plain-18" ? "font-grotesk-medium text-lg text-text-color-500" : type === "text-plain-16" ? "font-grotesk-medium text-base text-text-color-500" : type === "text-plain-dark-18" ? "font-grotesk-semi-bold text-lg text-black" : type === "text-plain-dark-16" ? "font-grotesk-semi-bold text-base text-bayfi-black-900" : type === "nav-text" ? "text-[#344054] font-grotesk-semi-bold text-lg" : type === "text-green-bold" ? "text-bayfi-green-500 text-lg font-grotesk-bold" : type === "number-big" ? "font-grotesk-bold text-4xl text-black" : type === "header-text-20" ? "text-lg text-black font-grotesk-medium" : type === "main-text-bold" ? "text-[#101828] text-2xl font-grotesk-bold" : type === "main-text-regular" ? "text-[#101828] text-2xl font-grotesk-semi-bold" : type === "text-small-light" ? "text-text-color-800 text-base font-grotesk-regular" : type == "text-plain-green-18" ? "font-grotesk-semi-bold text-lg text-bayfi-green-500" : type === "text-small-white" ? "text-text-color-50 text-base font-grotesk-regular" : type === "header-white-32" ? "text-white font-grotesk-medium text-3xl" : type === "header-dark-light-32" ? "text-[#74787A] text-3xl font-grotesk-medium" : type === "number-small-white" ? "text-bayfi-green-50 font-grotesk-bold text-3xl" : type === "text-green-24" ? "text-2xl text-bayfi-green-500 font-grotesk-bold" : type === "header-text-white-20" ? "text-lg text-white font-grotesk-medium" : type === "header-text-white-bold-20" ? "text-lg text-white font-grotesk-bold" : type === "text-small-green" ? "text-bayfi-green-200 text-base font-grotesk-regular" : ""} ${blockType && "block"} `}
    >
      {value}
    </span>
  );
};
