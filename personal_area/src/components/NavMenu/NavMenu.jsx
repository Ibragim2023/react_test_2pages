import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css"

const NavMenu = () => {
  return (
    <>
      <Link to="/">Главная страница</Link>
      <Link to="contacts">Контакты</Link>
      <Link to="auth">Зарегистрироваться</Link>
    </>
  );
};

export default NavMenu;
