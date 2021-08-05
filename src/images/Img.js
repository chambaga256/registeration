import React from "react";
import google from "../images/google.png";
import useStyles from "./styles";
export const Image = () => {
  const classes = useStyles();
  return (
    <img src={google} alt="login with google" className={classes.googleIcon} />
  );
};
