import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import {
  TextInput,
  SelectBox,
  TextArea,
  CheckBox,
} from "../components/Form/Form";
import { getOrders, editOrder } from "../actions/orders";
import { changePassword } from "../actions/auth";
import MyAccountSidebar from "../components/MyAccountSidebar";
import moment from "moment";
import { URI } from "../constants/constants";
const MyOrders = ({
  auth: { user },

  history,
  getOrders,
  editOrder,

  order: { orders },
}) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    if (user) {
      const searchParams = [
        {
          label: "user",
          value: user.id,
        },
      ];
      getOrders(1, searchParams);
    }
  }, [user]);
  const cancelOrder = async (order) => {
    setCancelling(true);
    await editOrder(order._id, { order_status: "cancelled" });
    const searchParams = [
      {
        label: "user",
        value: user.id,
      },
    ];
    getOrders(1, searchParams);
    setCancelling(false);
  };
  const getTimeDiffence = (order) => {
    console.log(
      "TIME",
      order.createdAt,
      moment().diff(order.createdAt, "hours")
    );
  };

  return (
    <div>
      <Header />
      <Breadcrumb title="My Orders" />
      <section class=" about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <MyAccountSidebar />
            </div>

            <div className="col-md-8 col-sm-12 col-xs-12">
              <div
                className="about-page-cntent"
                style={{
                  padding: "30px 0px",
                  border: "1px solid #f1f1f1",
                  padding: "10px 20px",
                  margin: "20px 0px",
                }}
              >
                <div>
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
                                    {order.products &&
                                      order.products.map((item, index) => {
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
                                  Order Date:{" "}
                                  {moment(order.createdAt).format(
                                    "DD-MMM-YYYY"
                                  )}
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
                                      {order.address && order.address.pincode}
                                      <br />
                                      Payment Mode :{" "}
                                      {order.payment_method ===
                                        "CASH_ON_DELIVERY" && (
                                        <strong> Cash on delivery </strong>
                                      )}
                                      {order.payment_method === "RAZORPAY" && (
                                        <strong> Prepaid </strong>
                                      )}
                                    </div>
                                  )}
                                  <br />
                                  {/* {order.order_status !== "cancelled" &&
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
                                    )} */}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
  auth: state.auth,
  order: state.order,
});

const mapDispatchToProps = {
  editOrder,
  getOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
