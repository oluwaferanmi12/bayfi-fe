export interface fetchUserProfileInterface {
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
}

export interface fetchUserProfileDataInterface {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  verified: false;
}

export interface fetchUserProfileResponseInterface {
  status: true;
  statusCode: 0;
  message: string;
  details: null;
  data: fetchUserProfileDataInterface;
  metadata: null;
  timeStamp: string;
}

export interface updateUserProfileInterface {
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
}
