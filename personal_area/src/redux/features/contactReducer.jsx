const initialState = {
  contacts: [],
  findContacts: [],
  find: false,
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
    case "contact/update":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "contact/find":
      return {
        ...state,
        findContacts: action.payload,
        find: true,
      };
      case "contact/stopFind":
        return {
          ...state,
          find: false,
        }
    default:
      return state;
  }
}

export const loadContacts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3005/contact");
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
      await fetch(`http://localhost:3005/contact/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "contact/delete", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addContact = (text, number) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3005/contact", {
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

export const updateContact = (text, number, id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3005/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ text, number }),
      });
      const data = await res.json();
      dispatch({ type: "contact/update", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getFindContact = (text) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "contact/find", payload: text });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const stopfind = () => {
  return (dispatch) => {
    try {
      dispatch({ type: "contact/stopFind" });
    } catch (error) {
      console.log(error.message);
    }
  };
};
