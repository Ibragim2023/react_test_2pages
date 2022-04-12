import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadContacts,
  updateContact,
} from "../../redux/features/contactReducer";
import { deleteContact } from "../../redux/features/contactReducer";
import AddContact from "../../components/AddContact";
import "./Contacts.css";

const Contacts = () => {
  const token = localStorage.getItem("token");

  const contacts = useSelector((state) => state.contactReducer.contacts);

  const [update, setUpdate] = useState(false);

  const [id, setId] = useState("");

  const [editContact, setEditContact] = useState("");
  const [editNumber, setEditNumber] = useState("");

  const dispatch = useDispatch();

  const handleChangeContact = (e) => {
    setEditContact(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setEditNumber(e.target.value);
  };

  const handleUpdateContact = () => {
    if (editContact !== "" && editNumber !== "") {
      dispatch(updateContact(editContact, editNumber, id));
      setEditContact("");
      setEditNumber("");
      setUpdate(false);
    } else {
      alert("Поля изменения контакта не могут быть пустыми :)");
    }
  };

  const handleUpdate = (id) => {
    setId(id);
    setUpdate(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch, contacts]);

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
                  <button onClick={() => handleUpdate(item._id)}>🔧</button>
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
        <div>
          <AddContact />
          {update ? (
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
                <button onClick={handleUpdateContact}>Изменить</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default Contacts;
