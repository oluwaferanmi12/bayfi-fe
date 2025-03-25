import { ButtonSpinner } from "@/components/loader/button-spinner";
import { ButtonInterface } from "@/interfaces/interfaces";
import Image from "next/image";

export const Button = ({
  text,
  type = "bgGreen",
  loading,
  icon,
  iconPosition = "right",
  fullWidth,
  disabled,
  iconLeft,
  lessRounded,
}: ButtonInterface) => {
  return (
    <button
      style={{ opacity: disabled || loading ? 0.2 : 1 }}
      className={`flex  cursor-pointer font-grotesk-semi-bold pt-2 my-1 pb-3 px-12 items-center ${lessRounded ? "rounded-2xl" : "rounded-full"} justify-center ${fullWidth && "w-full"} ${type === "bgGreen" ? "bg-[#BEDD3A]" : type === "bgBlack" ? "bg-bayfi-black-500 text-white" : "bg-white text-bayfi-black-500"}`}
      disabled={loading || disabled}
    >
      {!loading ? (
        <div className="flex items-center gap-2">
          {icon && iconPosition === "left" ? (
            <Image src={icon} alt="" />
          ) : (
            iconPosition === "both" &&
            iconLeft && <Image src={iconLeft} alt="" />
          )}
          <p className="flex items-center text-base ">{text}</p>
          {icon && iconPosition === "right" ? (
            <Image src={icon} alt="" />
          ) : (
            iconPosition === "both" && icon && <Image src={icon} alt="" />
          )}
        </div>
      ) : (
        <ButtonSpinner spinnerColor={type} />
      )}
    </button>
  );
};
