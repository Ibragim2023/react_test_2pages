import React from "react";
import "./MainMenu.css"

const MainMenu = () => {
  return (
    <div className="mainMenu">
      <h1>Тестовое задание!</h1>
      <ol>
        <li>Страница "Регистрация"</li>
        <li>Страница "Контакты"</li>
        <li>Доступ к странице "Контакты" возможен только при регистрации.</li>
      </ol>
    </div>
  );
};

export default MainMenu;
