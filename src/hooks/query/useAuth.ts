import { login, otpVerificationService, register, resendOtpVerificationService } from "@/services";
import { OtpVerificationInterface, PostLoginInterface, RegisterInterface, ResendOtpVerificationInterface } from "@/types/auth.types";
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

// for OTP
export const useOtp = (sc: (val:any) => void) => {
  return useMutation({
    mutationFn: (payload: OtpVerificationInterface) => {
      return otpVerificationService(payload)
    },
    onSuccess: (data) => {
      sc(data)
    }
  })
}

// for Resend OTP
export const useResendOtp = (sc: (val:any) => void) => {
  return useMutation({
    mutationFn: (payload: ResendOtpVerificationInterface) => {
      return resendOtpVerificationService(payload)
    },
    onSuccess: (data) => {
      sc(data)
    }
  })
}
