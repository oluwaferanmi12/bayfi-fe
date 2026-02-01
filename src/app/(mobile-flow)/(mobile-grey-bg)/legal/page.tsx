import { PageTitle } from "@/components/mobile-components/headers/page-title";
import arrowRight from "@/assets/svg/arrow-right-short.svg";
import Image from "next/image";
import Link from "next/link";

function Legal() {
  return (
    <>
      <PageTitle title="Legal" />
      <div className="">
        <Link href={"/legal/terms"}>
          <div className="flex items-center justify-between bg-white p-4 rounded-xl mb-2">
            <p className="text-bayfi-black-600 font-inter-medium text-sm">
              Terms of Use
            </p>
            <Image src={arrowRight} alt="arrow right" />
          </div>
        </Link>
        <Link href={"/legal/privacy"}>
          <div className="flex items-center justify-between bg-white p-4 rounded-xl mb-2">
            <p className="text-bayfi-black-600 font-inter-medium text-sm">
              Privacy Policy
            </p>
            <Image src={arrowRight} alt="arrow right" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Legal;
