import React, { useState } from "react";
import RegisterForm from "../form/RegisterForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { CardHeader, Grid, Paper, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import UseTable from "../customized/UseTable";
import StudentHeader from "../pageHeader/pageStuden";
export default function StudentRegister({name}) {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <StudentHeader
        pagetitle="Welcome to Stratcom"
        pageSubtitle="Internship Training, straight to A job"
        name={name}
      />
      <Paper className={classes.paper}>
        <Grid container>
          <Grid className={classes.button}>
          </Grid>
          <RegisterForm />
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
