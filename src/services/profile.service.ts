import { axiosInstance } from "@/axios";

export const fetchUserProfileService = async () => {
    const { data } = await axiosInstance.get("/user/profile")
    return data.data;
}
