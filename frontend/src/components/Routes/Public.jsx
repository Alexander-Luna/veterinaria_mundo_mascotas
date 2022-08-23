import {Navigate} from "react-router-dom";
import Navbar from "../Nav/Navbar";
import React from "react";

export const Public = ({children}) => {
  /*if (localStorage.getItem("access-token")) {
    return <Navigate to="/" />
  }*/
  return <>
    <Navbar
      imagen='logo'></Navbar>
    {children}
    </>
}

export default Public;
