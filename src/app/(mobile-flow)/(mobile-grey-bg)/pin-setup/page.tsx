"use client";

import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";
import biometricIcon from "@/assets/svg/biometric-icon.svg";
import Image from "next/image";
import { Switch } from "antd";
import { Button } from "@/components/buttons";
import { useRouter } from "next/navigation";

function PinSetup() {
  const router = useRouter();
  return (
    <>
      <PageTitle title="Pin setup" />
      <div className="my-4 p-4 rounded-lg bg-white">
        <div className="border border-[#EBECEF] mb-3 flex justify-between rounded-lg items-center p-4">
          <div className="flex items-center gap-2">
            <div>
              <Image src={biometricIcon} alt="" />
            </div>
            <p className="text-[#333333] text-sm font-grotesk-medium">
              Account Login
            </p>
          </div>
          <Switch />
        </div>
        <div className="border border-[#EBECEF] mb-3 flex justify-between rounded-lg items-center p-4">
          <div className="flex items-center gap-2">
            <div>
              <Image src={biometricIcon} alt="" />
            </div>
            <p className="text-[#333333] text-sm font-grotesk-medium">
              Transaction & Updates
            </p>
          </div>
          <Switch />
        </div>
        <div>
          <Button
            action={() => {
              router.push("/pin-setup/change-pin");
            }}
            loading={false}
            text="Save changes"
            fullWidth
            type="bgGreen"
          />
        </div>
      </div>
    </>
  );
}

export default PinSetup;
