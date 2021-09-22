import {
  GET_ORDERS,
  TOTAL_ORDERS,
  ADD_ORDER,
  EDIT_ORDER,
  GET_ORDER,
  RESET_ORDER,
  ORDERS_ERROR,
} from "../actions/types";

const initialState = {
  orders: null,
  order: null,
  total_orders: 0,
  loading: true,
  error: {},
  order_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false,
        error: {},
      };

    case TOTAL_ORDERS:
      return {
        ...state,
        total_orders: payload,
        loading: false,
        error: {},
      };
    case RESET_ORDER:
      return {
        ...state,
        orders: null,
        order: null,
        loading: true,
        error: {},
      };

    case ADD_ORDER:
      return {
        ...state,
        order_message: payload,
        loading: false,
        error: {},
      };
    case GET_ORDER:
      return {
        ...state,
        order: payload,
        loading: false,
        error: {},
      };
    case EDIT_ORDER:
      return {
        ...state,
        order_message: payload,
        loading: false,
        error: {},
      };

    case ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
