export interface PostLoginInterface {
  email: string;
  password: string;
}

export interface UserDetailResponse {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  userType: string;
  verified: boolean;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userDetailsResponse: UserDetailResponse;
  requireLogout: boolean;
  require2Fa: boolean;
}

export interface RegisterInterface {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  phoneNumber: string;
  password: string;
}
export interface RegisterResponseInterface {
  status: true;
  statusCode: number;
  message: string;
  details: null;
  data: string;
  metadata: null;
  timeStamp: string;
}

export interface OtpVerificationInterface {
  otp: string;
  otpMedium: string;
}

export interface OtpVerificationResponseInterface {
  accessToken: string;
  refreshToken: string;
  userDetailsResponse: UserDetailResponse;
  requireLogout: boolean;
  require2Fa: boolean;
}
export interface ResendOtpVerificationInterface {
  email: string;
}

export interface ResendOtpVerificationResponseInterface {
  status: true;
  statusCode: number;
  message: string;
  details: null;
  data: string;
  metadata: null;
  timeStamp: string;
}

export type Role = "ADMIN" | "USER";
