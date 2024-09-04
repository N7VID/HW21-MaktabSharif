import { zodResolver } from "@hookform/resolvers/zod";
import { Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import MuiButton from "../../components/MuiButton/MuiButton";
import MuiInput from "../../components/MuiInput/MuiInput";
import MuiTextArea from "../../components/MuiTextArea/MuiTextArea";
import { usePostCourse } from "../../hooks/usePostCourse";
import styles from "./index.module.css";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../config/routes";
import { useQueryClient } from "@tanstack/react-query";

export default function CreatePage() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const { mutate, isPending } = usePostCourse();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const selectedFile = watch("upload_images");

  function handleCreateFormSubmit(values) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("teacher", values.teacher);
    formData.append("category", values.category);
    formData.append("duration", values.duration);
    formData.append("price", values.price);
    formData.append("number_of_chapter", values.number_of_chapter);
    formData.append("number_of_viewer", values.number_of_viewer);
    formData.append("description", values.description);

    if (selectedFile && selectedFile.length > 0) {
      formData.append("upload_images", selectedFile[0]);
    }
    // console.log(values);

    mutate(formData, {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries(["Courses"]);
        navigate(AppRoutes.COURSES);
      },
      onError: (error) => {
        console.error("Error submitting form:", error);
      },
    });
  }

  return (
    <Stack className={styles.main}>
      <Paper sx={{ paddingBlock: 2, paddingInline: 4 }}>
        <Typography variant="h5" textAlign={"center"} pb={2}>
          Create Course
        </Typography>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleCreateFormSubmit)}
        >
          <MuiInput
            label={"Title"}
            errors={errors}
            register={register}
            name={"title"}
            size="small"
          />
          <MuiInput
            label={"Teacher"}
            name={"teacher"}
            errors={errors}
            register={register}
            size="small"
          />
          <MuiInput
            type={"number"}
            label={"Category"}
            name={"category"}
            errors={errors}
            register={register}
            size="small"
          />
          <MuiInput
            type={"number"}
            label={"Duration"}
            name={"duration"}
            register={register}
            errors={errors}
            size="small"
          />
          <MuiInput
            type={"number"}
            label={"Price"}
            name={"price"}
            register={register}
            errors={errors}
            size="small"
          />
          <MuiInput
            type={"number"}
            label={"Chapters"}
            name={"number_of_chapter"}
            register={register}
            errors={errors}
            size="small"
          />
          <MuiInput
            type={"number"}
            label={"Viewers"}
            name={"number_of_viewer"}
            register={register}
            errors={errors}
            size="small"
          />
          <MuiInput
            type="file"
            name="upload_images"
            accept="image/*"
            maxRows={1}
            register={register}
            sx={{
              maxWidth: 220,
            }}
          />
          <MuiTextArea
            maxRows={1}
            placeholder="Description"
            name="description"
            register={register}
            sx={{
              maxWidth: 220,
            }}
          />
          <MuiButton type={"submit"} sx={{ width: "100%" }}>
            {isPending ? "Sending..." : "Create"}
          </MuiButton>
        </form>
      </Paper>
    </Stack>
  );
}
