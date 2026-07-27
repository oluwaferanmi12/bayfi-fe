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

const RESEND_COOLDOWN_SECONDS = 60;
const RESEND_EXPIRY_STORAGE_KEY = "otpResendExpiry:forgotPassword";

const getRemainingSeconds = (expiry: number) =>
  Math.max(Math.ceil((expiry - Date.now()) / 1000), 0);

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [otpMedium, setOtpMedium] = useState("");
  const [email, setEmail] = useState("");
  const [resendExpiry, setResendExpiry] = useState<number | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);
  const router = useRouter();

  const verifyOtpMutate = useForgotPasswordOtp((data) => {
    localStorage.setItem("otp", otp);
    toast.success("Verification Successful");
    localStorage.removeItem(RESEND_EXPIRY_STORAGE_KEY);
    router.replace("/forgot-password/reset");
  });

  const resendOtpMutate = useResendOtp((data) => {
    toast.success("An Otp has been sent to your registered email");
    const expiry = Date.now() + RESEND_COOLDOWN_SECONDS * 1000;
    localStorage.setItem(RESEND_EXPIRY_STORAGE_KEY, String(expiry));
    setResendExpiry(expiry);
  });

  useEffect(() => {
    const _email = localStorage.getItem("userEmail") ?? "";
    setEmail(_email);
    setOtpMedium(_email);
  }, []);

  // Start the cooldown the moment the user lands on this page (including a
  // refresh), persisting it as an expiry timestamp in localStorage so the
  // countdown shown is always derived from wall-clock time.
  useEffect(() => {
    const expiry = Date.now() + RESEND_COOLDOWN_SECONDS * 1000;
    localStorage.setItem(RESEND_EXPIRY_STORAGE_KEY, String(expiry));
    setResendExpiry(expiry);
  }, []);

  useEffect(() => {
    if (resendExpiry === null) return;
    setResendCooldown(getRemainingSeconds(resendExpiry));
    const interval = setInterval(() => {
      setResendCooldown(getRemainingSeconds(resendExpiry));
    }, 1000);
    return () => clearInterval(interval);
  }, [resendExpiry]);

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
                <Text value="Enter OTP" type="header-32" />
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
                  text={
                    resendCooldown > 0
                      ? `Resend code in ${resendCooldown}s`
                      : "Resend code"
                  }
                  loading={resendOtpMutate.isPending}
                  disabled={resendCooldown > 0}
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
