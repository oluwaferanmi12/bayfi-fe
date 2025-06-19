import avatarPlacholder from "@/assets/svg/profile-default-avatar.svg";
import Image from "next/image";
import { IncompleteKycBadge } from "@/components/wrappers/profile/incomplete-kyc";
import profileSetting from "@/assets/svg/profile-setting-icon.svg";
import leaderboardIcon from "@/assets/svg/profile-leaderboard-icon.svg";
import securityIcon from "@/assets/svg/profile-setting-icon.svg";
import helpIcon from "@/assets/svg/profile-help-icon.svg";
import aboutIcon from "@/assets/svg/profile-about-icon.svg";
import logoutIcon from "@/assets/svg/profile-logout-icon.svg";
import arrowRightTop from "@/assets/svg/arrow-right-top.svg";
import { Dispatch, SetStateAction } from "react";
import { ProfileType } from "@/interfaces/interfaces-ui";

export const ProfileNav = ({
  setActiveProfile,
  activeProfile,
}: {
  setActiveProfile: Dispatch<SetStateAction<ProfileType>>;
  activeProfile: ProfileType;
}) => {
  return (
    <>
      <div className="bg-bayfi-grey-100 p-4 rounded-lg">
        <div className="flex items-center justify-center ">
          <Image
            className="border border-[#CBE461] rounded-full"
            src={avatarPlacholder}
            alt=""
          />
        </div>
        <IncompleteKycBadge />
        <div className="flex items-center flex-col  justify-center">
          <p className="text-bayfi-black-900 font-grotesk-medium text-2xl">
            Olaitan Akinlade
          </p>
          <p className="text-text-color-600 font-grotesk-medium text-base">
            Kiitan234
          </p>
        </div>
        <div className="mt-4">
          <ProfileNavContainer icon={profileSetting} text="Profile Setting" />
          <ProfileNavContainer icon={leaderboardIcon} text="Leaderboard" />
          <ProfileNavContainer icon={securityIcon} text="Security settings" />
          <ProfileNavContainer icon={helpIcon} text="Help & Support" />
          <ProfileNavContainer
            icon={aboutIcon}
            text="About Bayfi"
            extraIcon={arrowRightTop}
          />
          <ProfileNavContainer icon={logoutIcon} text="Logout" logoutType />
        </div>
      </div>
    </>
  );
};

const ProfileNavContainer = ({
  icon,
  text,
  extraIcon,
  logoutType,
  clickAction,
}: {
  icon: string;
  text: string;
  extraIcon?: string;
  logoutType?: boolean;
  clickAction?: () => void;
}) => {
  return (
    <div
      onClick={() => {
        clickAction && clickAction();
      }}
      className="flex items-center  justify-between cursor-pointer py-3"
      style={{ borderBottom: "1px solid #EBF1FF" }}
    >
      <div className="flex items-center gap-3 ">
        <Image src={icon} alt="" />
        <p
          className={`${logoutType && "text-[#FB0C0C]"} text-base font-grotesk-medium`}
        >
          {text}
        </p>
      </div>
      {extraIcon && <Image src={extraIcon} alt="" />}
    </div>
  );
};
