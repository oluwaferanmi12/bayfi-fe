"use client";
import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import { Col, Row } from "antd";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";
import { OTPInput } from "@/components/inputs/otp-input";
import { useState } from "react";

function CreatePin() {
  const [pinVal, setPinVal] = useState("");
  return (
    <Row className="h-full">
      <Col lg={16} xs={24}>
        <Row className="h-full" justify={"center"} align={"middle"}>
          <Col lg={12} xs={22}>
            <div className="mb-6">
              <Image src={logo} alt="" />
            </div>
            <div className="bg-white  border border-bayfi-green-50 rounded-lg p-8 ">
              <div className="flex justify-center flex-col items-center">
                <Text value="Create Pin" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="Create a pin for transactions"
                  />
                </div>
              </div>
              <div className="mt-6">
                <OTPInput noOfInput={4} value={pinVal} onChange={setPinVal} />
              </div>

              <div className="mt-4">
                <Button
                  action={() => {}}
                  type="bgGreen"
                  text="Continue"
                  fullWidth
                  loading={false}
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
}

export default CreatePin;
