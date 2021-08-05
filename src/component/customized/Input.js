import React from "react";
import { TextField } from "@material-ui/core";
export default function Input({
  label,
  value,
  error = null,
  name,
  size,
  onChange,
  variant,
  ...other
}) {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      variant={variant || "outlined"}
      size={size || "small"}
      fullWidth
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
}
