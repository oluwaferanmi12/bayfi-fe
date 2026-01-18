import arrowPath from "@/assets/svg/arrow-path.svg";
import arrowRight from "@/assets/svg/arrowRight.svg";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import Image from "next/image";
import { PaginationReturn } from "@/interfaces/interfaces";

export const TablePagination = ({
  data,
  pageSize,
  handleNext,
  handlePrevious,
  handleRefetchData,
}: {
  data?: PaginationReturn;
  pageSize: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handleRefetchData: () => void;
}) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => {
          handleRefetchData();
        }}
      >
        <Image src={arrowPath} alt="" />
      </button>
      <div className="flex items-center">
        <p className="text-[#545454] mb-1 text-base font-grotesk-medium">
          {(data?.pageSize ?? 0) * (data?.currentPage ?? 0) -
            (data?.pageSize ?? 0) +
            1}{" "}
          -{" "}
          {(data?.pageSize ?? 0) * (data?.currentPage ?? 0) >
          (data?.totalRecordCount ?? 0)
            ? (data?.totalRecordCount ?? 0)
            : (data?.pageSize ?? 0) * (data?.currentPage ?? 0)}{" "}
          of {data?.totalRecordCount}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {data?.hasPrevious && (
          <button onClick={handlePrevious} className="cursor-pointer">
            <Image src={arrowLeft} alt="" />
          </button>
        )}
        <p className="text-[#545454] mb-1 text-base font-grotesk-medium">
          {data?.currentPage} - {data?.totalPages}
        </p>
        {data?.hasNext && (
          <button onClick={handleNext} className="cursor-pointer">
            <Image src={arrowRight} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};
