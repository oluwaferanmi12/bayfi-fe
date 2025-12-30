import { useCustomProfile } from "@/hooks/custom/profile/useCustomProfile";
import Image from "next/image";
import profilePlaceholder from "@/assets/svg/profile-default-avatar.svg";
import React from "react";
import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";

export const ProfileForm = () => {
  const {
    formData,
    setFormData,
    saveProfileLoading,
    handleUpdateProfile,
    handlePreviewImage,
    handleRemoveProfileImage,
    previewUrl,
    inputRef,
    handleSaveImage,
    saveImageLoading,
    profile,
  } = useCustomProfile();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <span className="absolute w-30 opacity-0 overflow-hidden h-30">
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
            className="w-30 aspect-square rounded-full object-cover"
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

      <div className="mt-4 w-full">
        <div className="flex items-center gap-4 w-full">
          <GInput
            label="First name"
            disabled={profile?.verified}
            placeholder="Enter first name"
            inputVal={formData.firstName}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                firstName: val,
              }))
            }
          />
          <GInput
            disabled={profile?.verified}
            label="Last name"
            placeholder="Enter last name"
            inputVal={formData.lastName}
            setInput={(val) =>
              setFormData((prev) => ({
                ...prev,
                lastName: val,
              }))
            }
          />
        </div>
        <GInput
          label="Email address"
          placeholder="Enter your email"
          inputVal={formData.email}
          setInput={(val) => setFormData((prev) => ({ ...prev, email: val }))}
          disabled
        />
        <GInput
          label="Phone Number"
          placeholder="Enter your phone number"
          inputVal={formData.phoneNumber}
          setInput={(val) =>
            setFormData((prev) => ({
              ...prev,
              phoneNumber: val,
            }))
          }
        />

        <Button
          loading={saveProfileLoading}
          text="Save changes"
          type="bgGreen"
          fullWidth
          action={() => {
            handleUpdateProfile();
          }}
        />
      </div>
    </div>
  );
};
