import { combineReducers, legacy_createStore } from "redux";
import counter from "./counter";
import token from "./token";
import wishlist from "./wishlist";
import cart from "./cart";
import profile from "./profile";
const reducers = combineReducers({
  counter,
  wishlist,
  cart,
  token,
  profile,
});
export const store = legacy_createStore(reducers);
