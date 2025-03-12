import { Text } from "@/components/texts/text";

const Register = () => {
  return (
    <div className={"font-grotesk-extra-bold"}>
      <Text value="Email" type="input-text" />
      <Text value="Welcome Back" type="header-32" />
      <Text value="Login to continue your journey" type="header-subtext" />
      <Text value="Dont have an account ?" type="text-plain-18" />
      <Text value="Forgot Password" type="text-plain-16" />
      <Text value="Sign up" type="text-plain-dark-18" />
    </div>
  );
};

export default Register;
