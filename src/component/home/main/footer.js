import React from "react";
import useStyles from "../styles";
import { Grid, Typography } from "@material-ui/core";
import { Customized } from "../../customized/customized";
import cisco from "../../../images/Cisco.png";
import adobe from "../../../images/Adobe.jpg";
export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid className={classes.gridFooter}>
        <Grid item >
          <Typography variant="h5">StratCom</Typography>
        </Grid>
        <Grid item >
          <Typography variant="h5">Programs</Typography>
        </Grid>
        <Grid item >
          <Typography variant="h5">News</Typography>
        </Grid>
        <Grid item >
          <Typography variant="h5">Support</Typography>
          <Typography variant="caption">Platform support</Typography>
          <Typography variant="caption">Platform status</Typography>
          <Typography variant="caption">Bugs</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Terms and Policies</Typography>
          <Typography variant="caption">Platform policies</Typography>
          <Typography variant="caption">Platform terms</Typography>
          <Typography variant="caption">Platform service</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
