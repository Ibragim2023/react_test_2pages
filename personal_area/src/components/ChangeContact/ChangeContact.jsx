import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateContact } from "../../redux/features/contactReducer";
import { changedContact } from "../../redux/features/contactReducer";
import "./ChangeContact.css"

const ChangeContact = () => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.contactReducer.idToUpdate);

  const [editContact, setEditContact] = useState("");
  const [editNumber, setEditNumber] = useState("");

  const handleUpdateContact = () => {
    if (editContact !== "" && editNumber !== "") {
      dispatch(updateContact(editContact, editNumber, id));
      dispatch(changedContact())
      setEditContact("");
      setEditNumber("");
    } else {
      alert("Поля изменения контакта не могут быть пустыми :)");
    }
  };

  const handleStopChange = () => {
    dispatch(changedContact())
  }

  const handleChangeContact = (e) => {
    setEditContact(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setEditNumber(e.target.value);
  };

  return (
    <div>
      <h3>Изменение контакта :</h3>
      <div>
        <input
          onChange={handleChangeContact}
          type="text"
          placeholder="Введите инициалы"
          value={editContact}
        />
      </div>
      <br />
      <div>
        <input
          onChange={handleChangeNumber}
          type="text"
          placeholder="Введите номер"
          value={editNumber}
        />
      </div>
      <br />
      <div>
        <button className="mrgn_right" onClick={handleUpdateContact}>Изменить</button>
        <button onClick={handleStopChange}>Отменить</button>
      </div>
    </div>
  );
};

export default ChangeContact;
