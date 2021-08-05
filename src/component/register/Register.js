import React, { useState } from "react";
import RegisterForm from "../form/RegisterForm";
import PageHeader from "../pageHeader/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Grid, Paper, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import UseTable from "../customized/UseTable";
import { Customized } from "../customized/customized";
export default function Register() {
  const { Tble, TbleHead, TbleBody } = UseTable();
  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <PageHeader
        pagetitle="Dashboard"
        pageSubtitle="Internship Training"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.paper}>
        <Grid container>
          <Grid  className={classes.button}>
            <Customized.Button
              onClick={handleOpenPopup}
              text="Add Student"
              variant="outlined"
            />
          </Grid>

          <Tble>
            <TbleHead />
            <TbleBody />
          </Tble>
        </Grid>
      </Paper>
      <Customized.Popup 
      openPopup={openPopup} 
      setOpenPopup={setOpenPopup}
      title="Student Registration Form">
        <RegisterForm />
      </Customized.Popup>
    </React.Fragment>
  );
}
