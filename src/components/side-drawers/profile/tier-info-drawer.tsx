import React from "react";
import { SideDrawer } from "../side-drawer";
import { TierDetails } from "@/components/features/profile/tier-details";

export const TierInfoDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <SideDrawer
      onClose={handleClose}
      open={open}
      title="Tier Information"
      destroyOnClose={true}
    >
      <div className="mt-4">
        <TierDetails />
      </div>
    </SideDrawer>
  );
};
