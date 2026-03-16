"use client";
import { Text } from "@/components/texts/text";
import { Col, Row } from "antd";
import { ProfileNav } from "@/components/wrappers/profile/profile-nav";
import { KycForm } from "@/components/features/profile/kyc-form";
import { PasswordForm } from "@/components/features/profile/password-form";
import { ProfileForm } from "@/components/features/profile/profile-form";
import { useEffect, useState } from "react";
import { ProfileType } from "@/interfaces/interfaces-ui";
import { Legal } from "@/components/features/profile/legal/legal";
import { DesktopReferral } from "@/components/features/referral/desktop/deskop-referral";

function ProfileSetting() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("setting");
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const kycVal = urlParam.get("type");
    if (kycVal === "kyc") {
      setActiveProfile("kyc");
    } else if (kycVal === "reward") {
      setActiveProfile("reward");
    } else {
      setActiveProfile("setting");
    }
  }, []);
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
          <Col xs={6} className="border-r border-[#FBFBFB]">
            <ProfileNav setActiveProfile={setActiveProfile} />
          </Col>
          <Col xs={18}>
            <div className="flex items-center justify-center w-full">
              <Row className="w-full" justify={"center"}>
                <Col xs={16}>
                  <div className="flex flex-col items-center justify-center">
                    {activeProfile === "setting" && <ProfileForm />}
                    {activeProfile === "security" && <PasswordForm />}
                    {activeProfile === "kyc" && <KycForm />}
                    {activeProfile === "legal" && <Legal />}
                    {activeProfile === "reward" && <DesktopReferral />}
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
