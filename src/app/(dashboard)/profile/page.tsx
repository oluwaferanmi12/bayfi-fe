"use client";

import React, { useEffect, useState } from "react";
import { Text } from "@/components/texts/text";
import { Col, Row } from "antd";
import { ProfileNav } from "@/components/wrappers/profile/profile-nav";
import profilePlaceholder from "@/assets/svg/profile-default-avatar.svg";
import Image from "next/image";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import { useCustomProfile } from "@/hooks/custom/profile/useCustomProfile";
import { useChangePasswordHook } from "@/hooks/custom/profile/useChangePasswordHook";

function ProfileSetting() {
  const {
    activeProfile,
    formData,
    setFormData,
    saveProfileLoading,
    handleUpdateProfile,
    setActiveProfile,
    handlePreviewImage,
    handleRemoveProfileImage,
    previewUrl,
    inputRef,
    handleSaveImage,
    saveImageLoading,
  } = useCustomProfile();
  const { handleChangePassword, passwordLoading, payload, setPayload } =
    useChangePasswordHook();
  return (
    <div className="rounded-lg bg-white ">
      <div className="p-4 border-b border-[#EAECF0]">
        <div>
          <Text value="My Profile" type="header-text-20" />
          <p className="text-bayfi-black-500 text-xs">
            Adjust your profile settings here
          </p>
        </div>
      </div>
      <div className="p-4">
        <Row>
          <Col xs={6}>
            <ProfileNav
              setActiveProfile={setActiveProfile}
              activeProfile={activeProfile}
            />
          </Col>
          <Col xs={18}>
            <div className="flex items-center justify-center w-full">
              <Row className="w-full" justify={"center"}>
                <Col xs={16}>
                  <div className="flex flex-col items-center justify-center">
                    {activeProfile === "setting" && (
                      <div className="w-full flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center">
                          <div className="relative">
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
                              src={
                                formData.avatar
                                  ? formData.avatar
                                  : profilePlaceholder
                              }
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
                            setInput={(val) =>
                              setFormData((prev) => ({ ...prev, email: val }))
                            }
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
                    )}
                    {activeProfile === "security" && (
                      <>
                        <div className="py-3 border-b border-[#EAECF0] w-full">
                          <div className="flex items-center w-full justify-between">
                            <p className="text-[#101828] text-xl font-grotesk-medium">
                              Password settings
                            </p>
                            <Button
                              loading={passwordLoading}
                              type="bgGreen"
                              text="Change password"
                              lessRounded
                              action={() => {
                                handleChangePassword();
                              }}
                            />
                          </div>
                          <div className="mt-4 w-full">
                            <GInput
                              type="password"
                              inputVal={payload.oldPassword}
                              setInput={(e) => {
                                setPayload((prev) => ({
                                  ...prev,
                                  oldPassword: e,
                                }));
                              }}
                              label="Old Password"
                              placeholder="Insert old password"
                            />
                            <GInput
                              type="password"
                              inputVal={payload.newPassword}
                              setInput={(e) => {
                                setPayload((prev) => ({
                                  ...prev,
                                  newPassword: e,
                                }));
                              }}
                              label="New Password"
                              placeholder="Insert old password"
                            />
                          </div>
                        </div>
                        <div className="py-3 border-b border-[#EAECF0] w-full">
                          <div className="flex items-center w-full justify-between">
                            <p className="text-[#101828] text-xl font-grotesk-medium">
                              Pin Setting
                            </p>
                            <Button
                              loading={false}
                              type="bgGreen"
                              text="Change Pin"
                              lessRounded
                            />
                          </div>
                          <div className="mt-4 w-full">
                            <GInput
                              label="Old Pin"
                              placeholder="Enter old pin"
                            />
                            <GInput
                              label="New Pin"
                              placeholder="Enter new pin"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProfileSetting;
