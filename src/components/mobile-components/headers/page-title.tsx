"use client";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const PageTitle = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="flex items-center  justify-center relative mb-4  ">
      <button onClick={() => router.back()} className="absolute left-0 top-1">
        <Image src={arrowLeft} alt="" />
      </button>
      <p className=" text-lg font-grotesk-bold   text-bayfi-black-600">
        {title}
      </p>
    </div>
  );
};
