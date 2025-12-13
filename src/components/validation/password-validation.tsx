import { useEffect, useState } from "react";

export const PasswordValidation = ({
  password,
  setPasswordValidated,
}: {
  password: string;
  setPasswordValidated: (val: boolean) => void;
}) => {
  const [validatedObject, setValidatedObject] = useState({
    uppercase: false,
    lowercase: false,
    numberIncluded: false,
    specialCharacter: false,
    length: false,
  });

  const handlePasswordValidated = () => {
    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    setPasswordValidated(strongPasswordRegex.test(password));
  };

  const handleValidateText = () => {
    if (/[A-Z]/.test(password)) {
      setValidatedObject((prev) => ({ ...prev, uppercase: true }));
    } else {
      setValidatedObject((prev) => ({ ...prev, uppercase: false }));
    }

    if (/[a-z]/.test(password)) {
      setValidatedObject((prev) => ({ ...prev, lowercase: true }));
    } else {
      setValidatedObject((prev) => ({ ...prev, lowercase: false }));
    }

    if (/\d/.test(password)) {
      setValidatedObject((prev) => ({ ...prev, numberIncluded: true }));
    } else {
      setValidatedObject((prev) => ({ ...prev, numberIncluded: false }));
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setValidatedObject((prev) => ({ ...prev, specialCharacter: true }));
    } else {
      setValidatedObject((prev) => ({ ...prev, specialCharacter: false }));
    }

    if (password.length >= 8) {
      setValidatedObject((prev) => ({ ...prev, length: true }));
    } else {
      setValidatedObject((prev) => ({ ...prev, length: false }));
    }
  };

  useEffect(() => {
    handleValidateText();
    handlePasswordValidated();
  }, [password]);
  return (
    <>
      {password.length > 0 && (
        <div>
          <ValidatorWrapper
            text="Must have atleast 8 characters"
            validated={validatedObject.length}
          />
          <ValidatorWrapper
            text="Must have atleast one uppercase"
            validated={validatedObject.uppercase}
          />
          <ValidatorWrapper
            text="Must have atleast one lowercase"
            validated={validatedObject.lowercase}
          />
          <ValidatorWrapper
            text="Must have atleast one number"
            validated={validatedObject.numberIncluded}
          />
          <ValidatorWrapper
            text="Must have atleast one special character"
            validated={validatedObject.specialCharacter}
          />
        </div>
      )}
    </>
  );
};

export const ValidatorWrapper = ({
  validated,
  text,
}: {
  validated: boolean;
  text: string;
}) => {
  return (
    <p
      className={`text-xs mb-1  ${validated ? "text-[#879D29]" : "text-[#4B5563]"}`}
    >
      {text}
    </p>
  );
};
