import { getTeams } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetTeams = () => {
  return useQuery({ queryKey: ["get-team"], queryFn: getTeams });
};
