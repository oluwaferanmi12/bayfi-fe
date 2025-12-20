"use client";

import { useEffect, useRef, useState } from "react";

export const OTPInput = ({
  value,
  onChange,
  centered = true,
  noOfInput,
}: {
  value: string;
  onChange: (val: string) => void;
  centered?: boolean;
  noOfInput?: number;
}) => {
  const [arrayInput, setArrayInput] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const backSpaceRef = useRef<boolean>(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (noOfInput) {
      setArrayInput(Array(noOfInput).fill(""));
    }
  }, [noOfInput]);

  useEffect(() => {
    // Sync arrayInput with value from parent
    if (value && value.length === arrayInput.length) {
      setArrayInput(value.split(""));
    }
  }, [value, arrayInput.length]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    indexVal: number
  ) => {
    if (e.key === "Backspace") {
      backSpaceRef.current = indexVal === 0 ? false : true;
      if (indexVal >= 1 && !arrayInput[indexVal]) {
        inputRefs.current[indexVal - 1]?.focus();
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputIndex: number
  ) => {
    const arrayLength = arrayInput.length;
    const nextIndex = inputIndex + 1;

    if (backSpaceRef.current) {
      backSpaceRef.current = false;
      if (arrayInput[inputIndex]) {
        const spreadArray = [...arrayInput];
        spreadArray[inputIndex] = "";
        setArrayInput([...spreadArray]);
        onChange(spreadArray.join(""));
      }
    } else {
      const newArrayInput = [...arrayInput];
      newArrayInput[inputIndex] = e.target.value.slice(-1);
      setArrayInput([...newArrayInput]);
      onChange(newArrayInput.join(""));
      if (nextIndex <= arrayLength - 1) {
        inputRefs.current[inputIndex + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, arrayInput.length);
    if (/^\d+$/.test(pasteData)) {
      const newArrayInput = pasteData
        .split("")
        .concat(Array(arrayInput.length).fill(""))
        .slice(0, arrayInput.length);
      setArrayInput(newArrayInput);
      onChange(newArrayInput.join(""));
      const nextEmptyIndex = newArrayInput.findIndex((val) => val === "");
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus();
      } else {
        inputRefs.current[arrayInput.length - 1]?.focus();
      }
    }
  };

  return (
    <div className={`flex gap-2 ${centered ? "justify-center" : ""}`}>
      {arrayInput.map((item, index) => {
        return (
          <input
            inputMode="numeric"
            onPaste={handlePaste}
            onKeyDown={(e) => {
              handleKeyDown(e, index);
            }}
            value={arrayInput[index]}
            onChange={(e) => {
              handleInputChange(e, index);
            }}
            key={index}
            ref={(el) => {
              if (inputRefs.current) {
                inputRefs.current[index] = el;
              }
            }}
            className="bg-bayfi-grey-400 text-center outline-none border-none rounded-lg h-[60px] w-[60px]"
          />
        );
      })}
    </div>
  );
};
