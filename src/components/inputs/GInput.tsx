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
}: {
  label: string;
  placeholder: string;
  type?: "password" | "text" | "number";
  icon?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4">
      <Text type="input-text" value={label} />
      <div className="mt-1 relative">
        <span className="absolute top-4 left-2">
          {icon && <Image src={icon} alt="" />}
        </span>
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
          type={type === "password" ? (showPassword ? "text" : type) : type}
          placeholder={placeholder}
          className="bg-bayfi-grey-400 font-grotesk-medium placeholder:font-grotesk-regular text-base rounded-lg p-3 px-9 min-w-full min-w-full outline-none border border-bayfi-grey-600"
        />
      </div>
    </div>
  );
};
