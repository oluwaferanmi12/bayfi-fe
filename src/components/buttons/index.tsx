import { ButtonSpinner } from "@/components/loader/button-spinner";
import { ButtonInterface } from "@/interfaces/interfaces";
import Image from "next/image";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick" | "disabled"
> &
  ButtonInterface;

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
  action,
  smallerType,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      style={{ opacity: disabled || loading ? 0.2 : 1 }}
      className={`flex  cursor-pointer font-grotesk-semi-bold  my-1   ${smallerType ? "px-4 py-2" : "px-12 pb-3 pt-2"}  items-center ${lessRounded ? "rounded-xl" : "rounded-full"} justify-center ${fullWidth && "w-full"} ${type === "bgGreen" ? "bg-[#BEDD3A] text-black" : type === "bgBlack" ? "bg-bayfi-black-500 text-white" : type === "bgGrey" ? "border border-[#D0D5DD] text-[#344054]" : type === "bgPlain" ? "bg-transparent text-[#344054]" : "bg-white text-bayfi-black-500"}`}
      disabled={loading || disabled}
      {...props}
    >
      {!loading ? (
        <div className="flex items-center gap-2">
          {icon && iconPosition === "left" ? (
            <Image src={icon} alt="" />
          ) : (
            iconPosition === "both" &&
            iconLeft && <Image src={iconLeft} alt="" />
          )}
          <p
            className={`flex items-center whitespace-nowrap text-sm font-grotesk-semi-bold lg:text-base ${smallerType && "mb-1"}`}
          >
            {text}
          </p>
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
