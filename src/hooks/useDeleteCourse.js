import { useMutation } from "@tanstack/react-query";
import { deleteCourse } from "../api/deleteCourse.api";

export const useDeleteCourse = () => {
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id) => deleteCourse(id),
  });
};
