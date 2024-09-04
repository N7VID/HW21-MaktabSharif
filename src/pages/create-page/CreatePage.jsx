import { Input, Paper, Stack, styled, Typography } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import styles from "./index.module.css";
import { Controller, useForm } from "react-hook-form";
import MuiInput from "../../components/MuiInput/MuiInput";
import MuiButton from "../../components/MuiButton/MuiButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { usePostCourse } from "../../hooks/usePostCourse";

export default function CreatePage() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
  } = useForm({ resolver: zodResolver(schema) });

  const { mutate, isPending } = usePostCourse();

  const selectedFile = watch("images");
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
      formData.append("images", selectedFile[0]);
    }

    console.log([...formData]);
    console.log(selectedFile[0]);

    try {
      mutate(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
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

          <Controller
            name="images"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Input
                type={"file"}
                size="small"
                sx={{ width: 220 }}
                inputProps={{ accept: "image/*" }}
                onChange={(e) => field.onChange(e.target.files)}
              />
            )}
          />
          <TextareaAutosize
            minRows={1}
            maxRows={1}
            placeholder="Description"
            name="description"
            {...register("description")}
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
