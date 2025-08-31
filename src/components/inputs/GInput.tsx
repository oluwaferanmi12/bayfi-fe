"use client";

import { Text } from "@/components/texts/text";
import Image from "next/image";
import { useState } from "react";
import eyeIcon from "@/assets/svg/eyeIcon.svg";
import eyeIconSlash from "@/assets/svg/eye-slash.svg";

export const GInput = ({
  label,
  placeholder,
  type = "text",
  icon,
  noMarginBottom,
  setInput,
  inputVal,
}: {
  label: string;
  placeholder: string;
  type?: "password" | "text" | "number";
  icon?: string;
  noMarginBottom?: boolean;
  setInput?: (val: string) => void;
  inputVal?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`${noMarginBottom ? "mb-0" : "mb-4"} w-full`}>
      <Text type="input-text" value={label} />
      <div className="mt-1 relative">
        {icon && (
          <span className="absolute lg:top-4  top-3 left-2">
            {icon && <Image src={icon} alt="" />}
          </span>
        )}

        {type === "password" && (
          <button
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="absolute right-2 top-4 z-20 cursor-pointer"
          >
            <Image
              width={18}
              height={18}
              src={showPassword ? eyeIconSlash : eyeIcon}
              alt=""
            />
          </button>
        )}

        <input
          value={inputVal}
          onChange={(e) => {
            if (setInput) {
              setInput(e.target.value);
            }
          }}
          type={type === "password" ? (showPassword ? "text" : type) : type}
          placeholder={placeholder}
          className={`bg-bayfi-grey-400 font-grotesk-medium placeholder:font-grotesk-regular text-base rounded-lg p-2 lg:py-3 ${icon && " px-9"}  min-w-full  outline-none border border-bayfi-grey-600`}
        />
      </div>
    </div>
  );
};
