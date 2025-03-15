import { Col, Row } from "antd";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import arrowRightSquared from "@/assets/svg/arrowRightSquared.svg";
import { Text } from "@/components/texts/text";
import mailIcon from "@/assets/svg/input-message-icon.svg";
import { GInput } from "@/components/inputs/GInput";
import { Button } from "@/components/buttons";

const Onboarding = () => {
  return (
    <div className="h-full onBoardingBackground">
      <Row justify="center" align="middle" className="h-full">
        <Col xs={8}>
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
              <GInput label="Email" icon={mailIcon} placeholder="Enter Email" />
              <GInput label="Email" icon={mailIcon} placeholder="Enter Email" />
              <GInput label="Email" icon={mailIcon} placeholder="Enter Email" />
              <GInput label="Email" icon={mailIcon} placeholder="Enter Email" />
            </div>
            <div className="mt-4">
              <Button
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
