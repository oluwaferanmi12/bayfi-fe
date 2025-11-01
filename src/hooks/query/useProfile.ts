import { fetchUserProfileService } from "@/services/profile.service";
import { useQuery } from "@tanstack/react-query";

export const useFetchProfile = () => {
    return useQuery({
        queryFn: async () => {
            return await fetchUserProfileService();
        },
        queryKey: ["get-profile"],
    });
}