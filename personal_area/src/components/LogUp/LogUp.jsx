import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logUpUser } from "../../redux/features/authReducer";
import { logIn } from "../../redux/features/authReducer";
import "./LogUp.css";

const LogUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      dispatch(logIn());
      setName("");
      setLastname("");
      setEmail("");
      setPassword("");
    } else {
      alert("Поля регистрации не могут быть пустыми )");
    }
  };

  const handleAuth = () => {
    dispatch(logIn());
  };

  return (
    <div className="main">
    <div className="flex">
      <div className="info_1">
        <div>
          <h3>Имя :</h3>
          <input onChange={handleChangeName} type="text" value={name} />
        </div>
        <div>
          <h3>Email :</h3>
          <input onChange={handleChangeEmail} type="email" value={email} />
        </div>
      </div>
      <div className="info_2">
        <div>
          <h3>Фамилия :</h3>
          <input onChange={handleChangeLastName} type="text" value={lastname} />
        </div>
        <div>
          <h3>Пароль :</h3>
          <input onChange={handlePassword} type="password" value={password} />
        </div>
      </div>
      </div>
      <button onClick={handleClick}>Подтвердить</button>
      <button onClick={handleAuth}>Есть аккаунт</button>
    </div>
  );
};

export default LogUp;
