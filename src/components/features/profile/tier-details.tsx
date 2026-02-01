import { useProfileStore } from "@/store/userProfileStore";
import Image from "next/image";
import avatarPlacholder from "@/assets/svg/profile-default-avatar.svg";
import { TierVertical } from "./tier-vertical";
import { Tier } from "./tier";
import kycIcon from "@/assets/svg/kyc-badge.svg";
import checkCircle from "@/assets/svg/check-circle.svg";

export const TierDetails = ({ mobileType }: { mobileType?: boolean }) => {
  const { profile } = useProfileStore();
  return (
    <div>
      <div
        onClick={() => {
          //   setShowTierDetais(true);
        }}
        className={`flex relative cursor-pointer items-center justify-between ${mobileType ? "bg-white" : "bg-[#FBFBFB]"} px-4 py-2 rounded-lg mt-2`}
      >
        <div className="absolute -top-2 right-4">
          <TierVertical tier={profile?.tierLevel} />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center ">
            <div className="w-15 h-15 overflow-hidden relative">
              <Image
                className="border object-cover w-full border-[#CBE461] rounded-full"
                src={profile?.avatar ? profile.avatar : avatarPlacholder}
                alt=""
                layout="fill"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <p className="text-bayfi-black-900 font-grotesk-medium text-xl lg:text-2xl truncate max-w-45 lg:max-w-60">
              {profile ? `${profile.firstName} ${profile.lastName}` : ""}
            </p>
            <p className="text-text-color-600 font-grotesk-medium text-sm lg:text-base truncate max-w-45 lg:max-w-60">
              {profile?.username}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${mobileType ? "bg-white" : " bg-[#FBFBFB]"}  rounded-2xl px-4 py-3 my-2 mt-4 flex items-center justify-between`}
        >
          <div className="flex items-center gap-3">
            <Tier />
            <p className="text-bayfi-black-600 text-xl font-grotesk-semi-bold">
              Account Tier 1
            </p>
          </div>
          <div>
            <Image height={24} width={24} src={kycIcon} alt="KYC Badge" />
          </div>
        </div>

        <div
          className={`${mobileType ? "bg-white" : "bg-[#FBFBFB]"}  rounded-2xl px-4 py-2 `}
        >
          <div className="flex items-center gap-2 my-2">
            <Image src={checkCircle} alt="Check Icon" />
            <p className="text-base text-[#141414] font-grotesk-medium">
              Unlimited messages, interactions, and history
            </p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Image src={checkCircle} alt="Check Icon" />
            <p className="text-base text-[#141414] font-grotesk-medium">
              Unlimited messages, interactions, and history
            </p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Image src={checkCircle} alt="Check Icon" />
            <p className="text-base text-[#141414] font-grotesk-medium">
              Unlimited messages, interactions, and history
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
