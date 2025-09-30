import { axiosInstance } from "@/axios";
import { ImageFolderType } from "@/types/utility.types";

export const getCountries = async () => {
  const result = await axiosInstance.get("/countries");
  return result.data.data;
};

export const saveImage = async (folderType: ImageFolderType, payload: any) => {

  const result = await axiosInstance.post(
    `/files?folder=${folderType}`,
    payload
  );
  return result.data;
};
