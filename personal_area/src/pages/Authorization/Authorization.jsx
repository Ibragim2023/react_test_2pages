import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { logUpUser } from "../../redux/features/authReducer";
import { logInUser } from "../../redux/features/authReducer";

const Authorization = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [logTrue, setLogTrue] = useState(false);

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (name !== "" && lastname !== "" && email !== "" && password !== "") {
      dispatch(logUpUser(name, lastname, email, password));
      setName("");
      setLastname("");
      setEmail("");
      setPassword("");
      setLogin(true);
    } else {
      alert("Поля регистрации не могут быть пустыми )");
    }
  };

  const handleLogInClick = () => {
    if (logInEmail !== "" && logInPassword !== "") {
      dispatch(logInUser(logInEmail, logInPassword));
      setLogInEmail("");
      setLogInPassword("");
      setLogTrue(true);
    } else {
      alert("Поля авторизации не могут быть пустыми )");
    }
  };

  const handleAuth = () => {
    setLogin(true);
  };

  const handleEmailLogIn = (e) => {
    setLogInEmail(e.target.value);
  };

  const handlePasswordLogIn = (e) => {
    setLogInPassword(e.target.value);
  };

  if (!login) {
    return (
      <div className="authMain">
        <div className="flex">
          <div className="info1">
            <div>
              <h3>Имя :</h3>
              <input onChange={handleChangeName} type="text" value={name} />
            </div>
            <div>
              <h3>Email :</h3>
              <input onChange={handleChangeEmail} type="email" value={email} />
            </div>
          </div>
          <div className="info2">
            <div>
              <h3>Фамилия :</h3>
              <input
                onChange={handleChangeLastName}
                type="text"
                value={lastname}
              />
            </div>
            <div>
              <h3>Пароль :</h3>
              <input
                onChange={handlePassword}
                type="password"
                value={password}
              />
            </div>
          </div>
        </div>
        <button onClick={handleClick}>Подтвердить</button>
        <button onClick={handleAuth}>Есть аккаунт</button>
      </div>
    );
  } else if (login && !logTrue) {
    return (
      <div className="login">
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
      </div>
    );
  } else if (logTrue) {
    return <h2 className="center">Вы успешно авторизовались!</h2>;
  }
};
export default Authorization;
