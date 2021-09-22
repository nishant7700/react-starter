import {
  GET_PRODUCTS,
  TOTAL_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCT,
  RESET_PRODUCT,
  PRODUCTS_ERROR,
} from "../actions/types";

const initialState = {
  products: null,
  product: null,
  total_products: 0,
  loading: true,
  error: {},
  product_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
        error: {},
      };

    case TOTAL_PRODUCTS:
      return {
        ...state,
        total_products: payload,
        loading: false,
        error: {},
      };
    case RESET_PRODUCT:
      return {
        ...state,
        product: null,
        loading: true,
        error: {},
      };

    case ADD_PRODUCT:
      return {
        ...state,
        product_message: payload,
        loading: false,
        error: {},
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
        error: {},
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        product_message: payload,
        loading: false,
        error: {},
      };

    case PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
