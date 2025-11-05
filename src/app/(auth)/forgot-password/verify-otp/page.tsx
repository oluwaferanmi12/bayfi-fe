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
import { useForgotPasswordOtp, useOtp, useResendOtp } from "@/hooks/query";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [otpMedium, setOtpMedium] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const verifyOtpMutate = useForgotPasswordOtp((data) => {
    toast.success("Verification Successful");
    router.push("/forgot-password/reset");
  });

  const resendOtpMutate = useResendOtp((data) => {
    toast.success("An Otp has been sent to your registered email");
  });

  useEffect(() => {
    const _email = localStorage.getItem("userEmail") ?? "";
    setEmail(_email);
    setOtpMedium(_email);
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
              <div className="flex items-center  flex-col ">
                <div>
                  <Image src={likeIcon} alt="" />
                </div>
                <Text value="Account registered Successfuly" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value={`Please provide the OTP sent to ${email}`}
                  />
                </div>
              </div>
              <div className="mt-6 ">
                <OTPInput value={otp} onChange={setOtp} />
              </div>
              <div className="mt-4">
                <Button
                  type="bgGreen"
                  text="Confirm OTP"
                  fullWidth
                  loading={verifyOtpMutate.isPending}
                  action={() => {
                    verifyOtpMutate.mutate({ otp, otpMedium });
                  }}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="bgPlain"
                  text="Resend code"
                  loading={resendOtpMutate.isPending}
                  action={() => {
                    resendOtpMutate.mutate({ email });
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

export default VerifyOtp;
