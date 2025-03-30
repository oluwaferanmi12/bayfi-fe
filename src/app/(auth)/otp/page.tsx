"use client";

import likeIcon from "@/assets/svg/likeIcon.svg";
import { Row, Col } from "antd";
import { Text } from "@/components/texts/text";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Button } from "@/components/buttons";
import { OTPInput } from "@/components/inputs/otp-input";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";

const Otp = () => {
  return (
    <Row className="h-full">
      <Col xs={16}>
        <Row className="h-full" justify={"center"} align={"middle"}>
          <Col xs={12}>
            <div className="mb-6">
              <Image src={logo} alt="" />
            </div>
            <div className="bg-white  border border-bayfi-green-50 rounded-lg p-8 ">
              <div className="flex items-center  flex-col ">
                <div>
                  <Image src={likeIcon} alt="" />
                </div>
                <Text
                  value="Account registered successfully"
                  type="header-32"
                />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="Please confirm provide the OTP in your mailbox"
                  />
                </div>
              </div>
              <div className="mt-6 ">
                <OTPInput />
              </div>
              <div className="mt-4">
                <Button
                  type="bgGreen"
                  text="Confirm OTP"
                  fullWidth
                  loading={false}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={8}>
        <AnimatedAuthSide />
      </Col>
    </Row>
  );
};

export default Otp;
