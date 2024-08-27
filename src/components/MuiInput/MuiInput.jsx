/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export default function MuiInput({ label, type, helperText, ...props }) {
  return (
    <TextField label={label} helperText={helperText} type={type} {...props} />
  );
}
