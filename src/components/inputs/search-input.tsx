import Image from "next/image";
import searchIcon from "../../assets/svg/search-normal.svg";

export const SearchInput = () => {
  return (
    <div className="relative ">
      <span className="absolute top-4 left-4">
        <Image src={searchIcon} alt="" />
      </span>
      <input
        placeholder="Search"
        className="border py-3 px-4 placeholder:font-grotesk-regular outline-none text-base font-grotesk-medium pl-10 placeholder:text-[#CBCBCB] w-full border-[#EBF1FF] rounded-lg bg-white"
      />
    </div>
  );
};
