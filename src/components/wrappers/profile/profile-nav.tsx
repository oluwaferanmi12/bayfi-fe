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
import arrowRightGreen from "@/assets/svg/arrow-right-green.svg";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useFetchProfile } from "@/hooks/query/useProfile";
import { ProfileDataInterface } from "@/types/profile.types";
// import { useLogout } from "@/hooks/query";


export const ProfileNav = ({
  setActiveProfile,
  activeProfile,
  noBg,
}: {
  setActiveProfile: Dispatch<SetStateAction<ProfileType>>;
  activeProfile: ProfileType;
  noBg?: boolean;
}) => {
  const router = useRouter();

  const profileDataFn =  useFetchProfile();
  const profileData: ProfileDataInterface | undefined = profileDataFn?.data;

  console.log("Profile data", profileData);

  // const logoutMutate = useLogout((data) => {
  //   // Cookies.remove("loginDetails");
  //   router.push("/login");
  // });
  const logoutFn = (() => {
    Cookies.remove("loginDetails");
    router.push("/login");
  });
  
  return (
    <>
      <div className={`${!noBg && "bg-bayfi-grey-100"}  lg:p-4 rounded-lg`}>
        <div className="flex items-center justify-center ">
          <Image
            className="border border-[#CBE461] rounded-full"
            src={avatarPlacholder}
            alt=""
          />
        </div>
        <IncompleteKycBadge />
        <div className="flex items-center flex-col  justify-center">
          <p className="text-bayfi-black-900 font-grotesk-medium text-xl lg:text-2xl">
            {profileData ? `${profileData.firstName} ${profileData.lastName}` : 'Loading...'}
          </p>
          <p className="text-text-color-600 font-grotesk-medium text-sm lg:text-base">
            Kiitan234
          </p>
        </div>
        <div className="mt-4 pb-28 lg:pb-0">
          <ProfileNavContainer
            clickAction={() => {
              if (noBg) {
                router.push("/profile-setting");
              }
              setActiveProfile("setting");
            }}
            icon={profileSetting}
            text="Profile Setting"
            whiteBg={noBg}
          />
          <ProfileNavContainer
            whiteBg={noBg}
            icon={leaderboardIcon}
            text="Leaderboard"
          />
          <ProfileNavContainer
            clickAction={() => {
              if (noBg) {
                router.push("/security-setting");
              }
              setActiveProfile("security");
            }}
            icon={securityIcon}
            text="Security settings"
            whiteBg={noBg}
          />
          <ProfileNavContainer
            whiteBg={noBg}
            icon={helpIcon}
            text="Help & Support"
          />
          <ProfileNavContainer
            icon={aboutIcon}
            text="About Bayfi"
            extraIcon={arrowRightTop}
            whiteBg={noBg}
          />
          <ProfileNavContainer
            whiteBg={noBg}
            icon={logoutIcon}
            text="Logout"
            logoutType
            clickAction={() => logoutFn()}
          />
        </div>
      </div>
    </>
  );
};

export const ProfileNavContainer = ({
  icon,
  text,
  extraIcon,
  logoutType,
  clickAction,
  whiteBg,
}: {
  icon: string;
  text: string;
  extraIcon?: string;
  logoutType?: boolean;
  clickAction?: () => void;
  whiteBg?: boolean;
}) => {
  return (
    <div
      onClick={() => {
        if (clickAction) {
          clickAction();
        }
      }}
      className={`flex ${whiteBg && "bg-white rounded-lg px-4 mb-2"} items-center  justify-between cursor-pointer py-3`}
      style={{ borderBottom: "1px solid #EBF1FF" }}
    >
      <div className="flex items-center gap-3 ">
        <Image src={icon} alt="" />
        <p
          className={`${logoutType && "text-[#FB0C0C]"} text-sm lg:text-base font-grotesk-medium`}
        >
          {text}
        </p>
      </div>
      {(extraIcon || whiteBg) &&
        !logoutType &&
        (extraIcon ? (
          <Image src={extraIcon} alt="" />
        ) : (
          <Image src={arrowRightGreen} alt="" />
        ))}
    </div>
  );
};
