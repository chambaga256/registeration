import React,{useState,useEffect} from "react";
import { AppBar, Avatar, Grid, Toolbar, Typography } from "@material-ui/core";
import { Customized } from "../customized/customized";
import { Link,useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./style";
import {useHistory } from "react-router-dom";
function Header() {
  const space = { marginLeft: "10px" };
  const classes = useStyles();
  const location = useLocation();
  const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(()=>{
      const Token = user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
      
  },[location])

  return (
    <AppBar color="inherit" position="fixed">
      <Toolbar>

        <Grid container>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" component={Link} to="/">
              <img src={logo} alt="Stratcom logo" />
            </Typography>
            <div className={classes.grid}>
              <Typography style={space} variant="subtitle2" >
                How it works
              </Typography>
              <Typography style={space} variant="subtitle2">
                Internship Courses
              </Typography>
              <Typography style={space} variant="subtitle2" >
                About
              </Typography>
            </div>
          </Grid>
          <Grid item sm></Grid>
          <Grid item className={classes.button}>
            <Customized.Button
              variant="text"
              text="Sign In"
              component={Link}
              to="/login"
            />
            <Customized.Button
              component={Link}
              to="/signup"
              className={classes.button2}
              variant="outlined"
              text="Sign Up"
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
