import notificationIcon from "@/assets/svg/notification.svg";
import Image from "next/image";
import { useProfileStore } from "@/store/userProfileStore";
import profilePlaceholder from "@/assets/svg/profile-default-avatar.svg";
import { useRouter } from "next/navigation";
import rewardBox from "@/assets/svg/reward-box.svg";
import Link from "next/link";

export const DashboardHeader = () => {
  const { profile } = useProfileStore();
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="font-grotesk-semi-bold text-2xl">
          Hey, {profile?.firstName}
        </p>
        <div className="flex items-center gap-2">
          {/* <Image src={notificationIcon} alt="" /> */}
          <Link href={"/m-referral"}>
            <Image src={rewardBox} alt="" />
          </Link>
          <Image
            width={30}
            height={30}
            onClick={() => {
              router.push("/more");
            }}
            className="cursor-pointer aspect-square rounded-full object-cover"
            src={profile?.avatar ?? profilePlaceholder}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
