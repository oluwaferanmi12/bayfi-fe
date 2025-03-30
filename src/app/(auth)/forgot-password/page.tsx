"use client"
import { Col, Row } from "antd";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import mailIcon from "@/assets/svg/input-message-icon.svg";
import { GInput } from "@/components/inputs/GInput";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";

const ForgotPassword = () => {
  return (
    <Row className="h-full">
      <Col xs={14}>
        <Row className="h-full" justify={"center"} align={"middle"}>
          <Col xs={14}>
            <div className="mb-6">
              <Image src={logo} alt="" />
            </div>
            <div className="bg-white  border border-bayfi-green-50 rounded-lg p-8 ">
              <div className="flex  flex-col ">
                <Text value="Forgot password?" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="We've all been here before; Let's reset it."
                  />
                </div>
              </div>
              <div className="mt-6">
                <GInput
                  label="Email"
                  placeholder="Your email address"
                  icon={mailIcon}
                />
              </div>
              <div className="mt-4">
                <Button
                  type="bgGreen"
                  text="Send reset link"
                  fullWidth
                  loading={false}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={10}>
        <AnimatedAuthSide />

      </Col>
    </Row>
  );
};

export default ForgotPassword;
