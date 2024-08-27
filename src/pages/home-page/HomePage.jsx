import { Stack, Typography } from "@mui/material";
import MuiButton from "../../components/MuiButton/MuiButton";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Stack className={styles.main} height={"100vh"} position={"relative"}>
      <Stack
        position={"absolute"}
        top={260}
        right={300}
        alignItems={"center"}
        gap={3}
      >
        <Typography variant="h2">Online Courses</Typography>
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
            <MuiButton color={"error"} component={"a"}>
              Login
            </MuiButton>
          </Link>
          <Link to={"signUp"}>
            <MuiButton color={"error"} component={"a"}>
              Sign up
            </MuiButton>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
