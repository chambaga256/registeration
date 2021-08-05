import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Customized } from "../customized/customized";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import { LOGOUT } from "../../Actions/types";
function UserHeader({ image, name, setUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(null);
  const space = { marginLeft: "10px" };
  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };
  const handleLogOut = () => {
    handleClose();
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };
  return (
    <React.Fragment>
      <AppBar color='inherit' position='fixed'>
        <Toolbar>
          <Grid container>
            <Grid item style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" component={Link} to="/">
                <img src={logo} alt="Stratcom logo" />
              </Typography>
            </Grid>
            <Grid item sm></Grid>
            <Grid item className={classes.button}>
              <div className={classes.grid}>
                <Avatar style={space} variant="circular">
                  {image}
                </Avatar>
                <Customized.Button
                  style={space}
                  onClick={handleClick}
                  text={`${name}`}
                  variant="outlined"
                  endIcon={<ExpandMoreSharpIcon />}
                />
                <Menu
                  keepMounted
                  open={Boolean(openMenu)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                    margin: "40px",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default UserHeader;
