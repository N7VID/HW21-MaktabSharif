import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "../api/deleteCourse.api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { RootContext } from "../context/RootContextProvider";

export const useDeleteCourse = () => {
  const { setModal } = useContext(RootContext);
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id) => deleteCourse(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Courses"] });
      setModal(null);
      toast("Deleted Successfully!", { type: "success" });
    },
    onError: (error) => {
      toast(`Error submitting form: ${error}`, { type: "error" });
    },
  });
};
