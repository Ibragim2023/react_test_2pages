import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "../redux/features/authReducer";
import contactReducer from "./features/contactReducer";


const combine = combineReducers({authReducer, contactReducer})

const store = createStore(
  combine,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
