import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login.api";

export const useLogin = () => {
  return useMutation({
    mutationKey: "Login",
    mutationFn: (data) => login(data),
    onSuccess: () => {
      console.log("done");
    },
    onError: (error) => {
      console.log(`${error.response.data.body}`);
    },
  });
};
