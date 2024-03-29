import api from "../utils/api";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_PROFILE,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/users/me");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const registeruser = {
      username: formData.email,
      email: formData.email,
      password: formData.password,
    };
    const res = await api.post("/auth/local/register", registeruser);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
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

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/local", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
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
export const forgetPassword = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/forgot-password", formData);
    dispatch(
      setAlert(
        "Email Reset link successfully sent to your email. Please check your email.",
        "success"
      )
    );
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const resetPassword = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/reset-password", formData);
    console.log(res.data);
    if (res.data) {
      dispatch(setAlert("Your Password Reset Successfully", "success"));
    }
  } catch (err) {
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

// Logout
export const logout = () => ({ type: LOGOUT });
