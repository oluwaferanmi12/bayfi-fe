"use client";

import { Button } from "@/components/buttons";
import { OTPInput } from "@/components/inputs/otp-input";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function ChangePin() {
  return (
    <>
      <PageTitle title="Pin Setup" />
      <div className="my-4 bg-white rounded-lg p-4">
        <p className="py-3 flex justify-center font-grotesk-medium">
          Create new transaction pin
        </p>
        <OTPInput onChange={() => {}} value="" />
        <div className="my-3">
          <Button
            action={() => {}}
            loading={false}
            text="Save"
            fullWidth
            type="bgGreen"
          />
        </div>
      </div>
    </>
  );
}

export default ChangePin;
