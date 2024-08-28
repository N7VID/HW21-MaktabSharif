import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import MuiInput from "../../components/MuiInput/MuiInput";
import MuiButton from "../../components/MuiButton/MuiButton";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { schema } from "./schema";

export default function SignUpPage() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: zodResolver(schema) });

  function handleFormSubmit(value) {
    console.log(value);
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
            Create an Account
          </Typography>

          <Stack
            pl={"20px"}
            display="flex"
            alignItems="start"
            justifyContent="center"
          >
            <Typography fontSize={"14px"}>Hi there!</Typography>
            <Typography fontSize={"14px"}>
              Create your free account now to explore more.
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
              name={"phoneNumber"}
            />
            <MuiInput
              label={"Password"}
              type={"password"}
              errors={errors}
              register={register}
              name={"password"}
            />
            <MuiButton type={"submit"} sx={{ width: "100%" }}>
              Create Account
            </MuiButton>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <MuiButton
                variant="text"
                sx={{
                  fontSize: "12px",
                  display: "flex",
                }}
                disableRipple
              >
                Already Have an Account?
              </MuiButton>
            </Link>
          </form>
        </Paper>
      </Box>
    </Stack>
  );
}
