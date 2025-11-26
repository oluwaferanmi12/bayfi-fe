import {
  fetchUserProfileService,
  logout,
  updateProfile,
} from "@/services/profile.service";
import { PostProfileInterface } from "@/types/profile.types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetchProfile = () => {
  return useQuery({
    queryFn: async () => {
      return await fetchUserProfileService();
    },
    queryKey: ["get-profile"],
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false, 
  });
};

export const useUpdateProfile = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: PostProfileInterface) => {
      return updateProfile(payload);
    },
    onSuccess: sc,
  });
};

export const useUpdatePin = () => {};

export const useSavePin = () => {};

export const useLogout = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: logout,
    onSuccess: sc,
  });
};
