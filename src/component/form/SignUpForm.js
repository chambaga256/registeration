import { Grid, IconButton, InputAdornment, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Customized } from "../customized/customized";
import { Form } from "../customized/UseForm";
import { UseForm } from "../customized/UseForm";
import { clientID, state } from "../state/state";
import useStyles from "./styles";
import EmailIcon from "@material-ui/icons/Email";
import { Image } from "../../images/Img";
import { Link, useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { AUTH } from "../../Actions/types";
import { useDispatch } from "react-redux";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { signup } from "../../Actions/login";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { values, handleInputChange,handleShowPassword,showPassword,errors,setErrors, validate,setValues} = UseForm(state, true);
  const classes = useStyles();
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google login has failed, please try again later");
  };
  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const Token = res?.tokenId;
    try {
      dispatch({
        type: AUTH,
        payload: { result, Token },
      });
      history.push("/");
    } catch (error) {
      googleFailure();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(values,history))
  };
  return (
    <Paper className={classes.paper}>
      <Form onSubmit={handleSubmit}>
        <div className={classes.Typography1}>
          <Typography variant="subtitle2">
            Already have Account?
            <Typography variant="caption" component={Link} to="/login">
              Sign In
            </Typography>
          </Typography>
        </div>
        <Grid container alignItems="center">
          <Grid item align="center" className={classes.gridRegister} xs={12}>
            <Grid>
              <GoogleLogin
                clientId={clientID}
                render={(renderProps) => (
                  <Customized.Button
                    className={classes.google}
                    startIcon={<Image />}
                    text="Sign Up with Google"
                    fullWidth
                    disable={renderProps.disable}
                    onClick={renderProps.onClick}
                  />
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
              />
              <div className={classes.MuiTypo}>
                <Typography variant="caption" component="p" align="center">
                  ------ Or sign up with email -------
                </Typography>
              </div>
            </Grid>

            <Grid align="center" className={classes.next}>
              <Customized.Input
                label="Email"
                name="email"
                autoFocus
                required
                value={values.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                error={errors.email}
              />
              <Customized.Input
                label="Password"
                name="password"
                type={showPassword?'text':'password'}
                required
                value={values.password}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword?<Visibility/>:<VisibilityOff/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={errors.password}
              />
            </Grid>
            <Customized.Button
              className={classes.but}
              text="Sign up"
              fullWidth
              type="submit"
            />
          </Grid>
          <div>
            <Typography variant="caption" component="p">
              By signing up to Stratcom, you have read and accepted our terms
              and condition policy
            </Typography>
          </div>
        </Grid>
      </Form>
    </Paper>
  );
}
