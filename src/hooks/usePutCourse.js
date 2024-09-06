import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putCourse } from "../api/putCourse.api";
import { AppRoutes } from "../config/routes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export const usePutCourse = (id) => {
  const { reset } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["PutCourse"],
    mutationFn: (data) => putCourse(id, data),
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries(["Courses"]);
      navigate(AppRoutes.COURSES);
      toast("Edited Successfully!", { type: "success" });
    },
    onError: (error) => {
      toast(`Error submitting form: ${error}`, { type: "error" });
    },
  });
};
