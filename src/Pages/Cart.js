import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { Helmet } from "react-helmet";
import { URI } from "../constants/constants";
import {
  getCart,
  addToCartAction,
  decreaseQuantity,
  updateCart,
  removeFromCartAction,
} from "../actions/carts";
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
      <Link to="/" className="ui-logo" />
      <Menu />
      <div style={{ background: "#000", height: "100vh" }}>
        {/* Title */}

        {/* /Title */}
        {/* Content */}
        <section className="main-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                {" "}
                <div className="page-title">Cart</div>
                {cart &&
                  cart.map((item) => {
                    return (
                      <div>
                        <div className="card-dark">
                          <div className="d-flex justify-content-between">
                            <div>Image</div>
                            <div>Product</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div>Total</div>
                            <div>Action</div>
                          </div>
                        </div>
                        <div className="card-dark">
                          <div className="d-flex justify-content-between">
                            <div>
                              {item.featured_image ? (
                                <img
                                  src={`${item.featured_image}`}
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
                            </div>
                            <div>{item.name} </div>
                            <div>{item.sale_price}</div>
                            <div>
                              <div className="d-flex align-item-center">
                                <div>
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
                                </div>
                                <div style={{ padding: "10px " }}>
                                  {item.quantity}
                                </div>
                                <div>
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
                              </div>
                            </div>
                            <div>
                              Rs{" "}
                              {parseFloat(
                                item.quantity * item.sale_price
                              ).toFixed(2)}
                            </div>
                            <div>
                              <a
                                onClick={() => removeFromCartAction(item.slug)}
                              >
                                <i className="fa fa-times" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="card-dark">
                  <div className="row">
                    <div className="col-md-8 col-sm-7 col-xs-12">
                      <div className="buttons-cart">
                        <Link to="/shop">Continue Shopping</Link>
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
                                  <span className="amount">
                                    Rs {totalAmount}
                                  </span>
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
        </section>
        {/* /Content */}
      </div>
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
