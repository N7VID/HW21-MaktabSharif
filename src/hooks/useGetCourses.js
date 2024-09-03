import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/getCourses.api";

export const useGetCourses = () => {
  return useQuery({
    queryKey: "Courses",
    queryFn: () => getCourses(),
  });
};
