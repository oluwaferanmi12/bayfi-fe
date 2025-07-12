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
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";
import { useRouter } from "next/navigation";

const Login = () => {
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
              <div className="flex justify-center flex-col items-center">
                <Text value="Welcome Back" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="Login to continue your journey"
                  />
                </div>
              </div>

              <div className="mt-6">
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
                <div className="flex justify-end cursor-pointer w-full">
                  <Link href="/forgot-password">
                    <Text type="input-text" value="Forgot password?" />
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  action={() => {
                    router.push("/dashboard");
                  }}
                  type="bgGreen"
                  text="Login"
                  fullWidth
                  loading={false}
                />
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
              <div className="flex-between my-4">
                <Image  className="cursor-pointer border" src={googleIcon} alt="" />
                <Image className="cursor-pointer" src={facebookIcon} alt="" />
                <Image className="cursor-pointer" src={appleIcon} alt="" />
              </div>
              <div className="flex-center gap-1">
                <Text value="Don't have an account?" type={"text-plain-18"} />
                <Link href="/register">
                  <Text value=" Sign up" type={"text-plain-dark-18"} />
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

export default Login;
