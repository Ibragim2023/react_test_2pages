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
    default:
      return state;
  }
}

export const loadContacts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/contact");
      const contacts = await res.json();
      console.log(contacts);
      dispatch({ type: "contact/load", payload: contacts });
    } catch (error) {
      console.log(error);
    }
  };
};
