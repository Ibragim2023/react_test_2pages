import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContacts } from "../../redux/features/contact.reducer";
import { deleteContact } from "../../redux/features/contact.reducer";
import { addContact } from "../../redux/features/contact.reducer";
import "./Contacts.css";

const Contacts = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token")

  const contacts = useSelector((state) => state.contactReducer.contacts);

  const [contact, setContact] = useState("");

  const [number, setNumber] = useState("");

  const handleNewContact = (e) => {
    setContact(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = () => {
    if (contact !== "" && number !== "") {
      dispatch(addContact(contact, number));
      setContact("");
      setNumber("");
    } else {
      alert("Поля добавления контактов не могут быть пустыми :)");
    }
  };

  useEffect(() => {
    dispatch(loadContacts());
  }, [contacts]);

  if (!token) {
    return (
      <div>
        <h1>Требуется авторизация!</h1>
      </div>
    );
  } else {
    return (
      <div className="flex_block">
        <div className="left_block">
          {contacts.map((item, id) => {
            return (
              <div key={id} className="contact_block">
                <div className="update_btn">
                  <button>🔧</button>
                </div>
                <div className="text">
                  {item.text} <span>{item.number}</span>
                </div>
                <div className="del_btn">
                  <button onClick={() => handleDelete(item._id)}>✖</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right_block">
          <h3>Добавление контактов :</h3>
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
      </div>
    );
  }
};

export default Contacts;
