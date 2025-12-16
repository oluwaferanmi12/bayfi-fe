import { ProfileDataInterface } from "@/types";
import { create } from "zustand";

type ProfileState = {
  profile: ProfileDataInterface | null;
  setProfile: (val: ProfileDataInterface | null) => void;
  clearProfile: () => void;
};

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => {
    set({ profile });
  },
  clearProfile: () => set({ profile: null }),
}));

