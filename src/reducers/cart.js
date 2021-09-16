import { GET_CART, CARTS_ERROR } from "../actions/types";

const initialState = {
  cart: null,

  loading: true,
  error: {},
};

export default function cart(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
        loading: false,
        error: {},
      };

    case CARTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
