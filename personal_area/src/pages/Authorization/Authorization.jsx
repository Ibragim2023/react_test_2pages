import React from "react";
import "./Auth.css";
import { useSelector } from "react-redux";
import LogIn from "../../components/LogIn/LogIn";
import LogUp from "../../components/LogUp/LogUp";

const Authorization = () => {
  const login = useSelector((state) => state.authReducer.login);

  if (!login) {
    return (
      <div className="authMain">
        <LogUp />
      </div>
    );
  } else {
    return (
      <div className="login">
        <LogIn />
      </div>
    );
  }
};
export default Authorization;
