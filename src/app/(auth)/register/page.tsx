"use client";
import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import arrowIcon from "@/assets/svg/arrow-bidirection.svg";
import { GInput } from "@/components/inputs/GInput";
import mailIcon from "@/assets/svg/input-message-icon.svg";
import { Col, Row } from "antd";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import inputPasswordIcon from "@/assets/svg/input-password-icon.svg";
import googleIcon from "@/assets/svg/googleIcon.svg";
import facebookIcon from "@/assets/svg/facebookIcon.svg";
import appleIcon from "@/assets/svg/appleIcon.svg";
import Link from "next/link";
import userIconButton from "@/assets/svg/input-profile-icon.svg";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";

const Register = () => {
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
                <Text value="Welcome Back" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="Login to continue your journey"
                  />
                </div>
              </div>

              <div className="flex-between my-4">
                <Image className="cursor-pointer" src={googleIcon} alt="" />
                <Image className="cursor-pointer" src={facebookIcon} alt="" />
                <Image className="cursor-pointer" src={appleIcon} alt="" />
              </div>

              <div className="w-[70%] flex-between mx-auto my-4">
                <span className="w-full">
                  <hr
                    style={{
                      height: "1px" /* Adjust thickness */,
                      backgroundColor: "#DCDCDC" /* Sets the color */,
                      border: "none",
                    }}
                  />
                </span>
                <span className="px-8">
                  <Text value="OR" type="body-medium" />
                </span>
                <span className="w-full">
                  <hr
                    style={{
                      height: "1px" /* Adjust thickness */,
                      backgroundColor: "#DCDCDC" /* Sets the color */,
                      border: "none",
                    }}
                  />
                </span>
              </div>

              <div className="mt-6">
                <div className="flex flex-col xl:flex-row gap-2 w-full ">
                  <div className="w-full">
                    <GInput
                      label="First Name"
                      placeholder="Enter your first name"
                      icon={userIconButton}
                    />
                  </div>

                  <div className="w-full">
                    <GInput
                      label="Last Name"
                      placeholder="Enter your last name"
                      icon={userIconButton}
                    />
                  </div>
                </div>
                <GInput
                  label="Email"
                  placeholder="Your email address"
                  icon={mailIcon}
                />
                <GInput
                  label="Password"
                  placeholder="Enter password"
                  icon={inputPasswordIcon}
                  type={"password"}
                />
              </div>
              <div className="mt-4">
                <Button
                  type="bgGreen"
                  text="Register"
                  fullWidth
                  loading={false}
                />
              </div>

              <div className="flex-center gap-1">
                <Text value="Already have an account?" type={"text-plain-18"} />
                <Link href="/login">
                  <Text value=" Sign in" type={"text-plain-dark-18"} />
                </Link>
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

export default Register;
