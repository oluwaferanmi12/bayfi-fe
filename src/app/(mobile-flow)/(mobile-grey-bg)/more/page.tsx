"use client";

import { FixedMobileHeader } from "@/components/mobile-components/headers/fixed-mobile-header";
import { MobileNav } from "@/components/mobile-components/nav/mobile-nav";
import { ProfileNav } from "@/components/wrappers/profile/profile-nav";
import { ProfileType } from "@/interfaces/interfaces-ui";
import React, { useState } from "react";

function More() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("setting");
  return (
    <>
      <MobileNav />
      <FixedMobileHeader header="More" subText="Account settings and more" />
      <div className="mt-20">
        <ProfileNav
          noBg
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
        />
      </div>
    </>
  );
}

export default More;
