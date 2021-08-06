import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "./main/footer";
import MainMiddle from "./main/mainMiddle";
import MainUp from "./main/mainUp";
import { useLocation } from "react-router-dom";
import UserHeader from "../header/userHeader";

import useStyles from './styles';
import StudentRegister from "../register/studentRegister";
import Banner from "../banner/Banner";
export default function Home() {
  const space = { marginLeft: "10px" };
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [administrator,setAdministrator] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    const Token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <React.Fragment>
      {!user ? (
        <div>
          <Header />
          <Banner />
          <MainMiddle />
          <Footer />
        </div>
      ) : (
        <div>
          <UserHeader
            image={user.result.imageUrl}
            name={user.result.name}
            setUser={setUser}
          />
          <StudentRegister 
          name={user.result.name.charAt(0)} 
          />
        </div>
      )}
    </React.Fragment>
  );
}
