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
import { useRouter } from "next/navigation";
import { useState } from "react";
import mobileIcon from "@/assets/svg/mobileIcon.svg";
import { useRegister } from "@/hooks/query/useAuth";
import { toast } from "sonner";

const Register = () => {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const payloadObj = {
    firstname,
    lastname,
    email,
    phoneNumber,
    username,
    password,
  };

  const registerMutate = useRegister((data) => {
    toast.success("Successfuly Registered");
    localStorage.setItem("userEmail", email);
    router.push("/otp");
  });

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
                <div className="flex flex-col xl:flex-row gap-2 w-full ">
                  <div className="w-full">
                    <GInput
                      label="First Name"
                      placeholder="Enter your first name"
                      icon={userIconButton}
                      setInput={setFirstname}
                    />
                  </div>

                  <div className="w-full">
                    <GInput
                      label="Last Name"
                      placeholder="Enter your last name"
                      icon={userIconButton}
                      setInput={setLastname}
                    />
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-2 w-full ">
                  <div className="w-full">
                    <GInput
                      label="Username"
                      placeholder="Your username"
                      icon={userIconButton}
                      setInput={setUsername}
                    />
                  </div>
                  <div className="w-full">
                    <GInput
                      label="Phone number"
                      icon={mobileIcon}
                      placeholder="Your phone number"
                      setInput={setPhoneNumber}
                    />
                  </div>
                </div>

                <GInput
                  label="Email"
                  placeholder="Your email address"
                  icon={mailIcon}
                  setInput={setEmail}
                />

                <GInput
                  label="Password"
                  placeholder="Enter password"
                  icon={inputPasswordIcon}
                  type={"password"}
                  setInput={setPassword}
                />
              </div>
              <div className="mt-4">
                <Button
                  action={() => {
                    registerMutate.mutate(payloadObj);
                  }}
                  type="bgGreen"
                  text="Register"
                  fullWidth
                  loading={registerMutate.isPending}
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
