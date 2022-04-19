import React from "react";
import { addContact } from "../../redux/features/contactReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddContact = () => {
  const [contact, setContact] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleNewContact = (e) => {
    setContact(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleAddContact = () => {
    if (contact !== "" && number !== "") {
      dispatch(addContact(contact, number));
      setContact("");
      setNumber("");
    } else {
      alert("Поля добавления контакта не могут быть пустыми :)");
    }
  };

  return (
    <div>
      <h3>Добавление контакта :</h3>
      <div>
        <input
          onChange={handleNewContact}
          type="text"
          placeholder="Введите инициалы"
          value={contact}
        />
      </div>
      <br />
      <div>
        <input
          onChange={handleNewNumber}
          type="text"
          placeholder="Введите номер"
          value={number}
        />
      </div>
      <br />
      <div>
        <button onClick={handleAddContact}>Добавить</button>
      </div>
    </div>
  );
};

export default AddContact;
