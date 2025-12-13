import { useChangePassword } from "@/hooks/query/useProfile";
import { ChangePasswordPayload } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export const useChangePasswordHook = () => {
  const mutate = useChangePassword(() => {
    toast.success("Password saved");
  });
  const [payload, setPayload] = useState<ChangePasswordPayload>({
    oldPassword: "",
    newPassword: "",
  });
  const handleChangePassword = () => {
    // validate that the two passwords match
    mutate.mutate(payload);
  };

  return {
    handleChangePassword,
    passwordLoading: mutate.isPending,
    payload,
    setPayload,
  };
};
