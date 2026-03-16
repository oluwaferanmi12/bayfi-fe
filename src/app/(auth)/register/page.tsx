"use client";

import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import { GInput } from "@/components/inputs/GInput";
import mailIcon from "@/assets/svg/input-message-icon.svg";
import { Col, Row } from "antd";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import inputPasswordIcon from "@/assets/svg/input-password-icon.svg";
import Link from "next/link";
import userIconButton from "@/assets/svg/input-profile-icon.svg";
import { AnimatedAuthSide } from "@/components/wrappers/right-auth-wrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import mobileIcon from "@/assets/svg/mobileIcon.svg";
import { useRegister } from "@/hooks/query/useAuth";
import { toast } from "sonner";
import { PasswordValidation } from "@/components/validation/password-validation";
import { isValidEmail } from "@/utils/email-validate";

const Register = () => {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [errorPayload, setErrorPayload] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
    phoneNumber: "",
    referralCode: "",
  });

  const payloadObj = {
    firstname,
    lastname,
    email,
    phoneNumber,
    username,
    password,
    referralCode,
  };

  const handleValidate = () => {
    let validated = true;
    if (!payloadObj.firstname) {
      setErrorPayload((prev) => ({
        ...prev,
        firstName: "First name is required",
      }));
      validated = false;
    } else {
      setErrorPayload((prev) => ({
        ...prev,
        firstName: "",
      }));
    }
    if (!payloadObj.lastname) {
      setErrorPayload((prev) => ({
        ...prev,
        lastName: "Last name is required",
      }));
      validated = false;
    } else {
      setErrorPayload((prev) => ({
        ...prev,
        lastName: "",
      }));
    }

    if (!payloadObj.username) {
      setErrorPayload((prev) => ({
        ...prev,
        userName: "Username is required",
      }));
      validated = false;
    } else {
      setErrorPayload((prev) => ({
        ...prev,
        userName: "",
      }));
    }

    if (!payloadObj.phoneNumber) {
      setErrorPayload((prev) => ({
        ...prev,
        phoneNumber: "Phone number is required",
      }));
      validated = false;
    } else {
      setErrorPayload((prev) => ({
        ...prev,
        phoneNumber: "",
      }));
    }

    if (!payloadObj.email) {
      setErrorPayload((prev) => ({
        ...prev,
        email: "Email is required",
      }));
      validated = false;
    } else if (!isValidEmail(payloadObj.email)) {
      setErrorPayload((prev) => ({
        ...prev,
        email: "Invalid email format",
      }));
      validated = false;
    } else {
      setErrorPayload((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (!payloadObj.password) {
      setErrorPayload((prev) => ({
        ...prev,
        password: "Password is required",
      }));
      validated = false;
    } else if (!passwordValidated) {
      setErrorPayload((prev) => ({
        ...prev,
        password: "Password does not match requirement",
      }));
      validated = false;
    } else {
      setErrorPayload((prev) => ({
        ...prev,
        password: "",
      }));
    }
    return validated;
  };

  const handleSubmit = () => {
    const validated = handleValidate();
    if (!validated) {
      return;
    }
    registerMutate.mutate(payloadObj);
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
                <Text value="Join us" type="header-32" />
                <div className="mt-2">
                  <Text
                    type="header-subtext"
                    value="Register to enjoy seamless trading and best rates"
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
                      error={errorPayload.firstName}
                    />
                  </div>

                  <div className="w-full">
                    <GInput
                      label="Last Name"
                      placeholder="Enter your last name"
                      icon={userIconButton}
                      setInput={setLastname}
                      error={errorPayload.lastName}
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
                      error={errorPayload.userName}
                    />
                  </div>
                  <div className="w-full">
                    <GInput
                      label="Phone number"
                      icon={mobileIcon}
                      placeholder="Your phone number"
                      setInput={setPhoneNumber}
                      error={errorPayload.phoneNumber}
                    />
                  </div>
                </div>

                <GInput
                  label="Referral Code (Optional)"
                  placeholder="Your referral code"
                  icon={mailIcon}
                  setInput={setReferralCode}
                  error={errorPayload.referralCode}
                />

                <GInput
                  label="Email"
                  placeholder="Your email address"
                  icon={mailIcon}
                  setInput={setEmail}
                  error={errorPayload.email}
                />

                <GInput
                  label="Password"
                  placeholder="Enter password"
                  icon={inputPasswordIcon}
                  type={"password"}
                  setInput={setPassword}
                  error={errorPayload.password}
                />
              </div>
              <div>
                <PasswordValidation
                  setPasswordValidated={setPasswordValidated}
                  password={password}
                />
              </div>
              <div className="mt-4 flex justify-center gap-2 text-center text-sm text-[#586068]">
                By registering, you agree to our{" "}
                <Link href="/legal" className="text-[#242628] underline">
                  <p className="text-[#BEDD3A]">Terms of Use</p>
                </Link>{" "}
                and{" "}
                <Link href="/legal" className="text-[#242628] underline">
                  <p className="text-[#BEDD3A]">Privacy Policy</p>
                </Link>
                .
              </div>
              <div className="mt-4">
                <Button
                  action={() => {
                    handleSubmit();
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
