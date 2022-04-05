import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <div className="logosWidth">
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
