import redDot from "@/assets/svg/red-dot.svg";
import blueDot from "@/assets/svg/blue-dot.svg";
import greenDot from "@/assets/svg/green-dot.svg";
import Image from "next/image";

export const TableStatus = ({
  type,
  text,
}: {
  type: "Success" | "Pending" | "Failed";
  text: string;
}) => {
  return (
    <div
      className={`${type === "Success" ? "border border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]" : type === "Pending" ? "border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]" : "border border-[#FECDCA] bg-[#FEF3F2] text-[#B42318]"} rounded-full font-grotesk-medium px-4 py-1 flex items-center gap-1`}
    >
      <div style={{ marginTop: "2px" }}>
        <Image
          src={
            type === "Success"
              ? greenDot
              : type === "Pending"
                ? blueDot
                : redDot
          }
          alt=""
        />
      </div>
      <div className="flex items-center">{text}</div>
    </div>
  );
};
