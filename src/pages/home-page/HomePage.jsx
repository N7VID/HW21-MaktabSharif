import { Paper, Stack, Typography } from "@mui/material";
import MuiButton from "../../components/MuiButton/MuiButton";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Stack
      className={styles.main}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack alignItems={"center"} gap={3}>
        <Paper
          elevation={10}
          sx={{
            gap: "25px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" fontWeight={600} my={"10px"}>
            Online Courses
          </Typography>
          <Stack>
            <Typography variant="subtitle1" textAlign={"center"}>
              Master new skills and advance your career
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"}>
              with top-quality courses designed for success
            </Typography>
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Link to={"/login"}>
              <MuiButton component={"a"}>Login</MuiButton>
            </Link>
            <Link to={"signUp"}>
              <MuiButton component={"a"}>Sign up</MuiButton>
            </Link>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
