"use client";
import { Col, Row } from "antd";
import { Text } from "@/components/texts/text";
import { Button } from "@/components/buttons";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import mailIcon from "@/assets/svg/input-message-icon.svg";
import { GInput } from "@/components/inputs/GInput";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForgotPasswordEmail } from "@/hooks/query";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  
  const forgotPasswordEmailMutate = useForgotPasswordEmail((data) => {
    toast.success("An otp was sent to your email");
    localStorage.setItem("userEmail", email);
    router.replace("/forgot-password/verify-otp");
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
                  setInput={setEmail}
                  icon={mailIcon}
                />
              </div>
              <div className="mt-4">
                <Button
                  action={() => {
                    forgotPasswordEmailMutate.mutate({ email });
                  }}
                  type="bgGreen"
                  text="Submit"
                  fullWidth
                  loading={forgotPasswordEmailMutate.isPending}
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

export default ForgotPassword;
