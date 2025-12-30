import Image from "next/image";
import { ModalWrapper } from "../modal-wrapper";
import lockIcon from "@/assets/svg/bulk-lock.svg";
import { OTPInput } from "@/components/inputs/otp-input";
import { useEffect, useState } from "react";
import { Button } from "@/components/buttons";
import { useCreatePin } from "@/hooks/query";
import { useQueryClient } from "@tanstack/react-query";
import { BottomDrawer } from "@/components/bottom-drawers/bottom-drawer";

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

  const handleMutate = () => {
    if (!otpValue) {
      setErrorInput("Otp is required");
    } else if (otpValue.length < 4) {
      setErrorInput("Invalid OTP format");
    } else {
      mutate(otpValue);
    }
  };

  function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined") return;

      const media = window.matchMedia(query);
      const onChange = () => setMatches(media.matches);

      onChange(); // set initial value
      media.addEventListener?.("change", onChange);
      return () => media.removeEventListener?.("change", onChange);
    }, [query]);

    return matches;
  }

  const isLargeUp = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {/* <ModalWrapper hideHeader modalActive={open} onClose={close}>
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
        </ModalWrapper> */}
      {isLargeUp ? (
        <BigscreenModal
          errorInput={errorInput}
          isPending={isPending}
          open={open}
          close={close}
          otpValue={otpValue}
          setErrorInput={setErrorInput}
          setOtpValue={setOtpValue}
          handleMutate={handleMutate}
        />
      ) : (
        <MobileModal
          errorInput={errorInput}
          isPending={isPending}
          open={open}
          close={close}
          otpValue={otpValue}
          setErrorInput={setErrorInput}
          setOtpValue={setOtpValue}
          handleMutate={handleMutate}
        />
      )}
    </>
  );
};

const BigscreenModal = ({
  open,
  otpValue,
  setOtpValue,
  errorInput,
  setErrorInput,
  isPending,
  close,
  handleMutate,
}: {
  open: boolean;
  otpValue: string;
  setOtpValue: (val: string) => void;
  errorInput: string;
  setErrorInput: (val: string) => void;
  isPending: boolean;
  close: () => void;
  handleMutate: () => void;
}) => {
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
              handleMutate();
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

const MobileModal = ({
  open,
  otpValue,
  setOtpValue,
  errorInput,
  setErrorInput,
  isPending,
  close,
  handleMutate,
}: {
  open: boolean;
  otpValue: string;
  setOtpValue: (val: string) => void;
  errorInput: string;
  setErrorInput: (val: string) => void;
  isPending: boolean;
  close: () => void;
  handleMutate: () => void;
}) => {
  return (
    <BottomDrawer
      open={open}
      onClose={close}
      title="Set Transaction Pin"
      height="short"
    >
      <div className="flex justify-center items-center flex-col mt-4">
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

        <div className="mt-6 w-full">
          <Button
            fullWidth
            action={() => {
              handleMutate();
            }}
            text="Setup pin"
            type="bgGreen"
            loading={isPending}
          />
        </div>
      </div>
    </BottomDrawer>
  );
};
