"use client";

import likeIcon from "@/assets/svg/likeIcon.svg";
import { Row, Col } from "antd";
import { Text } from "@/components/texts/text";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Button } from "@/components/buttons";
import { OTPInput } from "@/components/inputs/otp-input";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";
import { useRouter } from "next/navigation";

const Otp = () => {
  const router = useRouter();
  return (
    <Row className="h-full">
      <Col lg={16} xs={24}>
        <Row className="h-full" justify={"center"} align={"middle"}>
          <Col lg={12} xs={22}>
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
                  action={() => {
                    router.push("/dashboard");
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="hideContainer" xs={8}>
        <AnimatedAuthSide />
      </Col>
    </Row>
  );
};

export default Otp;
