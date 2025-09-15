import { fetchUserProfileService } from "@/services/profile.service";
import { useMutation } from "@tanstack/react-query";

export const useFetchProfile = (sc: (val:string) => void) => {
    return useMutation({
        mutationFn: () => {
            return fetchUserProfileService()
        },
        onSuccess: (data) => {
            sc(data)
        }
    })

}