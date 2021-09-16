import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import cart from "./cart";
import product from "./product";
export default combineReducers({
  auth,
  alert,
  cart,
  product,
});
