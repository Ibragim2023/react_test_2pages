const initialState = {
  contacts: [],
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "contact/load":
      return {
        ...state,
        contacts: action.payload,
      };
    case "contact/delete":
      return {
        ...state,
        contacts: state.contacts.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          }
        }),
      };
    case "contact/add":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
}

export const loadContacts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/contact");
      const contacts = await res.json();
      dispatch({ type: "contact/load", payload: contacts });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:3001/contact/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "contact/delete", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addContact = (contact, number) => {
  return async (dispatch) => {
    try {
      const text = contact;
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ text, number }),
      });
      const data = await res.json();
      dispatch({ type: "contact/add", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
