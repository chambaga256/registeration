import {
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Customized } from "../customized/customized";
import { Form } from "../customized/UseForm";
import { UseForm } from "../customized/UseForm";
import { clientID, state } from "../state/state";
import useStyles from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Image } from "../../images/Img";
import { Link, useHistory } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import Forgot from "../forgot/Forgot";
import GoogleLogin from "react-google-login";
import { AUTH } from "../../Actions/types";
import { useDispatch } from "react-redux";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
export default function LoginForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Popup, setPopup] = useState(false);
  const classes = useStyles();

  const {
    values,
    errors,
    handleShowPassword,
    showPassword,
    handleInputChange,
    next,
    nextpage,
    handleSubmit,
  } = UseForm(state, true);

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google login has failed, please try again later");
  };
  const googleSuccess = async (res) => {
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

  return (
    <Paper className={classes.paper}>
      <Form onSubmit={handleSubmit}>
        <Grid container alignItems="center">
          <GoogleLogin
            clientId={clientID}
            render={(renderProps) => (
              <Customized.Button
                className={classes.google}
                startIcon={<Image />}
                text="Sign in with Google"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
          />
          <div className={classes.MuiTypo}>
            <Typography variant="caption" component="p" align="center">
              ------ Or sign in with email -------
            </Typography>
          </div>
          <Grid item align="center" className={classes.grid} xs={12}>
            {next ? (
              <div className={classes.next}>
                <Customized.Input
                  label="Email"
                  name="email"
                  autoFocus
                  required
                  value={values.email}
                  error={errors.email}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton onClick={nextpage}>
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>
              </div>
            ) : (
              <Grid>
                <div className={classes.next}>
                  <Customized.Input
                    name="password"
                    label="Password"
                    type={showPassword?'text':'password'}
                    error={errors.password}
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
                  />
                </div>

                <div>
                  <Typography
                    style={{ padding: "10px", paddingLeft: "38px",cursor:'pointer' }}
                    variant="subtitle2"
                    align="center"
                    onClick={() => setPopup(true)}
                  >
                    Forgot password?
                  </Typography>
                </div>
                <Customized.Button
                  className={classes.but}
                  text="Sign In"
                  fullWidth
                  type="submit"
                />

                <IconButton onClick={nextpage}>
                  <ArrowBackIcon fontSize="small" />
                </IconButton>
              </Grid>
            )}
          </Grid>
          <div>
            <Typography variant="caption" component="p">
              By signing to Stratcom, you have read and accepted our terms and
              condition policy
            </Typography>
          </div>
        </Grid>
        <Customized.ForgotPopup Popup={Popup} setPopup={setPopup}>
          <Forgot />
        </Customized.ForgotPopup>

        <div className={classes.Typography1}>
          <Typography variant="subtitle2">
            create Account?
            <Typography variant="caption" component={Link} to="/signup">
              Sign Up
            </Typography>
          </Typography>
        </div>
      </Form>
    </Paper>
  );
}
