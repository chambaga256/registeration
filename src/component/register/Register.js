import React, { useState } from "react";
import RegisterForm from "../form/RegisterForm";
import PageHeader from "../pageHeader/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import AddIcon from "@material-ui/icons/Add";
import { Grid, Paper, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import UseTable from "../customized/UseTable";
import { Customized } from "../customized/customized";
import { useSelector } from "react-redux";
import { deleteStudent } from "../../Actions/student";
export default function Register() {
  const [currentID,setCurrentID] = useState(null)
  const students = useSelector((state) => state.Students.studentsData);
  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };
  const { Tble, TbleHead, TbleBody } = UseTable();
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
          <Grid className={classes.button}>
            <Customized.Button
              onClick={handleOpenPopup}
              text="Add Student"
              variant="outlined"
            />
          </Grid>

          <Tble>
            <TbleHead />
            <TbleBody
              handleOpenPopup={handleOpenPopup}
              students={students}
              deleteStudent={deleteStudent}
              setCurrentID={setCurrentID}
            />
          </Tble>
        </Grid>
      </Paper>
      <Customized.Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Student Registration Form"
      >
        <RegisterForm currentID={currentID} setCurrentID={setCurrentID}/>
      </Customized.Popup>
    </React.Fragment>
  );
}
