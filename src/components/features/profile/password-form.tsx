import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PasswordValidation } from "@/components/validation/password-validation";
import { useChangePasswordHook } from "@/hooks/custom/profile/useChangePasswordHook";
import React from "react";

export const PasswordForm = () => {
  const {
    handleChangePassword,
    passwordLoading,
    payload,
    setPayload,
    setPasswordValidated,
  } = useChangePasswordHook();
  return (
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
          <div>
            <PasswordValidation
              password={payload.newPassword}
              setPasswordValidated={setPasswordValidated}
            />
          </div>
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
          <GInput label="Old Pin" placeholder="Enter old pin" />
          <GInput label="New Pin" placeholder="Enter new pin" />
        </div>
      </div>
    </>
  );
};
