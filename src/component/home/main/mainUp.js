import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../styles";
export default function MainUp() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.Toppaper}>
      <Grid container className={classes.mainTop}>
        <Grid>
          <div className={classes.maindiv}>
            <Typography variant="h3">StratCom</Typography>
            <Typography variant="h6">
              Every Internship, needs a way straight to your job
            </Typography>
            <Typography variant="subtitle1" component="p">
              Learn what describes your interest
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
