import { useQuery } from "@tanstack/react-query";
import { getSingleCourse } from "../api/getSingleCourse.api";

export const useGetSingleCourse = (id) => {
  return useQuery({
    queryKey: ["SingleCourse", id],
    queryFn: () => getSingleCourse(id),
    enabled: !!id,
  });
};
