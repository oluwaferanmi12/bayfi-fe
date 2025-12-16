import Image from "next/image";
import { ModalWrapper } from "../modal-wrapper";
import lockIcon from "@/assets/svg/bulk-lock.svg";
import { OTPInput } from "@/components/inputs/otp-input";
import { useState } from "react";
import { Button } from "@/components/buttons";
import { useCreatePin } from "@/hooks/query";
import { useQueryClient } from "@tanstack/react-query";

export const SetPinModal = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const queryClient = useQueryClient();
  const [otpValue, setOtpValue] = useState("");
  const { mutate, isPending } = useCreatePin((val) => {
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    close();
  });
  const [errorInput, setErrorInput] = useState("");
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
        {errorInput && (
          <p className="text-[#FF3B30] font-grotesk-medium text-base my-2">
            {errorInput}
          </p>
        )}

        <div className="mt-4">
          <Button
            action={() => {
              if (!otpValue) {
                setErrorInput("Otp is required");
              } else if (otpValue.length < 4) {
                setErrorInput("Invalid OTP format");
              } else {
                mutate(otpValue);
              }
            }}
            text="Setup pin"
            type="bgGreen"
            loading={isPending}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};
