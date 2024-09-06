import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import MuiButton from "../../components/MuiButton/MuiButton";
import MuiInput from "../../components/MuiInput/MuiInput";
import { AppRoutes } from "../../config/routes";
import { useLogin } from "../../hooks/useLogin";
import styles from "./index.module.css";
import { schema } from "./schema";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: zodResolver(schema) });

  function handleFormSubmit(value) {
    mutate(value);
  }

  return (
    <Stack
      display={"flex"}
      minHeight={"100vh"}
      alignItems={"center"}
      className={styles.main}
      justifyContent={"center"}
    >
      <Box width={"350px"}>
        <Paper
          elevation={10}
          sx={{
            gap: "30px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="p" fontFamily={"sans-serif"} fontSize={"25px"}>
            Access Your Dashboard
          </Typography>

          <Stack
            pl={"20px"}
            display="flex"
            alignItems="start"
            justifyContent="center"
          >
            <Typography fontSize={"14px"}>Good to see you again!</Typography>
            <Typography fontSize={"14px"}>
              Please enter your credentials to continue.
            </Typography>
          </Stack>

          <form
            className={styles.form}
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <MuiInput
              label={"Phone"}
              errors={errors}
              register={register}
              name={"phone"}
            />
            <MuiInput
              label={"Password"}
              type={"password"}
              errors={errors}
              register={register}
              name={"password"}
            />
            <MuiButton type={"submit"} sx={{ width: "100%" }}>
              {isPending ? "Loading..." : "Continue"}
            </MuiButton>
            <Link to={AppRoutes.SIGNUP} style={{ textDecoration: "none" }}>
              <MuiButton
                variant="text"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                }}
                disableRipple
              >
                Don’t have an account?
              </MuiButton>
            </Link>
          </form>
        </Paper>
      </Box>
    </Stack>
  );
}
