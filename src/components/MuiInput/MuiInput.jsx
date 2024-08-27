/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export default function MuiInput({
  label,
  type,
  register,
  name,
  errors,
  ...props
}) {
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      type={type}
      {...register(name)}
      {...props}
    />
  );
}
