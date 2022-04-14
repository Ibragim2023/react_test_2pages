import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFindContact } from "../redux/features/contactReducer";
import { stopfind } from "../redux/features/contactReducer";
import "./SearchContact.css";

const SearchContact = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactReducer.contacts);

  const [search, setSearch] = useState("");

  const handleFindContact = (e) => {
    setSearch(e.target.value);
  };

  const findContacts = () => {
    const filterContact = contacts.filter((item) => {
      return item.text.toLowerCase().includes(search.toLowerCase());
    });
    dispatch(getFindContact(filterContact));
  };

  const stopSearch = () => {
    dispatch(stopfind());
  };

  return (
    <div className="main">
      <div className="input">
        <input
          onChange={handleFindContact}
          className="inp"
          type="text"
          placeholder="Поиск контакта"
          value={search}
        />
        <button onClick={findContacts}>Найти</button>
        <button onClick={stopSearch}>Сброс</button>
      </div>
    </div>
  );
};

export default SearchContact;
