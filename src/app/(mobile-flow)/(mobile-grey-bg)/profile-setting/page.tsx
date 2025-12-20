"use client";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";
import Image from "next/image";
import avatarPlacholder from "@/assets/svg/profile-default-avatar.svg";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import { useCustomProfile } from "@/hooks/custom/profile/useCustomProfile";
import profilePlaceholder from "@/assets/svg/profile-default-avatar.svg";

function ProfileSetting() {
  const {
    setFormData,
    formData,
    handleUpdateProfile,
    saveProfileLoading,
    handlePreviewImage,
    inputRef,
    previewUrl,
    handleRemoveProfileImage,
    handleSaveImage,
    saveImageLoading,
  } = useCustomProfile();
  return (
    <>
      <PageTitle title="Profile setting" />
      <div className="my-4 bg-white p-4 rounded-lg">
        <div className="flex items-center justify-center ">
          <div>
            <div className="relative flex items-center justify-center">
              <span className="absolute w-[120px] opacity-0 overflow-hidden h-[120px]">
                <input
                  ref={inputRef}
                  onChange={(e) => {
                    if (e.target.files) {
                      handlePreviewImage(e.target.files[0]);
                    }
                  }}
                  className="h-full"
                  accept="image/*"
                  type="file"
                />
              </span>
              <Image
                width={120}
                height={120}
                className="w-[120px] aspect-square rounded-full object-cover"
                src={formData.avatar ? formData.avatar : profilePlaceholder}
                alt=""
              />
            </div>
            <div className="flex items-center mt-2 gap-2">
              {(formData.avatar || previewUrl) && (
                <Button
                  loading={saveProfileLoading}
                  text="Remove"
                  type="bgPlain"
                  smallerType
                  action={() => {
                    handleRemoveProfileImage();
                  }}
                />
              )}
              {previewUrl && (
                <Button
                  loading={saveImageLoading}
                  text="Save Image"
                  type="bgGreen"
                  action={() => {
                    handleSaveImage();
                  }}
                  smallerType
                />
              )}
            </div>
          </div>
        </div>
        <div className="my-3">
          <GInput
            label="First Name"
            inputVal={formData.firstName}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                firstName: val,
              }))
            }
            placeholder="Your phone number"
          />
          <GInput
            label="Last Name"
            placeholder="Your last name"
            inputVal={formData.lastName}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                lastName: val,
              }))
            }
          />
          <GInput
            label="Email address"
            placeholder="Your email address"
            inputVal={formData.email}
            setInput={(val) => setFormData((prev) => ({ ...prev, email: val }))}
            disabled
          />
          <GInput
            label="Phone number"
            placeholder="Your phone number"
            inputVal={formData.phoneNumber}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: val,
              }))
            }
          />
          <div className="my-2">
            <Button
              action={() => {
                handleUpdateProfile();
              }}
              text="Save changes"
              type="bgGreen"
              fullWidth
              loading={saveProfileLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;
