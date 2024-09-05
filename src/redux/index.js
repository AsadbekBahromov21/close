import { combineReducers, legacy_createStore } from "redux";
import token from "./token";
import profile from "./profile";
const reducers = combineReducers({
  token,
  profile,
});
export const store = legacy_createStore(reducers);
