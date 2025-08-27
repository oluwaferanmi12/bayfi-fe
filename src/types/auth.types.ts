export interface PostLoginInterface {}

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
