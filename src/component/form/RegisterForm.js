import { Grid } from "@material-ui/core";
import React,{useState} from "react";
import { Customized } from "../customized/customized";
import { UseForm, Form } from "../customized/UseForm";
import {internshipService,state } from "../state/state";
import useStyles from "./styles";
export default function RegisterForm() {
  const [registerData,setRegisterData]= useState(state);
  const classes = useStyles();
  const { values, setValues, handleInputChange } = UseForm(state);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(registerData)
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
            options={internshipService}
          />

          <Customized.RadioGroup
            value={values.gender}
            name="gender"
            label="Gender"
            onChange={handleInputChange}
          />

          <div className={classes.button}>
            <Customized.Button size="medium" text="Submit" variant="text" type='submit'/>
            <Customized.Button size="medium" text="Clear" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
