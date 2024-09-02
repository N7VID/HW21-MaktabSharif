import { useMutation } from "@tanstack/react-query";
import { register } from "../api/register.api";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => register(data),
    onSuccess: (data) => {
      console.log(data.message);
    },
    onError: (error) => {
      console.log(`error: ${error.response.data.phone || error}`);
    },
  });
};
