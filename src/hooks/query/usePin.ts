import { createPin, updatePin } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useCreatePin = ({ sc }: { sc: (val: any) => void }) => {
  return useMutation({
    mutationFn: createPin,
    onSuccess: sc,
  });
};

export const useUpdatePin = ({ sc }: { sc: (val: any) => void }) => {
  return useMutation({
    mutationFn: updatePin,
    onSuccess: sc,
  });
};
