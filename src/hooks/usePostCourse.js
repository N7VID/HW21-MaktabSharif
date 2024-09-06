import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCourse } from "../api/postCourse.api";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../config/routes";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export const usePostCourse = () => {
  const { reset } = useForm();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => postCourse(data),
    mutationKey: ["postCourse"],
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries(["Courses"]);
      navigate(AppRoutes.COURSES);
      toast("Created Successfully!", { type: "success" });
    },
    onError: (error) => {
      toast(`Error submitting form: ${error}`, { type: "error" });
    },
  });
};
