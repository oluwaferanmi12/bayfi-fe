import { useDeleteImage, useSaveImage } from "@/hooks/query";
import { useFetchProfile, useUpdateProfile } from "@/hooks/query/useProfile";
import { UIProfile } from "@/interfaces/interfaces";
import { ProfileType } from "@/interfaces/interfaces-ui";
import { convertImageToBlob } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

export const useCustomProfile = () => {
  const queryClient = useQueryClient();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const imageMutate = useSaveImage(async () => {
    setPreviewUrl("");
    // Before invalidating , delete the existinf file
    if (profileData?.avatar) {
      handleDeleteImage(profileData.avatar);
    }
    handleInvalidateGetProfile();
  });

  const imageDeleteMutate = useDeleteImage(
    () => {
      // save the new image here
    },
    () => {}
  );
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);

  const handleInvalidateGetProfile = () => {
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
  };

  const [formData, setFormData] = useState<UIProfile>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    verified: false,
    avatar: "",
  });
  const { data: profileData } = useFetchProfile();
  const profileMutate = useUpdateProfile(() => {
    handleInvalidateGetProfile();
  });

  const handleDeleteImage = (url: string) => {
    imageDeleteMutate.mutate(url);
  };

  const handleUpdateProfile = () => {
    const { firstName, lastName, phoneNumber } = formData;
    profileMutate.mutate({
      firstName,
      lastName,
      phoneNumber,
      avatar: imageMutate?.data?.data
        ? imageMutate?.data?.data
        : profileData?.avatar,
    });
  };

  const handleRemoveProfileImage = () => {
    if (previewUrl) {
      setPreviewUrl(null);
      setFormData((prev) => ({ ...prev, avatar: profileData?.avatar ?? "" }));
    } else {
      const { firstName, lastName, phoneNumber } = formData;
      profileMutate.mutate({
        firstName,
        lastName,
        phoneNumber,
        avatar: "",
      });
    }
  };

  const handlePreviewImage = async (file: File) => {
    setNewProfileImage(file);
    const result = await convertImageToBlob(file);
    setPreviewUrl(result);
    setFormData((prev) => ({ ...prev, avatar: result }));
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleSaveImage = async () => {
    const fd = new FormData();
    fd.append("file", newProfileImage!);
    imageMutate.mutate({ file: fd, folderType: "profile" });
  };

  // Update form data when profile data is loaded
  useEffect(() => {
    if (profileData) {
      setFormData({
        firstName: profileData.firstName || "",
        lastName: profileData.lastName || "",
        email: profileData.email || "",
        phoneNumber: profileData.phoneNumber || "",
        verified: profileData.verified,
        avatar: profileData.avatar,
      });
    }
  }, [profileData]);

  useEffect(() => {
    if (imageMutate.data) {
      handleUpdateProfile();
    }
  }, [imageMutate.data]);

  return {
    formData,
    setFormData,
    saveProfileLoading: profileMutate.isPending,
    handleUpdateProfile,
    handlePreviewImage,
    handleRemoveProfileImage,
    previewUrl,
    inputRef,
    handleSaveImage,
    saveImageLoading: imageMutate.isPending,
  };
};
