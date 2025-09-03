import { axiosInstance } from "@/axios";
import { LoginResponse, OtpVerificationInterface, OtpVerificationResponseInterface, PostLoginInterface, RegisterInterface, RegisterResponseInterface, ResendOtpVerificationInterface, ResendOtpVerificationResponseInterface } from "@/types";


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
