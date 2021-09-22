import { GET_CART, CARTS_ERROR } from "./types";

// Get posts
export const getCart = () => async (dispatch) => {
  try {
    if (window) {
      const cart = localStorage.getItem("CART");
      dispatch({
        type: GET_CART,
        payload: JSON.parse(cart),
      });
    }
  } catch (err) {
    dispatch({
      type: CARTS_ERROR,
      payload: err,
    });
  }
};
export const addToCartAction = (product) => async (dispatch) => {
  try {
    if (window) {
      const newCart = localStorage.getItem("CART");
      const cart = JSON.parse(newCart);
      console.log("CART ACTION DATA", cart);
      if (cart) {
        const filterProduct = cart.filter((item) => item.slug === product.slug);
        console.log("Filtered Product", filterProduct);
        if (filterProduct.length > 0) {
          const newProducts = cart.map((item) => {
            if (item.slug === product.slug) {
              item.quantity = item.quantity + 1;
            }
            return item;
          });
          console.log("Existing Product", newProducts);
          localStorage.setItem("CART", JSON.stringify(newProducts));
        } else {
          product.quantity = 1;
          console.log("Fresh Product", [...cart, product]);
          console.log("JSON Fresh Product", JSON.stringify([...cart, product]));
          localStorage.setItem("CART", JSON.stringify([...cart, product]));
        }
      } else {
        product.quantity = 1;
        localStorage.setItem("CART", JSON.stringify([product]));
      }
      dispatch(getCart());
    }
  } catch (err) {
    dispatch({
      type: CARTS_ERROR,
      payload: err,
    });
  }
};

export const decreaseQuantity = (slug) => async (dispatch) => {
  try {
    if (window) {
      const newCart = localStorage.getItem("CART");
      const cart = JSON.parse(newCart);
      if (cart) {
        const filteredItems = cart.filter(
          (item) => item.slug === slug && item.quantity === 1
        );
        if (filteredItems.length > 0) {
          dispatch(removeFromCartAction(slug));
        } else {
          const newItems = cart.map((item) => {
            if (item.slug === slug) {
              item.quantity = item.quantity - 1;
            }
            return item;
          });
          localStorage.setItem("CART", JSON.stringify(newItems));
        }
      }

      dispatch(getCart());
    }
  } catch (err) {
    dispatch({
      type: CARTS_ERROR,
      payload: err,
    });
  }
};

export const removeFromCartAction = (slug) => async (dispatch) => {
  try {
    if (window) {
      const newCart = localStorage.getItem("CART");
      const cart = JSON.parse(newCart);
      if (cart) {
        const filteredItems = cart.filter((item) => item.slug !== slug);
        localStorage.setItem("CART", JSON.stringify(filteredItems));
      }

      dispatch(getCart());
    }
  } catch (err) {
    dispatch({
      type: CARTS_ERROR,
      payload: err,
    });
  }
};

export const updateCart = () => async (dispatch) => {
  try {
    if (window) {
      const newCart = localStorage.getItem("CART");
      const cart = JSON.parse(newCart);
      if (cart) {
        console.log("Inside Cart", cart);

        // const filteredItems = cart.filter((item) => item.slug !== slug);
        // localStorage.setItem("CART", JSON.stringify(filteredItems));
      }

      dispatch(getCart());
    }
  } catch (err) {
    dispatch({
      type: CARTS_ERROR,
      payload: err,
    });
  }
};
