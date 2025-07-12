import { Button } from "@/components/buttons";
import { GInput } from "@/components/inputs/GInput";
import { PageTitle } from "@/components/mobile-components/headers/page-title";
import React from "react";

function PasswordSetting() {
  return (
    <>
      <PageTitle title="Password setting" />
      <div className="p-4 rounded-lg my-4 bg-white">
        <GInput label="Old password" placeholder="Enter last password" />
        <GInput label="New password" placeholder="Enter new password" />
        <GInput label="Confirm password" placeholder="Confirm password" />
        <div>
          <Button
            text="Save changes"
            type="bgGreen"
            fullWidth
            loading={false}
          />
        </div>
      </div>
    </>
  );
}

export default PasswordSetting;
