import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContacts } from "../../redux/features/contact.reducer";

const Contacts = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authReducer.token);

  const contacts = useSelector((state) => state.contactReducer.contacts);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  
  if (!token) {
    return (
      <div>
        <h1>Требуется авторизация!</h1>
      </div>
    );
  } else {
    return <div>
      <ul>
        {contacts.map((item) => {
          return (
            <li>
              {item.text}
            </li>
          )
        })}
      </ul>
    </div>;
  }
};

export default Contacts;
