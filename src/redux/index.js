import { combineReducers, legacy_createStore } from "redux";
import counter from "./counter";
import token from "./token";
import wishlist from "./wishlist";
import cart from "./cart";
const reducers = combineReducers({
  counter,
  wishlist,
  cart,
  token,
});
export const store = legacy_createStore(reducers);
