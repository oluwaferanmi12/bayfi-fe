import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";
import Image from "next/image";
import avatarPlacholder from "@/assets/svg/profile-default-avatar.svg";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";

function ProfileSetting() {
  return (
    <>
      <PageTitle title="Profile setting" />
      <div className="my-4 bg-white p-4 rounded-lg">
        <div className="flex items-center justify-center ">
          <Image
            className="border w-20 h-20 border-[#CBE461] rounded-full"
            src={avatarPlacholder}
            alt=""
          />
        </div>
        <div className="my-3">
          <GInput label="Full name" placeholder="Your phone number" />
          <GInput label="Email address" placeholder="Your email address" />
          <GInput label="Phone number" placeholder="Your phone number" />
          <GInput label="Date of Birth" placeholder="date of birth" />
          <GInput label="Address" placeholder="Street address" />
          <div className="my-2">
            <Button
              text="Save changes"
              type="bgGreen"
              fullWidth
              loading={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;
