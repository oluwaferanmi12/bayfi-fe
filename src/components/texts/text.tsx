import { TextInterface } from "@/interfaces/interfaces";

export const Text = ({ value, type }: TextInterface) => {
  return (
    <p
      className={`${type === "header-32" ? "text-4xl font-grotesk-semi-bold text-black" : type === "input-text" ? "text-base text-text-color-500 font-grotesk-semi-bold" : type === "header-subtext" ? "text-lg text-text-color-500 font-grotesk-semi-bold" : type === "text-plain-18" ? "font-grotesk-medium text-lg text-text-color-500" : type === "text-plain-16" ? "font-grotesk-medium text-base text-text-color-500" : type === "text-plain-dark-18" ? "font-grotesk-semi-bold text-lg text-black" : type === "text-plain-dark-16" ? "font-grotesk-semi-bold text-base text-bayfi-black-900" : type === "nav-text" ? "text-[#344054] font-grotesk-semi-bold text-lg" : type === "text-green-bold" ? 'text-bayfi-green-500 text-lg font-grotesk-bold' : type === "number-big" ? "font-grotesk-bold text-4xl text-black" : ""}`}
    >
      {value}
    </p>
  );
};
