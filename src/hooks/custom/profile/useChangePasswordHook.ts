import { useChangePassword } from "@/hooks/query/useProfile";
import { ChangePasswordPayload } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export const useChangePasswordHook = () => {
  const mutate = useChangePassword(() => {
    toast.success("Password saved");
    setPayload({ oldPassword: "", newPassword: "" });
  });
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [payload, setPayload] = useState<ChangePasswordPayload>({
    oldPassword: "",
    newPassword: "",
  });
  const handleChangePassword = () => {
    // validate that the two passwords match
    if (passwordValidated) {
      mutate.mutate(payload);
    }
  };

  return {
    handleChangePassword,
    passwordLoading: mutate.isPending,
    payload,
    setPayload,
    setPasswordValidated,
  };
};
