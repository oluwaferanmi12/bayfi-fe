import { getCountries, removeImage, saveImage } from "@/services";
import { ImageFolderType } from "@/types/utility.types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCountries = () => {
  return useQuery({ queryFn: getCountries, queryKey: ["country"] });
};

export const useSaveImage = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: { folderType: ImageFolderType; file: any }) => {
      return saveImage(payload.folderType, payload.file);
    },
    onSuccess: (data) => {
      sc(data);
    },
  });
};

export const useDeleteImage = (
  sc: (val: any) => void,
  err: (val: any) => void
) => {
  return useMutation({
    mutationFn: (imageUrl: string) => {
      return removeImage(imageUrl);
    },
    onSuccess: (data) => {
      sc(data);
    },
    onError: (data) => {
      err(data);
    },
  });
};
