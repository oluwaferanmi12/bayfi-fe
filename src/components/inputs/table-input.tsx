import Image from "next/image";
import tableNormal from "@/assets/svg/table-search-normal.svg";

export const TableInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <>
      <div className="relative">
        <span className="absolute top-2 left-2">
          <Image src={tableNormal} alt="" />
        </span>
        <input
          placeholder={placeholder}
          className="bg-[#F5F5F5] pl-8 font-grotesk-medium text-[#878787] focus-within:outline-none py-2 px-3 border border-[#F5F5F5] rounded-lg"
        />
      </div>
    </>
  );
};
