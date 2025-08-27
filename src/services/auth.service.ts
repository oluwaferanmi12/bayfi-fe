import { axiosInstance } from "@/axios";
import { LoginResponse, PostLoginInterface } from "@/types";
export const login = async (
  payload: PostLoginInterface
): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post("/auth/admin/login", payload);
  return data.data;
};
