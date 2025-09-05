import Image from "next/image";
import searchIcon from "../../assets/svg/search-normal.svg";
import { useState } from "react";

export const SearchInput = ({
  bgGrey,
  bgWhite,
  value,
  onChange
}: {
  bgGrey?: boolean;
  bgWhite?: boolean;
  value?: string;
  onChange?: (val: string) => void;
}) => {
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="relative ">
      <span className="absolute lg:top-4 top-[14px] left-4">
        <Image src={searchIcon} alt="" />
      </span>
      <input
        placeholder="Search"
        value={value}
        onChange={handleSearchInput}
        className={`border lg:py-3 py-2 px-4 placeholder:font-grotesk-regular outline-none text-base font-grotesk-semi-bold pl-10 placeholder:text-[#CBCBCB] w-full border-[#EBF1FF] rounded-lg ${bgWhite ? "bg-white" : bgGrey ? "bg-[#F5F5F5]" : ""}`}
      />
    </div>
  );
};
