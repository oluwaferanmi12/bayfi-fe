import { login, register } from "@/services";
import { PostLoginInterface, RegisterInterface } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: PostLoginInterface) => {
      return login(payload);
    },
    onSuccess: (data) => {
      sc(data);
    },
    
  });
};

// for Register
export const useRegister = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: RegisterInterface) => {
      return register(payload)
    },
    onSuccess: (data) => {
      sc(data)
    }
  });
};
