import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { RootContext } from "../../context/RootContextProvider";
import { useDeleteCourse } from "../../hooks/useDeleteCourse";
import MuiButton from "../MuiButton/MuiButton";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "Center",
  alignItems: "Center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  gap: "10px",
  p: 4,
};

export default function MuiModal() {
  const { setModal, modal } = useContext(RootContext);
  const handleClose = () => setModal(null);
  const { mutate, isPending } = useDeleteCourse();
  const handleDelete = () => {
    mutate(modal);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              color={"red"}
              borderBottom={1}
            >
              Attention
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
            <Typography
              variant="subtitle1"
              sx={{ marginBottom: 3, textAlign: "center" }}
            >
              Are you sure you want to delete <strong>Selected Course</strong>?
              This action cannot be undone.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <MuiButton color="secondary" size="small" onClick={handleClose}>
                Cancel
              </MuiButton>
              <MuiButton color="error" size="small" onClick={handleDelete}>
                {isPending ? "Deleting..." : "Delete"}
              </MuiButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
