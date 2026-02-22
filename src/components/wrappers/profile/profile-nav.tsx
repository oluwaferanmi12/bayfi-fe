import avatarPlacholder from "@/assets/svg/profile-default-avatar.svg";
import Image from "next/image";
import logoutIcon from "@/assets/svg/profile-logout-icon.svg";
import arrowRightTop from "@/assets/svg/arrow-right-top.svg";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ProfileType } from "@/interfaces/interfaces-ui";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useFetchProfile } from "@/hooks/query/useProfile";
import { ProfileDataInterface } from "@/types/profile.types";
import { useLogout } from "@/hooks/query";
import { isValidImageUrl } from "@/utils/checkValidImage";
import { KycWrapper } from "@/components/mobile-components/wrappers/kyc-wrapper";
import { Tier } from "@/components/features/profile/tier";
import arrowRightShort from "@/assets/svg/arrow-right-short.svg";
import linearUser from "@/assets/svg/linear-user.svg";
import keyIcon from "@/assets/svg/key.svg";
import moonIcon from "@/assets/svg/moon-icon.svg";
import { Switch } from "antd";
import directBoxSend from "@/assets/svg/direct-box-send.svg";
import buildingIcon from "@/assets/svg/building-icon.svg";
import legalIcon from "@/assets/svg/legal-icon.svg";
import { TierInfoDrawer } from "@/components/side-drawers/profile/tier-info-drawer";

export const ProfileNav = ({
  setActiveProfile,
  noBg,
}: {
  setActiveProfile: Dispatch<SetStateAction<ProfileType>>;
  noBg?: boolean;
}) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const profileDataFn = useFetchProfile();
  const [showTierDetails, setShowTierDetais] = useState(false);
  const profileData: ProfileDataInterface | undefined = profileDataFn?.data;
  const logOutMutate = useLogout((val) => {
    Cookies.remove("loginDetails");
    router.push("/login");
  });

  useEffect(() => {
    const checkImage = async () => {
      try {
        const result = await isValidImageUrl(profileData?.avatar ?? "");
        if (result) {
          setImageUrl(profileData?.avatar ?? "");
        }
      } catch (e) {}
    };
    checkImage();
  }, [profileData]);

  return (
    <>
      <TierInfoDrawer
        open={showTierDetails}
        handleClose={() => setShowTierDetais(false)}
      />
      <div className={` lg:p-4 rounded-lg`}>
        <div
          onClick={() => {
            if (noBg) {
              router.push("/tier-details");
            } else {
              setShowTierDetais(true);
            }
          }}
          className="flex cursor-pointer items-center justify-between bg-[#FBFBFB] px-4 py-2 rounded-lg mt-2"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center ">
              <div className="w-15 h-15 overflow-hidden relative">
                <Image
                  className="border object-cover w-full border-[#CBE461] rounded-full"
                  src={imageUrl ? imageUrl : avatarPlacholder}
                  alt=""
                  layout="fill"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center min-w-0">
              <p className="text-bayfi-black-900 font-grotesk-medium text-xl lg:text-2xl truncate max-w-45 lg:max-w-60">
                {profileData
                  ? `${profileData.firstName} ${profileData.lastName}`
                  : ""}
              </p>
              <p className="text-text-color-600 font-grotesk-medium text-sm lg:text-base truncate max-w-45 lg:max-w-60">
                {profileData?.username}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Tier tier={profileData?.tierLevel} />
            <Image src={arrowRightShort} alt="" />
          </div>
        </div>

        <div className="py-4 pb-0">
          <div className="lg:block hidden">
            <KycWrapper
              clickAction={() => {
                setActiveProfile("kyc");
              }}
              desktopType
            />
          </div>
          <div className="lg:hidden">
            <KycWrapper
              clickAction={() => {
                router.push("/complete-kyc");
              }}
              desktopType
            />
          </div>
        </div>

        <div className="mt-4 pb-28 lg:pb-0">
          <ProfileNavContainer
            clickAction={() => {
              if (noBg) {
                router.push("/profile-setting");
              }
              setActiveProfile("setting");
            }}
            icon={linearUser}
            text="Account information"
            whiteBg={noBg}
          />
          {/* <ProfileNavContainer
            whiteBg={noBg}
            icon={leaderboardIcon}
            text="Leaderboard"
          /> */}
          <ProfileNavContainer
            clickAction={() => {
              if (noBg) {
                router.push("/security-setting");
              }
              setActiveProfile("security");
            }}
            icon={keyIcon}
            text="Security"
            whiteBg={noBg}
          />
          <ProfileNavContainer
            clickAction={() => {
              // if (noBg) {
              //   router.push("/security-setting");
              // }
              // setActiveProfile("security");
            }}
            icon={moonIcon}
            text="Dark Mode"
            whiteBg={noBg}
            disabled
            extraIcon={
              <>
                <Switch />
              </>
            }
          />
          <ProfileNavContainer
            whiteBg={noBg}
            icon={directBoxSend}
            text="Help & Support"
            disabled
          />
          <ProfileNavContainer
            icon={buildingIcon}
            text="About Bayfi"
            clickAction={() => {
              window.open("/about", "_blank");
            }}
            extraIcon={<Image src={arrowRightTop} alt="" />}
            whiteBg={noBg}
          />
          <ProfileNavContainer
            clickAction={() => {
              if (noBg) {
                router.push("/m-legal");
              }
              setActiveProfile("legal");
            }}
            icon={legalIcon}
            text="Legal"
            extraIcon={<Image src={arrowRightTop} alt="" />}
            whiteBg={noBg}
          />
          <ProfileNavContainer
            whiteBg={noBg}
            icon={logoutIcon}
            text="Logout"
            logoutType
            clickAction={() => logOutMutate.mutate()}
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
  disabled,
}: {
  icon: string;
  text: string;
  extraIcon?: ReactNode;
  logoutType?: boolean;
  clickAction?: () => void;
  whiteBg?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div
      onClick={() => {
        if (!disabled && clickAction) {
          clickAction();
        }
      }}
      className={`flex ${whiteBg && "bg-white rounded-lg px-4 mb-2"} items-center justify-between py-3 ${
        disabled
          ? "blur-[1.5px] opacity-60 pointer-events-none"
          : "cursor-pointer"
      }`}
      // style={{ borderBottom: "1px solid #EBF1FF" }}
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
        (extraIcon ? extraIcon : <Image src={arrowRightShort} alt="" />)}
    </div>
  );
};
