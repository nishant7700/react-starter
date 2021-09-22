import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  getCart,
  addToCartAction,
  decreaseQuantity,
  updateCart,
  removeFromCartAction,
} from "../actions/cart";
import { Link } from "react-router-dom";
import { URI } from "../constants/constants";
const Cart = ({
  removeFromCartAction,
  addToCartAction,
  history,
  updateCart,
  decreaseQuantity,
  cart: { cart },
}) => {
  const [totalAmount, setTotalAmount] = useState(null);
  useEffect(() => {
    let total = 0;

    if (cart) {
      cart.map((item) => {
        total = total + item.sale_price * item.quantity;
      });
    }

    setTotalAmount(total);
  }, [cart, totalAmount]);
  const decreaseQuantityFromCart = (item) => {
    decreaseQuantity(item.slug);
  };
  const addToCart = (item) => {
    addToCartAction(item);
  };
  return (
    <div>
      <Header />
      <Breadcrumb title="Cart" />
      {cart && cart.length > 0 ? (
        <div className="cart-main-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-heading">Shopping cart summary</h1>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart &&
                        cart.map((item) => {
                          return (
                            <tr>
                              <td className="product-thumbnail">
                                <a href="#">
                                  {item.featured_image ? (
                                    <img
                                      src={`${URI}${item.featured_image}`}
                                      alt="product1"
                                      style={{
                                        width: "175px",
                                        height: "120px",
                                        objectFit: "contain",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="/assets/images/products/default.jpg"
                                      alt="product1"
                                      style={{
                                        width: "175px",
                                        height: "120px",
                                        objectFit: "contain",
                                      }}
                                    />
                                  )}
                                </a>
                              </td>
                              <td className="product-name">{item.name}</td>
                              <td className="product-price">
                                <span className="amount">
                                  {" "}
                                  Rs {parseFloat(item.sale_price).toFixed(
                                    2
                                  )}{" "}
                                </span>
                              </td>
                              <td className="product-quantity">
                                <div className="quantity">
                                  <button
                                    style={{
                                      background: "rgb(207, 92, 124)",
                                      border: "1px solid rgb(207, 92, 124)",
                                      color: "#fff",
                                      padding: "10px 10px",
                                      fontSize: "18px",
                                      borderRadius: "5px",
                                    }}
                                    onClick={() =>
                                      decreaseQuantityFromCart(item)
                                    }
                                    type="button"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    disabled
                                    name="quantity"
                                    value={item.quantity}
                                    title="Qty"
                                    className="qty"
                                    size={4}
                                  />
                                  <button
                                    style={{
                                      background: "rgb(207, 92, 124)",
                                      border: "1px solid rgb(207, 92, 124)",
                                      color: "#fff",
                                      padding: "10px 10px",
                                      fontSize: "18px",
                                      borderRadius: "5px",
                                    }}
                                    onClick={() => addToCart(item)}
                                    type="button"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="product-subtotal">
                                Rs{" "}
                                {parseFloat(
                                  item.quantity * item.sale_price
                                ).toFixed(2)}
                              </td>
                              <td className="product-remove">
                                <a
                                  onClick={() =>
                                    removeFromCartAction(item.slug)
                                  }
                                >
                                  <i className="fa fa-times" />
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-md-8 col-sm-7 col-xs-12">
                    <div className="buttons-cart">
                      <Link to="/">Continue Shopping</Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-5 col-xs-12">
                    <div className="cart_totals">
                      <table>
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Subtotal</th>
                            <td>
                              <span className="amount">Rs {totalAmount}</span>
                            </td>
                          </tr>

                          <tr className="order-total">
                            <th>Total</th>
                            <td>
                              <strong>
                                <span className="amount">Rs {totalAmount}</span>
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="wc-proceed-to-checkout">
                        <Link to="/checkout">Proceed to Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                style={{ padding: "75px 0px", textAlign: "center" }}
                className="track-order-page"
              >
                <p> Your Shopping cart is empty</p>
                <p>
                  <Link
                    to={`/`}
                    className="readmore"
                    style={{
                      padding: "10px 20px",
                      background: "rgb(51, 51, 51)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Continue Shopping
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

const mapDispatchToProps = {
  addToCartAction,
  decreaseQuantity,
  updateCart,
  removeFromCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
