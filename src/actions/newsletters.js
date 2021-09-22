import api from "../utils/api";
import {
  GET_NEWSLETTERS,
  TOTAL_NEWSLETTERS,
  ADD_NEWSLETTER,
  GET_NEWSLETTER,
  RESET_NEWSLETTER,
  NEWSLETTERS_ERROR,
} from "./types";

import { setAlert } from "./alert";
// Get posts
export const countNewsletter =
  ({ q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      let query = "/newsletters/count?";
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
        type: TOTAL_NEWSLETTERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: NEWSLETTERS_ERROR,
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
export const getNewsletters =
  ({ limit = 10, page = 1, sort = "DESC", q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: RESET_NEWSLETTER,
      });
      if (page) {
        const start = (page - 1) * limit;
        let query = `/newsletters?_limit=${limit}&_start=${start}&_sort=createdAt:${sort}`;
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
          type: GET_NEWSLETTERS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: NEWSLETTERS_ERROR,
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
export const getNewsletter = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_NEWSLETTER,
    });
    const res = await api.get("/newsletters/" + id);

    dispatch({
      type: GET_NEWSLETTER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NEWSLETTERS_ERROR,
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

export const addNewsletter = (data, history) => async (dispatch) => {
  try {
    const res = await api.post(`/newsletters`, data);

    dispatch(setAlert("Newsletter Saved!", "success"));
    dispatch({
      type: ADD_NEWSLETTER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NEWSLETTERS_ERROR,
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
export const editNewsletter = (id, data, history) => async (dispatch) => {
  try {
    const res = await api.put("/newsletters/" + id, data);

    dispatch(setAlert("Newsletter Updated!", "success"));
  } catch (err) {
    dispatch({
      type: NEWSLETTERS_ERROR,
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
