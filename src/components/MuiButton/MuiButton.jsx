/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export default function MuiButton({
  variant = "contained",
  color,
  children,
  ...props
}) {
  return (
    <Button variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
}
