import { axiosInstance } from "@/axios";
import { Team } from "@/types/team.type";

export const getTeams = async (): Promise<Team[]> => {
  const { data } = await axiosInstance.get(`/public/teams`);
  return data.data;
};
