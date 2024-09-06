import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/getCourses.api";

export const useGetCourses = (params) => {
  const { page, limit, sort, order } = params;
  return useQuery({
    queryKey: ["Courses", params],
    queryFn: () => getCourses(page, limit, order, sort),
  });
};
