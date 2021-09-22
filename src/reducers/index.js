import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import cart from "./cart";
import product from "./product";
import order from "./order";

import newsletter from "./newsletter";
export default combineReducers({
  auth,
  alert,
  cart,
  product,
  order,
  newsletter,
});
