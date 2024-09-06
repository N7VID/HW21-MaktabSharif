import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppRoutes } from "../config/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  const { reset } = useForm();
  return useMutation({
    mutationKey: "Login",
    mutationFn: (data) => login(data),
    onSuccess: (res) => {
      reset();
      navigate(AppRoutes.COURSES);
      toast("Welcome!", { type: "success" });
      localStorage.setItem("accessToken", res.access);
      localStorage.setItem("refreshToken", res.refresh);
    },
    onError: (error) => {
      toast(`error: ${error?.res?.data?.detail || error}`, {
        type: "error",
      });
    },
  });
};
