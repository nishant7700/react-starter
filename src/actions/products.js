import api from "../utils/api";
import {
  GET_PRODUCTS,
  TOTAL_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCT,
  RESET_PRODUCT,
  PRODUCTS_ERROR,
} from "./types";

import { setAlert } from "./alert";
import { products } from "../modals/products";
// Get posts
export const countProduct =
  ({ q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    try {
      let query = "/products/count?";
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
        type: TOTAL_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCTS_ERROR,
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
export const getProducts =
  ({ limit = 10, page = 1, sort = "DESC", q, createdAt_lte, createdAt_gte }) =>
  async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
    // try {
    //   dispatch({
    //     type: RESET_PRODUCT,
    //   });
    //   if (page) {
    //     const start = (page - 1) * limit;
    //     let query = `/products?_limit=${limit}&_start=${start}&_sort=createdAt:${sort}`;
    //     if (q) {
    //       const newQ = `&_q=${q}`;
    //       query = query + newQ;
    //     }
    //     if (createdAt_lte) {
    //       const newLTE = `&createdAt_lte=${createdAt_lte}`;
    //       query = query + newLTE;
    //     }
    //     if (createdAt_gte) {
    //       const newGTE = `&createdAt_gte=${createdAt_gte}`;
    //       query = query + newGTE;
    //     }

    //     const res = await api.get(query);

    //     dispatch({
    //       type: GET_PRODUCTS,
    //       payload: res.data,
    //     });
    //   }
    // } catch (err) {
    //   dispatch({
    //     type: PRODUCTS_ERROR,
    //     payload: err,
    //   });
    //   if (err.response && err.response.data) {
    //     const errors = err.response.data.message;
    //     if (errors && errors.length > 0) {
    //       const mainError = errors[0];
    //       if (mainError.messages) {
    //         mainError.messages.forEach((error) =>
    //           dispatch(setAlert(error.message, "danger"))
    //         );
    //       }
    //     }
    //   }
    // }
  };
// Get posts
export const getProductBySlug =
  ({ slug }) =>
  async (dispatch) => {
    const filterData = products.filter((item) => item.slug === slug);
    dispatch({
      type: GET_PRODUCT,
      payload: filterData[0],
    });
    // try {
    //   let query = `/products?slug=${slug}`;

    //   const res = await api.get(query);
    //   if (res.data.length > 0) {
    //     dispatch({
    //       type: GET_PRODUCT,
    //       payload: res.data[0],
    //     });
    //   } else {
    //     dispatch({
    //       type: GET_PRODUCT,
    //       payload: null,
    //     });
    //   }
    // } catch (err) {
    //   dispatch({
    //     type: PRODUCTS_ERROR,
    //     payload: err,
    //   });
    //   if (err.response && err.response.data) {
    //     const errors = err.response.data.message;
    //     if (errors && errors.length > 0) {
    //       const mainError = errors[0];
    //       if (mainError.messages) {
    //         mainError.messages.forEach((error) =>
    //           dispatch(setAlert(error.message, "danger"))
    //         );
    //       }
    //     }
    //   }
    // }
  };
// Get posts
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PRODUCT,
    });
    const res = await api.get("/products/" + id);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
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

export const addProduct = (data, history) => async (dispatch) => {
  try {
    const res = await api.post(`/products`, data);

    dispatch(setAlert("Product Saved!", "success"));
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
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
export const editProduct = (id, data, history) => async (dispatch) => {
  try {
    const res = await api.put("/products/" + id, data);

    dispatch(setAlert("Product Updated!", "success"));
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
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
