import {
  GET_NEWSLETTERS,
  TOTAL_NEWSLETTERS,
  ADD_NEWSLETTER,
  EDIT_NEWSLETTER,
  GET_NEWSLETTER,
  RESET_NEWSLETTER,
  NEWSLETTERS_ERROR,
} from "../actions/types";

const initialState = {
  newsletters: null,
  newsletter: null,
  total_newsletters: 0,
  loading: true,
  error: {},
  newsletter_message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWSLETTERS:
      return {
        ...state,
        newsletters: payload,
        loading: false,
        error: {},
      };

    case TOTAL_NEWSLETTERS:
      return {
        ...state,
        total_newsletters: payload,
        loading: false,
        error: {},
      };
    case RESET_NEWSLETTER:
      return {
        ...state,
        newsletters: null,
        newsletter: null,
        loading: true,
        error: {},
      };

    case ADD_NEWSLETTER:
      return {
        ...state,
        newsletter_message: payload,
        loading: false,
        error: {},
      };
    case GET_NEWSLETTER:
      return {
        ...state,
        newsletter: payload,
        loading: false,
        error: {},
      };
    case EDIT_NEWSLETTER:
      return {
        ...state,
        newsletter_message: payload,
        loading: false,
        error: {},
      };

    case NEWSLETTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
