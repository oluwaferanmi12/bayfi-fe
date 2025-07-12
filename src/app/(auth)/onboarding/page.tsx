"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import arrowRightSquared from "@/assets/svg/arrowRightSquared.svg";
import { Text } from "@/components/texts/text";
import mailIcon from "@/assets/svg/input-message-icon.svg";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";
import mobileIcon from "@/assets/svg/mobileIcon.svg";
import locationIcon from "@/assets/svg/locationIcon.svg";
import globalIcon from "@/assets/svg/globalIcon.svg";
import securityCardIcon from "@/assets/svg/securityCard.svg";
import { UploadInput } from "@/components/inputs/upload-input";
import { useRouter } from "next/navigation";

const Onboarding = () => {
  const router = useRouter();
  return (
    <div className="h-full onBoardingBackground">
      <Row justify="center" align="middle" className="h-full">
        <Col lg={8} xs={22}>
          <div className="bg-white border border-bayfi-green-50 rounded-lg p-8">
            <div className="flex-between">
              <Image src={logo} alt="" />
              <div className="flex-neutral gap-2 items-center">
                <Text value="Skip process" type="text-plain-dark-16" />
                <Image src={arrowRightSquared} alt="" />
              </div>
            </div>
            <div className="mt-6">
              <Text value="Few more steps to go" type="header-32" />
              <div className="mt-1">
                <Text
                  value="Register to enjoy seamless trading and best rates"
                  type="header-subtext"
                />
              </div>
            </div>
            <div className="my-4">
              <GInput
                label="Phone number"
                icon={mobileIcon}
                placeholder="Your phone number"
              />
              <div className="flex flex-col lg:flex-row gap-2 items-center ">
                <div className="w-full">
                  <GInput
                    label="Address"
                    icon={locationIcon}
                    placeholder="Street address"
                  />
                </div>

                <div className="w-full">
                  <GInput
                    label="State"
                    icon={globalIcon}
                    placeholder="Select state"
                  />
                </div>
              </div>

              <GInput
                label="Select ID Type"
                icon={securityCardIcon}
                placeholder="National ID"
              />
              <UploadInput title={"Click here to upload document"} label="" />
            </div>
            <div className="mt-4">
              <Button
                action={() => {
                  router.push("/dashboard");
                }}
                type="bgGreen"
                fullWidth
                loading={false}
                text="Continue"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Onboarding;
