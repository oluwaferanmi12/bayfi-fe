import Image from "next/image";
import logo from "@/assets/svg/logo-plain.svg";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="pulse-logo">
        <Image  src={logo} alt="Loading" className="logo-img w-6 aspect-square" priority />
      </div>
    </div>
  );
};
