import { useMutation } from "@tanstack/react-query";
import { putCourse } from "../api/putCourse.api";

export const usePutCourse = (id) => {
  return useMutation({
    mutationKey: ["PutCourse"],
    mutationFn: (data) => putCourse(id, data),
  });
};
