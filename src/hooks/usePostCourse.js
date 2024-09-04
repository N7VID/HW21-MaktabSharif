import { useMutation } from "@tanstack/react-query";
import { postCourse } from "../api/postCourse.api";

export const usePostCourse = () => {
  return useMutation({
    mutationFn: (data) => postCourse(data),
    mutationKey: ["postCourse"],
  });
};
