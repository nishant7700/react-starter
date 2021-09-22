import api from "../utils/api";
import {
  GET_ORDERS,
  TOTAL_ORDERS,
  ADD_ORDER,
  GET_ORDER,
  RESET_ORDER,
  ORDERS_ERROR,
} from "./types";

import { setAlert } from "./alert";
// Get posts
export const countOrder =
  ({ q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      let query = "/orders/count?";
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
        type: TOTAL_ORDERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ORDERS_ERROR,
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
export const getOrders =
  ({ limit = 10, page = 1, sort = "DESC", q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: RESET_ORDER,
      });
      if (page) {
        const start = (page - 1) * limit;
        let query = `/orders?_limit=${limit}&_start=${start}&_sort=createdAt:${sort}`;
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
          type: GET_ORDERS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: ORDERS_ERROR,
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
export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_ORDER,
    });
    const res = await api.get("/orders/" + id);

    dispatch({
      type: GET_ORDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDERS_ERROR,
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

export const addOrder = (data, history) => async (dispatch) => {
  try {
    const res = await api.post(`/orders`, data);

    dispatch(setAlert("Order Saved!", "success"));
    dispatch({
      type: ADD_ORDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDERS_ERROR,
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
export const editOrder = (id, data, history) => async (dispatch) => {
  try {
    const res = await api.put("/orders/" + id, data);

    dispatch(setAlert("Order Updated!", "success"));
  } catch (err) {
    dispatch({
      type: ORDERS_ERROR,
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
