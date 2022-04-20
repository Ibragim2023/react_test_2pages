import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/features/authReducer";
import { stopLogIn } from "../../redux/features/authReducer";
import "./LogIn.css";

const LogIn = () => {
  const dispatch = useDispatch();

  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const handleLogInClick = () => {
    if (logInEmail !== "" && logInPassword !== "") {
      dispatch(logInUser(logInEmail, logInPassword));
      setLogInEmail("");
      setLogInPassword("");
    } else {
      alert("Поля авторизации не могут быть пустыми )");
    }
  };

  const handleStopLogIn = () => {
    dispatch(stopLogIn());
  };

  const handleEmailLogIn = (e) => {
    setLogInEmail(e.target.value);
  };

  const handlePasswordLogIn = (e) => {
    setLogInPassword(e.target.value);
  };

  return (
    <div className="main">
      <div>
        <h3>Email :</h3>
        <input onChange={handleEmailLogIn} type="email" value={logInEmail} />
      </div>
      <div>
        <h3>Пароль :</h3>
        <input
          onChange={handlePasswordLogIn}
          type="password"
          value={logInPassword}
        />
      </div>
      <button onClick={handleLogInClick}>Войти в IT</button>
      <button onClick={handleStopLogIn}>Назад</button>
    </div>
  );
};

export default LogIn;
