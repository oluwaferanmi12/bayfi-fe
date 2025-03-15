import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import arrowIcon from "@/assets/svg/arrow-bidirection.svg";
import { GInput } from "@/components/inputs/GInput";
import mailIcon from "@/assets/svg/input-message-icon.svg";

const Junk = () => {
  return (
    <div className={"font-grotesk-extra-bold"}>
      <Text value="Email" type="input-text" />
      <Text value="Welcome Back" type="header-32" />
      <Text value="Login to continue your journey" type="header-subtext" />
      <Text value="Dont have an account ?" type="text-plain-18" />
      <Text value="Forgot Password" type="text-plain-16" />
      <Text value="Sign up" type="text-plain-dark-18" />
      <Button type="bgGreen" text="Login" loading={false} fullWidth />
      <Button icon={arrowIcon} type="bgGreen" text="Login" loading={false} />
      <Button type="bgGreen" text="Login" loading={true} disabled />
      <Button type="bgBlack" text="Login" loading={false} />
      <Button type="bgBlack" text="Login" loading={false} fullWidth />
      <Button type="bgBlack" text="Login" loading={true} disabled />
      <Button icon={arrowIcon} type="bgWhite" text="Login" loading={false} />
      <div className="bg-bayfi-black-500 py-3">
        <Button icon={arrowIcon} type="bgWhite" text="Login" loading={false} />
        <Button
          icon={arrowIcon}
          type="bgWhite"
          text="Login"
          loading={true}
          disabled
        />
        <Button
          type="bgWhite"
          icon={arrowIcon}
          text="Login"
          loading={false}
          fullWidth
          iconPosition="left"
        />
      </div>
      <GInput icon={mailIcon} placeholder="Your email address" label="Email" />
      <GInput icon={mailIcon} placeholder="Your email address" label="Email" />
      <GInput
        icon={mailIcon}
        placeholder="Enter Password"
        label="Password"
        type={"password"}
      />
    </div>
  );
};

export default Junk;
