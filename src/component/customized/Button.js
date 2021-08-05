import React from "react";
import { Button as MuiButton } from "@material-ui/core";
export default function Button({ text,color,size, onClick, variant,...other }) {
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "small"}
      onClick={onClick}
      disableRipple
      {...other}
      color={color || 'default'}
    >{text}</MuiButton>
  );
}
