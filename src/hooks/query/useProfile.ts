import {
  changePassword,
  doKycBvn,
  doKycNin,
  fetchUserProfileService,
  getUser,
  logout,
  tiers,
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

export const useGetUser = () => {
  return useQuery({
    queryFn: getUser,
    queryKey: ["get-user"],
  });
};

export const useChangePassword = (sc: (data: any) => void) => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: sc,
  });
};

export const useDoKycBvn = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: doKycBvn,
    onSuccess: sc,
  });
};

export const useDoKycNin = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: doKycNin,
    onSuccess: sc,
  });
};

export const useGetTiers = () => {
  return useQuery({
    queryFn: tiers,
    queryKey: ["get-tiers"],
  });
};
