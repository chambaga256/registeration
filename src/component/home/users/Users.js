import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Customized } from "../../customized/customized";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 0,
    marginLeft: "43%",
    margin: "22% auto",
    "& .MuiButton-root": {
      background: "#fff",
      color: "#164A41",
      textTransform: "capitalize",
      margin: theme.spacing(2),
      paddingRight: "2rem",
      paddingLeft: "2rem",
      transition: "transform 0.45s",
      "&:hover": {
        transform: "scale(1.08)",
        background: "#164A41",
        color: "#fff",
      },
    },
    display: "flex",
  },
}));

export default function Users() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.root}>
        <Customized.Button
          text="Admin"
          size="medium"
          component={Link}
          to="/admin/dashboard"
        />
        <Customized.Button
          size="medium"
          text="Student"
          component={Link}
          to="/student/dashboard"
        />
      </Paper>
    </React.Fragment>
  );
}
