import { Grid, InputAdornment, Typography } from "@material-ui/core";
import React from "react";
import { Form } from "../customized/UseForm";
import useStyles from "./styles";
import EmailIcon from "@material-ui/icons/Email";
import { Customized } from "../customized/customized";
export default function ForgotForm() {
  const classes = useStyles();
  return (
    <Form>
      <Grid container alignItems="center">
        <Grid item 
        justify='center'
        className={classes.grid}>
          <Grid className={classes.div}>
            <Typography variant="h4">Forgot Password ?</Typography>
            <Typography variant="caption">
              Stratcom welcomes you! If you forgot your password, enter you
              email and we will send you a link to reset your password
            </Typography>
          </Grid>
          <Customized.Input
            className={classes.root}
            label="Email"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          />
          <Customized.Button className={classes.button} fullWidth type="submit" text='Submit'/>
        </Grid>
      </Grid>
    </Form>
  );
}
