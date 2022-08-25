import Axios from "axios";
import React from "react";
import {Navigate} from "react-router-dom";
import {verifyToken} from "../../../redux/actionCreators";

const Salir = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const token = verifyToken();
  Axios.get(`${API_URL}/auth/logout`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => {})
    .catch((er) => {});
  localStorage.clear();
  return <Navigate to="/login" />
};

export default Salir;
