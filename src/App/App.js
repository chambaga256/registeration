import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import { theme } from "./theme";
import Login from "../component/login/Login";
import SignUp from "../component/signUp/SignUp";
import {Switch,Route} from 'react-router-dom';
import Home from "../component/home/Home";
import Header from "../component/header/Header";
import Dashboard from "../Dashboard/Dashboard";

 

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Login' exact component={Login}/>
        <Route path='/Signup' exact component={SignUp}/>
        <Route path='/Dashboard' exact component={Dashboard} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
