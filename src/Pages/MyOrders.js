import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { Helmet } from "react-helmet";
import { URI } from "../constants/constants";
import { Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import {
  TextInput,
  SelectBox,
  TextArea,
  CheckBox,
} from "../components/Form/Form";
import {
  getCart,
  addToCartAction,
  decreaseQuantity,
  updateCart,
  removeFromCartAction,
} from "../actions/carts";
const MyOrders = ({ auth: { user }, order: { orders } }) => {
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
                <div className="page-title">Cart</div>
              </div>
              <div className="col-md-3">
                <div className="card-dark">
                  <div className="sidebar-widget">
                    <div className="sidebar-flex">
                      <div className="dash">
                        <Link to="/profile" className="active">
                          My Profile
                        </Link>
                      </div>
                    </div>
                    <div className="sidebar-flex">
                      <div className="dash">
                        <Link to="/orders">My Orders</Link>
                      </div>
                    </div>
                    <div className="sidebar-flex">
                      <div className="dash">
                        <Link to="/address">My Address</Link>
                      </div>
                    </div>
                    <div className="sidebar-flex">
                      <div className="dash">
                        <Link to="/reset-password">Reset Password</Link>
                      </div>
                    </div>

                    <div className="sidebar-flex">
                      <div className="dash">
                        <a>Logout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                {" "}
                <div className="card-dark">
                  <h1 className="page-heading"> My Profile</h1>
                  <div className=" create-new-account">
                    <h3 class="page-subheading">My Orders</h3>
                    {orders && orders.length > 0 ? (
                      orders.map((order, index) => {
                        return (
                          <div
                            className="card mb-3"
                            style={{
                              border: "1px solid #f1f1f1",
                              padding: "20px",

                              boxShadow:
                                "8px 10px 5px 0px rgba(186,168,168,0.52)",
                            }}
                          >
                            <div className="card-header">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  background: "#f1f1f1",
                                  padding: "10px 10px",
                                }}
                              >
                                <div>
                                  Orders : <strong> #{order.orderid} </strong>{" "}
                                </div>
                                <div>
                                  {" "}
                                  Status :{" "}
                                  <strong> {order.order_status} </strong>{" "}
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr</th>
                                      <th>Product Details</th>
                                      <th>Quantity</th>
                                      <th>Price</th>
                                      <th>Sub Total</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {order.product &&
                                      order.product.map((item, index) => {
                                        return (
                                          <tr>
                                            <td> #{index + 1} </td>
                                            <td>
                                              <img
                                                src={`${URI}${item.featured_image}`}
                                                style={{
                                                  width: "100px",
                                                  height: "100px",
                                                  objectFit: "contain",
                                                }}
                                              />
                                              {item.name}
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>₹{item.sale_price}</td>
                                            <td>
                                              ₹{item.quantity * item.sale_price}
                                            </td>
                                          </tr>
                                        );
                                      })}
                                  </tbody>
                                </table>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <div style={{ flex: 1, alignItems: "center" }}>
                                  Order Date: {order.order_date}
                                  <br />
                                  <strong> Address: </strong>
                                  {order.address && (
                                    <div>
                                      {order.address && order.address.address_1}
                                      , <br />
                                      {order.address && order.address.address_2}
                                      ,
                                      <br />
                                      Landmark:{" "}
                                      {order.address && order.address.landmark}
                                      <br />
                                      {order.address &&
                                        order.address.city},{" "}
                                      {order.address && order.address.state}
                                      <br />
                                      {order.address && order.address.pin}
                                      <br />
                                      Payment Mode :{" "}
                                      {order.payment_option ===
                                        "CASH_ON_DELIVERY" && (
                                        <strong> Cash on delivery </strong>
                                      )}
                                      {order.payment_option === "RAZORPAY" && (
                                        <strong> Prepaid </strong>
                                      )}
                                    </div>
                                  )}
                                  <br />
                                  {order.order_status !== "cancelled" &&
                                    moment().diff(order.createdAt, "hours") <
                                      48 && (
                                      <button
                                        onClick={() => cancelOrder(order)}
                                        style={{
                                          background: "#333",
                                          color: "#fff",
                                          border: "1px solid #333",
                                        }}
                                      >
                                        {cancelling ? "Cancelling" : "Cancel"}
                                      </button>
                                    )}
                                </div>
                                <div
                                  style={{ flex: 1 }}
                                  className=" p-3 p-md-4"
                                >
                                  <div className="table-responsive cart">
                                    <table className="table ">
                                      <tbody>
                                        <tr>
                                          <td className="cart_total_label">
                                            Subtotal
                                          </td>
                                          <td className="cart_total_amount">
                                            ₹ {order.product_total}
                                          </td>
                                        </tr>

                                        {/* <tr>
                                          <td className="cart_total_label">
                                            Coupon Discount
                                          </td>
                                          <td className="cart_total_amount">
                                            -₹ {order.coupon_discount}
                                          </td>
                                        </tr> */}
                                        <tr>
                                          <td className="cart_total_label">
                                            Total
                                          </td>
                                          <td className="cart_total_amount">
                                            <strong>
                                              ₹{order.total_amount}
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div> There are no orders available </div>
                    )}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
  order: state.order,
});

const mapDispatchToProps = {
  addToCartAction,
  decreaseQuantity,
  updateCart,
  removeFromCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
