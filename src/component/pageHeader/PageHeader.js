import React from "react";
import { Paper, Card, Typography, Grid, InputBase, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
export default function PageHeader({ icon, pagetitle, pageSubtitle }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Container>
      <Grid container alignItems="center" row>
        <Grid className={classes.pageHeader} item>
          <Card className={classes.pageIcon}>{icon}</Card>

          <div className={classes.pageTitle}>
            <Typography variant="subtitle1" component="div">
              {pagetitle}
            </Typography>
            <Typography variant="caption" component="div">
              {pageSubtitle}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.searchInput} item sm>
          <InputBase
            fullWidth
            color="secondary"
            placeholder="Search"
            startAdornment={<SearchIcon fontSize="small" />}
          />
        </Grid>
        <Grid item className={classes.pageHeader}>
          <Card className={classes.pageIconLeft}></Card>
          <Card className={classes.pageIconLeft}></Card>
        </Grid>
      </Grid>
      </Container>
    </Paper>
  );
}
