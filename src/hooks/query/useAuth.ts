import { createTransactionPin, forgotPasswordEmailService, forgotPasswordOtpVerificationService, login, logoutService, otpVerificationService, register, resendOtpVerificationService, resetPasswordService } from "@/services";
import { ForgotPasswordEmailInterface, OtpVerificationInterface, PostLoginInterface, RegisterInterface, ResendOtpVerificationInterface, ResetPasswordInterface } from "@/types/auth.types";
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

//############################## Forgot password
export const useForgotPasswordEmail = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: ForgotPasswordEmailInterface) => {
      return forgotPasswordEmailService(payload);
    },
    onSuccess: (data) => {
      sc(data)
    }
  })
}

// OTP for Forgot Password
export const useForgotPasswordOtp = (sc: (val:any) => void) => {
  return useMutation({
    mutationFn: (payload: OtpVerificationInterface) => {
      return forgotPasswordOtpVerificationService(payload)
    },
    onSuccess: (data) => {
      sc(data)
    }
  })
}

// RESET PASSOWRD
export const useResetPassowrd = (sc : (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: ResetPasswordInterface) => {
      return resetPasswordService(payload)
    },
    onSuccess: (data) => {
      sc(data)
    }
  })
}
//############################## 

export const useCreateTransactionPin = () => {
  return useMutation({
    mutationFn: () => {
      return createTransactionPin()
    }
  })
}

// Logout
export const useLogout = (sc : (val: any) => void) => {
  return useMutation({
    mutationFn: () => {
      return logoutService();
    },
    onSuccess: (data) => {
      sc(data)
    },
  })
}


