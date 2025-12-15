import Image from "next/image";
import { ModalWrapper } from "../modal-wrapper";
import lockIcon from "@/assets/svg/bulk-lock.svg";
import { OTPInput } from "@/components/inputs/otp-input";
import { useState } from "react";
import { Button } from "@/components/buttons";

export const SetPinModal = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const [otpValue, setOtpValue] = useState("");
  return (
    <ModalWrapper hideHeader modalActive={open} onClose={close}>
      <div className="flex justify-center items-center flex-col">
        <Image src={lockIcon} alt="" />

        <p className="mt-4 font-grotesk-semi-bold text-2xl">
          Let&apos;s set your transaction pin
        </p>
        <div className="mt-4">
          <OTPInput
            noOfInput={4}
            value={otpValue}
            onChange={(val) => {
              setOtpValue(val);
            }}
          />
        </div>
        <div className="mt-4">
          <Button text="Setup pin" type="bgGreen" loading={false} />
        </div>
      </div>
    </ModalWrapper>
  );
};
