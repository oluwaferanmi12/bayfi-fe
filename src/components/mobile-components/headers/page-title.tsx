"use client";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const PageTitle = ({
  title,
  fixed,
}: {
  title: string;
  fixed?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex ${fixed && "sticky top-0 bg-[#F6F4F0]  py-4 z-20"} items-center  justify-center relative mb-4`}
    >
      <button
        onClick={() => router.back()}
        className={`absolute left-0 ${fixed ? "top-6" : "top-1"} `}
      >
        <Image src={arrowLeft} alt="" />
      </button>
      <p className=" text-lg font-grotesk-bold   text-bayfi-black-600">
        {title}
      </p>
    </div>
  );
};
