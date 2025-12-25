import { UIProfile } from "@/interfaces/interfaces";
import { useProfileStore } from "@/store/userProfileStore";
import { useEffect, useState } from "react";

export const useKycProfile = () => {
  const { profile } = useProfileStore();
  const [formData, setFormData] = useState<UIProfile>({
    avatar: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    verified: false,
  });
  const [bvn, setBvn] = useState("");
  useEffect(() => {
    if (profile) {
      setFormData({
        avatar: profile.avatar,
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        phoneNumber: profile.phoneNumber,
        verified: profile.verified,
      });
    }
  }, [profile]);
  return { formData, setFormData , setBvn, bvn};
};
