import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent,updateStudent } from "../../Actions/student";
import { Customized } from "../customized/customized";
import { UseForm, Form } from "../customized/UseForm";
import { internshipService, state } from "../state/state";
import useStyles from "./styles";
export default function RegisterForm({currentID,setCurrentID}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { values, setValues, handleInputChange } = UseForm(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentID){
        dispatch(updateStudent(currentID,values));
    }else{
      dispatch(createStudent(values));
    }
    Clear()
  };
  const Clear = () => {
    setValues(state);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Customized.Input
            name="fullname"
            label="Full Name"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <Customized.Input
            label="RegNo."
            name="regNo"
            value={values.regNo}
            onChange={handleInputChange}
          />
          <Customized.Input
            label="University"
            name="university"
            value={values.university}
            onChange={handleInputChange}
          />
          <Customized.Input
            label="Administrator"
            name="administrator"
            value={values.administrator}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Customized.Input
            label="Course"
            name="course"
            value={values.course}
            onChange={handleInputChange}
          />
          <Customized.Select
            name="internshipCourse"
            label="Internship Service"
            value={values.internshipCourse}
            onChange={handleInputChange}
            InternshipCourses={internshipService}
          />

          <Customized.RadioGroup
            value={values.gender}
            name="gender"
            label="Gender"
            onChange={handleInputChange}
          />

          <div className={classes.button}>
            <Customized.Button
              size="medium"
              text="Submit"
              variant="text"
              type="submit"
            />
            <Customized.Button size="medium" text="Clear" onClick={Clear} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
