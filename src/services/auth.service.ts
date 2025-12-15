import { axiosInstance } from "@/axios";
import { ForgotPasswordEmailInterface, GeneralResponseInterface, LoginResponse, OtpVerificationInterface, OtpVerificationResponseInterface, PostLoginInterface, RegisterInterface, RegisterResponseInterface, ResendOtpVerificationInterface, ResendOtpVerificationResponseInterface, ResetPasswordInterface } from "@/types";


export const login = async (payload: PostLoginInterface): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post("/auth/login", payload);
  return data.data;
};

// Register
export const register = async(payload: RegisterInterface): Promise<RegisterResponseInterface> => {
  const {data} = await axiosInstance.post("/auth/register", payload)
  return data.data
}

// OTP Verification
export const otpVerificationService = async(payload: OtpVerificationInterface): Promise<OtpVerificationResponseInterface> => {
 const { data } = await axiosInstance.post("/auth/verify/otp", payload)
  return data.data
}


// Resend OTP Verification
export const resendOtpVerificationService = async(payload: ResendOtpVerificationInterface): Promise<ResendOtpVerificationResponseInterface> => {
 const { data } = await axiosInstance.post("/auth/generate/otp", payload)
  return data.data
}

// Forgot password
export const forgotPasswordEmailService = async (payload: ForgotPasswordEmailInterface): Promise<ResendOtpVerificationResponseInterface> => {
  const { data } = await axiosInstance.post("/auth/password/otp", payload)
  return data.data
}

export const forgotPasswordOtpVerificationService = async(payload: OtpVerificationInterface): Promise<GeneralResponseInterface> => {
 const { data } = await axiosInstance.post("/auth/password/verify", payload)
  return data.data
}

export const resetPasswordService = async(payload: ResetPasswordInterface) : Promise<ResendOtpVerificationResponseInterface> => {
  const { data } = await axiosInstance.post("/auth/password/reset", payload)
  return data.data
}



export const logoutService = async (): Promise<GeneralResponseInterface> => {
  const { data } = await axiosInstance.post("/auth/logout")
  return data.data
}