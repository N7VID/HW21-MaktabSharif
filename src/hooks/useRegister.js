import { useMutation } from "@tanstack/react-query";
import { register } from "../api/register.api";
import { toast } from "react-toastify";

export const useRegister = () => {
  return useMutation({
    mutationKey: "Register",
    mutationFn: (data) => register(data),
    onSuccess: (data) => {
      toast(data.message, { type: "success" });
    },
    onError: (error) => {
      toast(`error: ${error.response.data.phone || error}`, { type: "error" });
    },
  });
};
