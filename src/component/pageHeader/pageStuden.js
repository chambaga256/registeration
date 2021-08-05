import React from "react";
import { Paper, Card, Typography, Grid, InputBase, CardHeader } from "@material-ui/core";
import useStyles from "./styles";
export default function StudentHeader({  pagetitle, pageSubtitle,name}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container alignItems='center'> 
        <Grid className={classes.pageHeader} item>
          <Card className={classes.pageIcon}>
            <CardHeader title={`${name}`}/>
          </Card>

          <div className={classes.pageTitle}>
            <Typography variant="subtitle1" component="div">
              {pagetitle}
            </Typography>
            <Typography variant="caption" component="div">
              {pageSubtitle}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Paper>
  );
}
