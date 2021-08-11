import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import { theme } from "./theme";
import Login from "../component/login/Login";
import SignUp from "../component/signUp/SignUp";
import {Switch, Route} from 'react-router-dom';
import Home from "../component/home/Home";
import { useDispatch } from "react-redux";
import { getStudents } from "../Actions/student";
import StudentRegister from "../component/register/studentRegister";
import Register from "../component/register/Register";
import Dashboard from "../Dashboard/Dashboard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStudents())
  },[dispatch])

  return (
    <ThemeProvider theme={theme}>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/admin/dashboard' exact component={Register}/>
        <Route path='/student/dashboard' exact component={StudentRegister}/>
        <Route path='/Login' exact component={Login}/>
        <Route path='/Signup' exact component={SignUp}/>
        <Route path='/Dashboard' exact component={Dashboard} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;