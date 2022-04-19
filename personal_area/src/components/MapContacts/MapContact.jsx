import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdToUpdate, deleteContact } from "../../redux/features/contactReducer";
import { changingContact } from "../../redux/features/contactReducer";

const MapContact = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactReducer.contacts);

  const handleUpdate = (id) => {
    dispatch(getIdToUpdate(id));
    dispatch(changingContact());
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return contacts.map((item, id) => {
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
  });
};

export default MapContact;
