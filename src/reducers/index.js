import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import magicTrick from "./magicTrick";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  magic: magicTrick,
});

export default allReducers;
