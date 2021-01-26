import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { modalReducer } from "./modalReducers";
import { globalRducer } from "./globalReducer";

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
});
