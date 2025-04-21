import notificationIcon from "@/assets/svg/notification.svg";
import Image from "next/image";
import placeholderAvatar from "@/assets/svg/dashboard-placeholder.svg";
import { Text } from "@/components/texts/text";

export const DashboardHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="font-grotesk-semi-bold text-2xl">Hey, Olaitan</p>
        <div className="flex items-center gap-2">
          <Image src={notificationIcon} alt="" />
          <Image src={placeholderAvatar} alt="" />
        </div>
      </div>
    </>
  );
};
