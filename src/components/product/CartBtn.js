import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCartAction,
  decreaseQuantity,
  getCart,
} from "../../actions/carts";

const CartBtn = ({
  item,
  getCart,
  decreaseQuantity,
  addToCartAction,
  cart: { cart },
}) => {
  const [SizeError, setSizeError] = useState(false);
  const [cartValue, setCartValue] = useState(null);

  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    if (cart) {
      const filterCartItem = cart.filter(
        (cartItem) => cartItem.slug === `${item.slug}`
      );
      if (filterCartItem.length > 0) {
        setCartValue(filterCartItem[0]);
      }
    }
  }, [cart, setCartValue]);
  const decreaseQuantityFromCart = () => {
    decreaseQuantity(`${item.slug}`);
  };
  const addToCart = () => {
    addToCartAction({
      name: item.name,
      featured_image: item.featured_image && item.featured_image.url,
      sale_price: item.sale_price,
      slug: `${item.slug}`,
    });
  };
  return (
    <div>
      <div className="cart_extra">
        {cart &&
        cart.filter((cartItem) => cartItem.slug === `${item.slug}`).length >
          0 ? (
          <div className="cart-product-quantity">
            <div className="quantity" style={{ display: "flex" }}>
              <button
                style={{
                  background: "#db882a",
                  border: "1px solid #db882a",
                  color: "#fff",
                  padding: "10px 10px",
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
                onClick={() => decreaseQuantityFromCart()}
                type="button"
              >
                -
              </button>
              <div style={{ padding: "10px 20px", fontSize: "20px" }}>
                {
                  cart.filter((cartItem) => cartItem.slug === `${item.slug}`)[0]
                    .quantity
                }
              </div>
              <button
                style={{
                  background: "#db882a",
                  border: "1px solid #db882a",
                  color: "#fff",
                  padding: "10px 10px",
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
                onClick={() => addToCart()}
                type="button"
              >
                +
              </button>
            </div>
            <Link
              to="/cart"
              className="btn "
              style={{ marginTop: "20px", color: "#fff" }}
            >
              <i className="fa fa-shopping-cart" /> Go to Cart
            </Link>
          </div>
        ) : (
          <div className="product-details-buttons">
            <a
              className="cart-btn"
              onClick={() => addToCart()}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-shopping-cart" />
              <span>Add to Cart</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  getCart,
  addToCartAction,
  decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartBtn);
