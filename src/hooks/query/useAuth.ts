import { login } from "@/services";
import { PostLoginInterface } from "@/types/auth.types";
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

