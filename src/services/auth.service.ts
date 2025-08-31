import { axiosInstance } from "@/axios";
import { LoginResponse, PostLoginInterface, RegisterInterface, RegisterResponseInterface } from "@/types";


export const login = async (payload: PostLoginInterface): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post("/auth/login", payload);
  return data.data;
};

// Register
export const register = async(payload: RegisterInterface): Promise<RegisterResponseInterface> => {
  const {data} = await axiosInstance.post("/auth/register", payload)
  return data.data
}
