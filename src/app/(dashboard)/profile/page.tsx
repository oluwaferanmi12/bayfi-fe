"use client";

import React, { useState } from "react";
import { Text } from "@/components/texts/text";
import { Col, Row } from "antd";
import { ProfileNav } from "@/components/wrappers/profile/profile-nav";
import { ProfileType } from "@/interfaces/interfaces-ui";
import profilePlaceholder from "@/assets/svg/profile-default-avatar.svg";
import Image from "next/image";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";

function ProfileSetting() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("setting");
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
      <div className="p-4 ">
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
                        <span>
                          <Image
                            className="w-[120px] aspect-square"
                            src={profilePlaceholder}
                            alt=""
                          />
                        </span>
                        <div className="mt-4 w-full">
                          <div className="flex items-center gap-4 w-full">
                            <GInput label="First name" placeholder="Olaitan" />
                            <GInput label="Last name" placeholder="Akinlade" />
                          </div>
                          <GInput
                            label="Email address"
                            placeholder="enter your email"
                          />
                          <GInput
                            label="Phone Number"
                            placeholder="enter your email"
                          />
                          <GInput
                            label="Date of Birth"
                            placeholder="DD-MM-YYYY"
                          />
                          <GInput
                            label="Address"
                            placeholder="Street Address"
                          />
                          <Button
                            loading={false}
                            text="Save changes"
                            type="bgGreen"
                            fullWidth
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
                              loading={false}
                              type="bgGreen"
                              text="Change password"
                              lessRounded
                            />
                          </div>
                          <div className="mt-4 w-full">
                            <GInput
                              label="Old Password"
                              placeholder="Insert old password"
                            />
                            <GInput
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
