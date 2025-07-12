"use client";

import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";
import shieldIcon from "@/assets/svg/shield-icon.svg";
import Image from "next/image";
import passwordIcon from "@/assets/svg/password-icon-setting.svg";
import { ProfileNavContainer } from "@/components/wrappers/profile/profile-nav";
import { useRouter } from "next/navigation";
import biometricIcon from "@/assets/svg/biometric-icon.svg";

function ProfileSetting() {
  const router = useRouter();
  return (
    <>
      <PageTitle title="Profile Setting" />
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-center">
          <Image src={shieldIcon} alt="" />
        </div>
        <div className="my-4">
          <ProfileNavContainer
            clickAction={() => {
              router.push("/password-setting");
            }}
            icon={passwordIcon}
            whiteBg
            text="Password Settings"
          />
          <ProfileNavContainer
            clickAction={() => {
              router.push("/pin-setup");
            }}
            icon={passwordIcon}
            whiteBg
            text="Transaction Pin"
          />
          <ProfileNavContainer icon={biometricIcon} whiteBg text="Biometrics" />
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;
