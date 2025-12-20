"use client";

import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import { PasswordValidation } from "@/components/validation/password-validation";
import { useChangePasswordHook } from "@/hooks/custom/profile/useChangePasswordHook";
import React from "react";

function PasswordSetting() {
  const {
    handleChangePassword,
    passwordLoading,
    payload,
    setPasswordValidated,
    setPayload,
  } = useChangePasswordHook();
  return (
    <>
      <PageTitle title="Password setting" />
      <div className="p-4 rounded-lg my-4 bg-white">
        <GInput
          type="password"
          onChange={(e) => {
            setPayload((prev) => ({ ...prev, oldPassword: e.target.value }));
          }}
          value={payload.oldPassword}
          label="Old password"
          placeholder="Enter last password"
        />
        <GInput
          type="password"
          onChange={(e) => {
            setPayload((prev) => ({ ...prev, newPassword: e.target.value }));
          }}
          value={payload.newPassword}
          label="New password"
          placeholder="Enter new password"
        />
        <div>
          <PasswordValidation
            password={payload.newPassword}
            setPasswordValidated={setPasswordValidated}
          />
        </div>
        <div>
          <Button
            action={() => {
              handleChangePassword();
            }}
            text="Save changes"
            type="bgGreen"
            fullWidth
            loading={passwordLoading}
          />
        </div>
      </div>
    </>
  );
}

export default PasswordSetting;
