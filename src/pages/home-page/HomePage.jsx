import { Paper, Stack, Typography } from "@mui/material";
import MuiButton from "../../components/MuiButton/MuiButton";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../config/routes";

export default function HomePage() {
  return (
    <Stack
      className={styles.main}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack alignItems={"center"}>
        <Paper
          elevation={10}
          sx={{
            gap: "30px",
            px: "40px",
            py: "60px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" my={"10px"}>
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
            <Link to={AppRoutes.LOGIN}>
              <MuiButton component={"a"}>Login</MuiButton>
            </Link>
            <Link to={"signUp"}>
              <MuiButton component={"a"} sx={{ width: "100%" }}>
                Sign up
              </MuiButton>
            </Link>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
}
