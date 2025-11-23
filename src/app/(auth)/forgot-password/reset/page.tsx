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
import { useEffect, useState } from "react";
import { useLogin, useResetPassowrd } from "@/hooks/query";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { OTPInput } from "@/components/inputs/otp-input";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const router = useRouter();

  const resetPasswordMutate = useResetPassowrd((data) => {
    toast.success("Reset Successful");
    router.replace("/login");
  });

  useEffect(() => {
    const email_ = localStorage.getItem("userEmail");
    const otp = localStorage.getItem("otp");
    setEmail(email_ ?? "");
    setOtp(otp ?? "");
  }, []);

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
                <Text value="Reset Password" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="Fill in correct details to reset your password"
                  />
                </div>
              </div>

              <div className="mt-6">
                <GInput
                  label="Password"
                  placeholder="Enter password"
                  icon={inputPasswordIcon}
                  type={"password"}
                  setInput={setNewPassword}
                />
                <GInput
                  label="Confirm Password"
                  placeholder="Confirm password"
                  icon={inputPasswordIcon}
                  type={"password"}
                  setInput={setConfirmNewPassword}
                />
              </div>
              <div className="mt-4">
                <Button
                  action={() => {
                    resetPasswordMutate.mutate({
                      email,
                      otp,
                      newPassword,
                      confirmNewPassword,
                    });
                  }}
                  type="bgGreen"
                  text="Reset Password"
                  fullWidth
                  loading={resetPasswordMutate.isPending}
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

export default ResetPassword;
