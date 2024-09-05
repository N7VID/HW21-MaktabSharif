import { Box, Paper, Stack, Typography } from "@mui/material";
import { useGetCourses } from "../../hooks/useGetCourses";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./index.module.css";
import MuiButton from "../../components/MuiButton/MuiButton";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../config/routes";
import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";

export default function ProductPage() {
  const { data, isLoading, error } = useGetCourses();
  const navigate = useNavigate();
  const { setModal } = useContext(RootContext);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "teacher", headerName: "Teacher", width: 200 },
    {
      field: "category",
      headerName: "Category",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (params) => (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={1.2}
        >
          <MuiButton
            size={"small"}
            color={"success"}
            onClick={() => handleAction(params.row.id)}
          >
            Edit
          </MuiButton>
          <MuiButton
            size={"small"}
            color={"error"}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </MuiButton>
        </Box>
      ),
    },
  ];

  const rows =
    data?.results.map((item) => ({
      id: item.id,
      title: item.title,
      teacher: item.teacher,
      category: item.category,
    })) || [];

  const handleAction = (id) => {
    navigate(`edit/${id}`);
  };

  const handleDelete = (id) => {
    setModal(id);
  };

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className={styles.main}>
      <Stack className={styles.table} spacing={2}>
        <Paper
          sx={{
            paddingX: "10px",
            paddingY: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MuiButton
            color={"warning"}
            onClick={() => {
              localStorage.clear();
              navigate(AppRoutes.HOME);
            }}
          >
            LogOut
          </MuiButton>
          <Typography variant="h4">Courses</Typography>
          <MuiButton onClick={() => navigate(AppRoutes.CREATE)}>
            create course
          </MuiButton>
        </Paper>
        <Paper
          sx={{
            mx: "auto",
            my: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 350,
            width: 800,
          }}
        >
          {isLoading ? (
            <Typography variant="subtitle1">Loading...</Typography>
          ) : error ? (
            <Typography variant="subtitle1">
              An error occurred: {error.message}
            </Typography>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              hideFooterSelectedRowCount
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
            />
          )}
        </Paper>
      </Stack>
    </div>
  );
}
