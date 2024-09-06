import { Box, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MuiButton from "../../components/MuiButton/MuiButton";
import { AppRoutes } from "../../config/routes";
import { RootContext } from "../../context/RootContextProvider";
import { useGetCourses } from "../../hooks/useGetCourses";
import styles from "./index.module.css";

export default function ProductPage() {
  const { params, setParams, setModal } = useContext(RootContext);
  const { data, isLoading, error } = useGetCourses(params);
  const { page, limit } = params;
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "teacher", headerName: "Teacher", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
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

  const handleSortModel = (newModel) => {
    if (newModel.length > 0) {
      const { field, sort } = newModel[0];
      setParams((prev) => ({
        ...prev,
        sort: field,
        order: sort,
      }));
    } else {
      setParams((prev) => ({
        ...prev,
        sort: undefined,
        order: undefined,
      }));
    }
  };

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
            Create Course
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
          {error ? (
            <Typography variant="subtitle1">
              An error occurred: {error.message}
            </Typography>
          ) : (
            <DataGrid
              rows={rows}
              loading={isLoading}
              columns={columns}
              pagination
              sortingMode="server"
              paginationMode="server"
              hideFooterSelectedRowCount
              onSortModelChange={handleSortModel}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: limit, page: page },
                },
              }}
              rowCount={data?.count}
              onPaginationModelChange={(newModel) => {
                setParams((prev) => ({
                  ...prev,
                  page: newModel.page + 1,
                  limit: newModel.pageSize,
                }));
              }}
              pageSizeOptions={[3, 5, 10]}
              sx={{ border: 0 }}
            />
          )}
        </Paper>
      </Stack>
    </div>
  );
}
