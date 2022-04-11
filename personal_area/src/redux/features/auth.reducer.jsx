const initialState = {
  users: [],
  token: localStorage.getItem("token"),
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "user/add":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "user/logIn":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

export const logUpUser = (name, lastname, email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify({ name, lastname, email, password }),
        headers: { "Content-type": "application/json" },
      });
      const user = await res.json();
      dispatch({ type: "user/add", payload: user });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logInUser = (logInEmail, logInPassword) => {
  const email = logInEmail;
  const password = logInPassword;
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-type": "application/json" },
      });
      const json = await res.json();
      dispatch({ type: "user/logIn", payload: json.token });
      localStorage.setItem("token", json.token);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "user/logOut" });
  };
};
