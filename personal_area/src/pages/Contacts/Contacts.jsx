import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContacts } from "../../redux/features/contactReducer";
import AddContact from "../../components/AddContact/AddContact";
import "./Contacts.css";
import SearchContact from "../../components/SearchContact/SearchContact";
import ChangeContact from "../../components/ChangeContact/ChangeContact";
import MapContact from "../../components/MapContacts/MapContact";
import MapFindContact from "../../components/MapFindContacts/MapFindContact";

const Contacts = () => {
  const token = localStorage.getItem("token");
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const find = useSelector((state) => state.contactReducer.find);
  const changed = useSelector((state) => state.contactReducer.changed);
  const dispatch = useDispatch();
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
      <div>
        <SearchContact />
        <div className="flex_block">
          <div className="left_block">
            {!find ? <MapContact /> : <MapFindContact />}
          </div>
          <div className="right_block">
            {!changed ? <AddContact /> : <ChangeContact />}
          </div>
        </div>
      </div>
    );
  }
};

export default Contacts;
