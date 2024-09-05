import { Box, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import MuiButton from "../../components/MuiButton/MuiButton";
import MuiInput from "../../components/MuiInput/MuiInput";
import MuiTextArea from "../../components/MuiTextArea/MuiTextArea";
import { useGetSingleCourse } from "../../hooks/useGetSingleCourse";
import styles from "./index.module.css";

export default function EditCoursePage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCourse(id);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function handleEditFormSubmit(values) {
    console.log(values);
  }

  setValue("title", data?.title);
  setValue("teacher", data?.teacher);
  setValue("category", data?.category);
  setValue("duration", data?.duration);
  setValue("price", data?.price);
  setValue("number_of_chapter", data?.number_of_chapter);
  setValue("number_of_viewer", data?.number_of_viewer);
  setValue("upload_images", data?.upload_images);
  setValue("description", data?.description);

  return (
    <Stack className={styles.main}>
      <Paper sx={{ paddingBlock: 2, paddingInline: 4 }}>
        <Typography variant="h5" textAlign={"center"} pb={2}>
          Create Course
        </Typography>
        {isLoading ? (
          <Box textAlign={"center"}>
            <Typography variant="h5">Loading...</Typography>
          </Box>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit(handleEditFormSubmit)}
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
              {/* { "" ? "Sending..." : "Create"} */}
              submit
            </MuiButton>
          </form>
        )}
      </Paper>
    </Stack>
  );
}
