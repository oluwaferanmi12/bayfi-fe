import { axiosInstance } from "@/axios";
import { fetchUserProfileResponseInterface } from "@/types/profile-services.type";

export const fetchUserProfileService = async () => {
    const { data } = await axiosInstance.get("/user/profile")
    return data.data;
}
