import api from "../utils/api";
import {
  GET_CONTACTS,
  TOTAL_CONTACTS,
  ADD_CONTACT,
  GET_CONTACT,
  RESET_CONTACT,
  CONTACTS_ERROR,
} from "./types";

import { setAlert } from "./alert";
// Get posts
export const countContact =
  ({ q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      let query = "/contacts/count?";
      if (q) {
        let newQ = ``;
        newQ += `&_q=${q}`;
        query = query + newQ;
      }
      if (createdAt_lte) {
        let newCreatedAt_gte = ``;
        newCreatedAt_gte += `&createdAt_lte=${createdAt_lte}`;
        query = query + newCreatedAt_gte;
      }
      if (createdAt_gte) {
        let newCreatedAt_gte = ``;
        newCreatedAt_gte += `&createdAt_gte=${createdAt_gte}`;
        query = query + newCreatedAt_gte;
      }

      let res = await api.get(query);
      dispatch({
        type: TOTAL_CONTACTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CONTACTS_ERROR,
        payload: err,
      });
      if (err.response && err.response.data) {
        const errors = err.response.data.message;
        if (errors && errors.length > 0) {
          const mainError = errors[0];
          if (mainError.messages) {
            mainError.messages.forEach((error) =>
              dispatch(setAlert(error.message, "danger"))
            );
          }
        }
      }
    }
  };

// Get posts
export const getContacts =
  ({ limit = 10, page = 1, sort = "DESC", q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: RESET_CONTACT,
      });
      if (page) {
        const start = (page - 1) * limit;
        let query = `/contacts?_limit=${limit}&_start=${start}&_sort=createdAt:${sort}`;
        if (q) {
          const newQ = `&_q=${q}`;
          query = query + newQ;
        }
        if (createdAt_lte) {
          const newLTE = `&createdAt_lte=${createdAt_lte}`;
          query = query + newLTE;
        }
        if (createdAt_gte) {
          const newGTE = `&createdAt_gte=${createdAt_gte}`;
          query = query + newGTE;
        }

        const res = await api.get(query);

        dispatch({
          type: GET_CONTACTS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: CONTACTS_ERROR,
        payload: err,
      });
      if (err.response && err.response.data) {
        const errors = err.response.data.message;
        if (errors && errors.length > 0) {
          const mainError = errors[0];
          if (mainError.messages) {
            mainError.messages.forEach((error) =>
              dispatch(setAlert(error.message, "danger"))
            );
          }
        }
      }
    }
  };
// Get posts
export const getContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_CONTACT,
    });
    const res = await api.get("/contacts/" + id);

    dispatch({
      type: GET_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: err,
    });
    if (err.response && err.response.data) {
      const errors = err.response.data.message;
      if (errors && errors.length > 0) {
        const mainError = errors[0];
        if (mainError.messages) {
          mainError.messages.forEach((error) =>
            dispatch(setAlert(error.message, "danger"))
          );
        }
      }
    }
  }
};

export const addContact = (data, history) => async (dispatch) => {
  try {
    const res = await api.post(`/contacts`, data);

    dispatch(setAlert("Contact Saved!", "success"));
    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: err,
    });
    if (err.response && err.response.data) {
      const errors = err.response.data.message;
      if (errors && errors.length > 0) {
        const mainError = errors[0];
        if (mainError.messages) {
          mainError.messages.forEach((error) =>
            dispatch(setAlert(error.message, "danger"))
          );
        }
      }
    }
  }
};
export const editContact = (id, data, history) => async (dispatch) => {
  try {
    const res = await api.put("/contacts/" + id, data);

    dispatch(setAlert("Contact Updated!", "success"));
  } catch (err) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: err,
    });
    if (err.response && err.response.data) {
      const errors = err.response.data.message;
      if (errors && errors.length > 0) {
        const mainError = errors[0];
        if (mainError.messages) {
          mainError.messages.forEach((error) =>
            dispatch(setAlert(error.message, "danger"))
          );
        }
      }
    }
  }
};
