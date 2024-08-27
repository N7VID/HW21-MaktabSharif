import { Box, Paper, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import MuiInput from "../../components/MuiInput/MuiInput";
import MuiButton from "../../components/MuiButton/MuiButton";
export default function LoginPage() {
  return (
    <Stack
      display={"flex"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      className={styles.main}
    >
      <Box width={"350px"}>
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            gap: "30px",
          }}
        >
          <Typography variant="p" fontFamily={"sans-serif"} fontSize={"25px"}>
            Access Your Dashboard
          </Typography>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="start"
            pl={"20px"}
          >
            <Typography fontSize={"14px"}>Good to see you again!</Typography>
            <Typography fontSize={"14px"}>
              Please enter your credentials to continue.
            </Typography>
          </Stack>
          <form className={styles.form}>
            <MuiInput label={"Phone"} />
            <MuiInput label={"Password"} type={"password"} />
            <MuiButton type={"submit"}>Continue</MuiButton>
            <MuiButton component={"a"} variant="text" disableRipple>
              Forgot your password?
            </MuiButton>
          </form>
        </Paper>
      </Box>
    </Stack>
  );
}
