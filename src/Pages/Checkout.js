import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { Form, Formik, FieldArray } from "formik";
import api from "../utils/api";
import * as Yup from "yup";
import {
  TextInput,
  SelectBox,
  TextArea,
  CheckBox,
} from "../components/Form/Form";

import axios from "axios";
import { Helmet } from "react-helmet";
import { getCart } from "../actions/carts";
import { URI } from "../constants/constants";
const Checkout = ({ history, cart: { cart }, auth: { user }, alert }) => {
  const [step, setStep] = useState(1);
  const [customerExist, setCustomerExist] = useState(false);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("CASH_ON_DELIVERY");
  const [orderPlaced, setOrderPlaced] = useState(false);
  useEffect(async () => {
    if (user) {
      setStep(2);
    }
  }, [user]);
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
  const placeOrder = async () => {
    setOrderPlaced(true);

    if (paymentMethod === "CASH_ON_DELIVERY") {
      if (cart) {
        console.log(cart);

        let newForm = {
          address: address,
          customer: {
            name: address.name,
            email: address.email,

            phone: address.phone,
          },
          user: user.id,
          product: cart,
          payment_option: paymentMethod,
          is_paid: false,
          order_status: "processing",
          total_amount: totalAmount,
          product_total: totalAmount,
          order_date: new Date(),
        };

        // await addOrder(newForm);
        const newOrderSaved = await api.post(`/orders`, newForm);
        if (newOrderSaved.data) {
          await savePaidOrder(newOrderSaved.data._id, newOrderSaved.data);
          localStorage.removeItem("CART");
          getCart();
          setOrderPlaced(false);
          history.push(
            `/order-placed?orderid=${newOrderSaved.data.orderid}&total_amount=${newForm.total_amount}`
          );

          //   localStorage.removeItem("CART");
          //   getCart();
          //   setOrderPlaced(false);
          //   history.push("/order-placed");
        }
      }
    }
    if (paymentMethod === "RAZORPAY") {
      let newForm = {
        address: address,
        customer: {
          name: address.name,
          email: address.email,

          phone: address.phone,
        },
        user: user.id,
        product: cart,
        payment_option: paymentMethod,
        is_paid: false,
        order_status: "pending",
        total_amount: totalAmount,
        product_total: totalAmount,
        order_date: new Date(),
      };
      const newOrderSaved = await api.post(`/orders`, newForm);

      if (newOrderSaved.data) {
        const order = await axios.get(
          `https://www.anysa.in/razorpay/razorpay/pay.php?amount=${totalAmount}`
        );
        var options = {
          key: "rzp_live_hzDvXy5WlqxMc4", // Enter the Key ID generated from the Dashboard
          amount: totalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Anysa",
          description: "",
          image: "https://www.anysa.in/img/logo.png",
          order_id: order.data, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: async function (response) {
            if (cart) {
              newOrderSaved.data.order_status = "processing";
              newOrderSaved.data.is_paid = true;
              await savePaidOrder(newOrderSaved.data._id, newOrderSaved.data);
              localStorage.removeItem("CART");
              getCart();
              setOrderPlaced(false);
              history.push(
                `/order-placed?orderid=${newOrderSaved.data.orderid}&total_amount=${newForm.total_amount}`
              );
              //   localStorage.removeItem("CART");
              //   getCart();
              //   setOrderPlaced(false);
              //   history.push("/order-placed");
            }
          },
          prefill: {
            name: `${address && address.name}`,
            email: user && user.email,
            contact: address && address.phone,
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert("Payment Failed Please try again");
        });
        rzp1.open();
      }
    }
  };
  const selectAddeess = (index) => {
    const address = user.address ? user.address : null;
    const filteredData = address.filter((item, num) => num === index);
    const address_new = filteredData[0];
    if (address_new) {
      setAddress(address_new);
      setStep(3);
    }
  };
  const loginWithFacebook = () => {
    localStorage.setItem("from_URL", "/checkout");
    window.location.href = "https://api.anysa.in/connect/facebook";
  };
  const loginWithGoogle = () => {
    localStorage.setItem("from_URL", "/checkout");
    window.location.href = "https://api.anysa.in/connect/google";
  };
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      <div style={{ background: "#000" }}>
        {/* Title */}

        {/* /Title */}
        {/* Content */}
        <section className="main-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="page-title">Checkout</div>
                <div className="card-dark">
                  <h1 className="page-heading"> Procced to Checkout</h1>
                  {step === 1 && (
                    <div className="coupon-area" style={{ margin: "20px 0px" }}>
                      <div>
                        <div className="container-fluid">
                          <div className="account-content-area">
                            <div className="row">
                              {/* Sign-in */}
                              <div className="col-md-6 col-sm-6 ">
                                <div className="create-new-account">
                                  <h3 class="page-subheading">
                                    Already Registered
                                  </h3>

                                  <div className="register-form outer-top-xs">
                                    <Formik
                                      initialValues={{
                                        email: "",
                                        password: "",
                                      }}
                                      validationSchema={Yup.object({
                                        email:
                                          Yup.string().required("Required"),
                                        password:
                                          Yup.string().required("Required"),
                                      })}
                                      onSubmit={async (
                                        values,
                                        { setSubmitting, resetForm }
                                      ) => {
                                        setSubmitting(true);
                                        console.log("Submitted");
                                        console.log(values);
                                        const formData = {
                                          identifier: values.email,
                                          password: values.password,
                                        };

                                        await login(formData);
                                        resetForm();
                                        setSubmitting(false);
                                      }}
                                    >
                                      {(formik) => {
                                        console.log(formik);
                                        return (
                                          <Form>
                                            <div>
                                              <div className="mb-3">
                                                <TextInput
                                                  label="Email"
                                                  name="email"
                                                  type="text"
                                                  placeholder="Enter Email"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <TextInput
                                                  label="Password"
                                                  name="password"
                                                  type="password"
                                                  placeholder="Enter Password"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <Link to="/forget-password">
                                                  Forgot Password ?
                                                </Link>
                                              </div>
                                              {alert &&
                                                alert.map((item) => {
                                                  return (
                                                    <div
                                                      className={`text-${item.alertType}`}
                                                    >
                                                      {" "}
                                                      {item.msg}{" "}
                                                    </div>
                                                  );
                                                })}
                                              <div
                                                style={{ marginTop: "10px" }}
                                              >
                                                <button
                                                  type="submit"
                                                  className="login-btn"
                                                >
                                                  <span>
                                                    <i class="fa fa-lock"></i>
                                                    {"  "}
                                                    {formik.isSubmitting
                                                      ? "Processing..."
                                                      : "Login"}
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </Form>
                                        );
                                      }}
                                    </Formik>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                              {/* Sign-in */}
                              {/* create a new account */}
                              <div className="col-md-6 col-sm-6 ">
                                <div className=" create-new-account">
                                  <h3 class="page-subheading">
                                    Create an account
                                  </h3>

                                  <div
                                    className="register-form outer-top-xs"
                                    role="form"
                                  >
                                    <Formik
                                      initialValues={{
                                        email: "",
                                        name: "",
                                        phone: "",
                                        password: "",
                                        confirm_password: "",
                                      }}
                                      validationSchema={Yup.object({
                                        email:
                                          Yup.string().required("Required"),
                                        password:
                                          Yup.string().required("Required"),
                                        phone: Yup.string()
                                          .required("Required")
                                          .matches(
                                            /^[0-9]+$/,
                                            "Must be only digits"
                                          )
                                          .min(10, "Must be exactly 10 digits")
                                          .max(10, "Must be exactly 10 digits"),
                                        confirm_password: Yup.string()
                                          .required("Required")
                                          .oneOf(
                                            [Yup.ref("password"), null],
                                            "Passwords must match"
                                          ),
                                      })}
                                      onSubmit={async (
                                        values,
                                        { setSubmitting, resetForm }
                                      ) => {
                                        setSubmitting(true);
                                        console.log("Submitted");
                                        console.log(values);

                                        const formData = {
                                          username: values.email,
                                          email: values.email,
                                          password: values.password,
                                          phone: values.phone,
                                        };
                                        await register(formData);
                                        resetForm();
                                        setSubmitting(false);
                                      }}
                                    >
                                      {(formik) => {
                                        console.log(formik);
                                        return (
                                          <Form>
                                            <div>
                                              <div className="mb-3">
                                                <TextInput
                                                  label="Email"
                                                  name="email"
                                                  type="text"
                                                  placeholder="Enter Email"
                                                />
                                              </div>

                                              <div className="mb-3">
                                                <TextInput
                                                  label="Password"
                                                  name="password"
                                                  type="password"
                                                  placeholder="Enter Password"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <TextInput
                                                  label="Confirm Password"
                                                  name="confirm_password"
                                                  type="password"
                                                  placeholder="Enter Confirm Password"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label> Phone </label>
                                                <input
                                                  name="phone"
                                                  type="text"
                                                  value={formik.values.phone}
                                                  className="form-control"
                                                  onChange={formik.handleChange}
                                                  placeholder="Enter Phone"
                                                />
                                              </div>
                                              {formik.touched.phone &&
                                              formik.errors.phone ? (
                                                <div className="text-danger">
                                                  {formik.errors.phone}
                                                </div>
                                              ) : null}

                                              {alert &&
                                                alert.map((item) => {
                                                  return (
                                                    <p
                                                      className={`text-${item.alertType}`}
                                                    >
                                                      {" "}
                                                      {item.msg}{" "}
                                                    </p>
                                                  );
                                                })}
                                              <div className="mt-4">
                                                <button
                                                  type="submit"
                                                  className="signup-btn"
                                                >
                                                  <span>
                                                    <i class="fa fa-user left"></i>
                                                    {"  "}
                                                    {formik.isSubmitting
                                                      ? "Processing..."
                                                      : "Create an account"}
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </Form>
                                        );
                                      }}
                                    </Formik>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                              {/* create a new account */}{" "}
                            </div>

                            {/* /.row */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {step === 1 && (
                  <div class="card-dark">
                    <div class="container-fluid">
                      <div className="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div className=" create-new-account">
                            <div>
                              <h3 class="page-subheading">
                                2. Billing Details
                              </h3>
                              <div className="row">
                                {user &&
                                  user.address &&
                                  user.address.map((item, index) => {
                                    return (
                                      <div
                                        className="col-md-6"
                                        style={{ marginBottom: "10px" }}
                                      >
                                        <div
                                          style={{
                                            border: "1px solid #d1d1d1",
                                            padding: "10px 20px",
                                          }}
                                        >
                                          <div> {item.address_1} </div>
                                          <div> {item.address_2} </div>
                                          <div> {item.landmark} </div>
                                          <div> {item.city} </div>
                                          <div> {item.state} </div>
                                          <div> {item.pin} </div>
                                          <div>
                                            <button
                                              className="btn btn-success"
                                              onClick={() =>
                                                selectAddeess(index)
                                              }
                                            >
                                              Select
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                              <hr />
                              <div>
                                <div className="">
                                  <Formik
                                    initialValues={{
                                      name: user && user.name,
                                      phone: user && user.phone,
                                      email: user && user.email,
                                      address_1: "",
                                      address_2: "",
                                      landmark: "",
                                      city: "",
                                      state: "",
                                      pin: "",
                                    }}
                                    validationSchema={Yup.object({
                                      name: Yup.string().required("Required"),
                                      phone: Yup.string()
                                        .required("Required")
                                        .matches(
                                          /^[0-9]+$/,
                                          "Must be only digits"
                                        )
                                        .min(10, "Must be exactly 10 digits")
                                        .max(10, "Must be exactly 10 digits"),
                                      pin: Yup.string()
                                        .required("Required")
                                        .matches(
                                          /^[0-9]+$/,
                                          "Must be only digits"
                                        )
                                        .min(6, "Must be exactly 6 digits")
                                        .max(6, "Must be exactly 6 digits"),
                                      email: Yup.string().required("Required"),
                                      address_1:
                                        Yup.string().required("Required"),

                                      city: Yup.string().required("Required"),
                                      state: Yup.string().required("Required"),
                                    })}
                                    onSubmit={async (
                                      values,
                                      { setSubmitting, resetForm }
                                    ) => {
                                      setSubmitting(true);
                                      const address = user.address
                                        ? user.address
                                        : [];
                                      address.push(values);
                                      await editUser(user.id, {
                                        address,
                                      });
                                      // setAddress(values);
                                      // setStep(3);
                                      resetForm();
                                      setSubmitting(false);
                                    }}
                                  >
                                    {(formik) => {
                                      console.log(formik);
                                      return (
                                        <Form>
                                          <div className="row">
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="Name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter Name"
                                              />
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="Phone"
                                                name="phone"
                                                type="text"
                                                placeholder="Enter Phone"
                                              />
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="Email"
                                                name="email"
                                                type="text"
                                                disabled
                                                placeholder="Enter Email"
                                              />
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="Address 1"
                                                name="address_1"
                                                type="text"
                                                placeholder="Enter Address 1"
                                              />
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="Address Line 2"
                                                name="address_2"
                                                type="text"
                                                placeholder="Enter Address Line 2"
                                              />
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="Landmark"
                                                name="landmark"
                                                type="text"
                                                placeholder="Enter Landmark"
                                              />
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <TextInput
                                                label="City"
                                                name="city"
                                                type="text"
                                                placeholder="Enter City"
                                              />
                                            </div>

                                            <div className="col-md-12 form-group">
                                              <SelectBox
                                                label="State"
                                                name="state"
                                                placeholder="Enter State"
                                              >
                                                <option value="">
                                                  Select State
                                                </option>

                                                <option value="Andhra Pradesh">
                                                  Andhra Pradesh
                                                </option>
                                                <option value="Arunachal Pradesh">
                                                  Arunachal Pradesh
                                                </option>
                                                <option value="Assam">
                                                  Assam
                                                </option>
                                                <option value="Bihar">
                                                  Bihar
                                                </option>
                                                <option value="Chhattisgarh">
                                                  Chhattisgarh
                                                </option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">
                                                  Gujarat
                                                </option>
                                                <option value="Haryana">
                                                  Haryana
                                                </option>
                                                <option value="Himachal Pradesh">
                                                  Himachal Pradesh
                                                </option>
                                                <option value="Jammu and Kashmir">
                                                  Jammu and Kashmir
                                                </option>
                                                <option value="Jharkhand">
                                                  Jharkhand
                                                </option>
                                                <option value="Karnataka">
                                                  Karnataka
                                                </option>
                                                <option value="Kerala">
                                                  Kerala
                                                </option>
                                                <option value="Ladakh">
                                                  Ladakh
                                                </option>
                                                <option value="Madhya Pradesh">
                                                  Madhya Pradesh
                                                </option>
                                                <option value="Maharashtra">
                                                  Maharashtra
                                                </option>
                                                <option value="Manipur">
                                                  Manipur
                                                </option>
                                                <option value="Meghalaya">
                                                  Meghalaya
                                                </option>
                                                <option value="Mizoram">
                                                  Mizoram
                                                </option>
                                                <option value="Nagaland">
                                                  Nagaland
                                                </option>
                                                <option value="Odisha">
                                                  Odisha
                                                </option>
                                                <option value="Punjab">
                                                  Punjab
                                                </option>
                                                <option value="Rajasthan">
                                                  Rajasthan
                                                </option>
                                                <option value="Sikkim">
                                                  Sikkim
                                                </option>
                                                <option value="Tamil Nadu">
                                                  Tamil Nadu
                                                </option>
                                                <option value="Telangana">
                                                  Telangana
                                                </option>
                                                <option value="Tripura">
                                                  Tripura
                                                </option>
                                                <option value="Uttarakhand">
                                                  Uttarakhand
                                                </option>
                                                <option value="Uttar Pradesh">
                                                  Uttar Pradesh
                                                </option>
                                                <option value="West Bengal">
                                                  West Bengal
                                                </option>
                                                <option value="Andaman and Nicobar Islands">
                                                  Andaman and Nicobar Islands
                                                </option>
                                                <option value="Chandigarh">
                                                  Chandigarh
                                                </option>
                                                <option value="Dadra and Nagar Haveli">
                                                  Dadra and Nagar Haveli
                                                </option>
                                                <option value=" Daman and Diu">
                                                  Daman and Diu
                                                </option>
                                                <option value="Delhi">
                                                  Delhi
                                                </option>
                                                <option value="Lakshadeep">
                                                  Lakshadeep
                                                </option>
                                                <option value="Pondicherry">
                                                  Pondicherry (Puducherry)
                                                </option>
                                              </SelectBox>
                                            </div>
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <TextInput
                                                  label="Pin"
                                                  name="pin"
                                                  type="text"
                                                  placeholder="Enter Pin"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <button
                                                  type="submit"
                                                  className="signup-btn"
                                                >
                                                  <span>
                                                    {"  "}
                                                    {formik.isSubmitting
                                                      ? "Processing..."
                                                      : "Submit"}
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </Form>
                                      );
                                    }}
                                  </Formik>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {window.innerWidth > 991 && (
                          <div className="col-md-6">
                            <div className="your-order">
                              <h3>Your order</h3>
                              <div>
                                <div className="your-order-table table-responsive">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th className="product-thumbnail">
                                          &nbsp;
                                        </th>
                                        <th className="product-name">
                                          Product
                                        </th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">
                                          Quantity
                                        </th>
                                        <th className="product-subtotal">
                                          Total
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {cart &&
                                        cart.map((item) => {
                                          return (
                                            <tr>
                                              <td className="product-thumbnail">
                                                {item.featured_image ? (
                                                  <img
                                                    src={`${item.featured_image}`}
                                                    alt="product1"
                                                    style={{
                                                      width: "150px",
                                                      height: "100px",
                                                      objectFit: "contain",
                                                    }}
                                                  />
                                                ) : (
                                                  <img
                                                    src="/assets/images/products/default.jpg"
                                                    alt="product1"
                                                    style={{
                                                      width: "150px",
                                                      height: "100px",
                                                      objectFit: "contain",
                                                    }}
                                                  />
                                                )}
                                              </td>
                                              <td
                                                className="product-name"
                                                data-title="Product"
                                              >
                                                {" "}
                                                {item.name}
                                              </td>
                                              <td
                                                className="product-price"
                                                data-title="Price"
                                              >
                                                Rs{" "}
                                                {parseFloat(
                                                  item.sale_price
                                                ).toFixed(2)}
                                              </td>
                                              <td
                                                className="product-quantity"
                                                data-title="Quantity"
                                              >
                                                <div className="quantity">
                                                  {item.quantity}
                                                </div>
                                              </td>
                                              <td
                                                className="product-subtotal"
                                                data-title="Total"
                                              >
                                                Rs{" "}
                                                {parseFloat(
                                                  item.quantity *
                                                    item.sale_price
                                                ).toFixed(2)}
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="table-responsive cart">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td className="cart_total_label">
                                        Cart Subtotal
                                      </td>
                                      <td className="cart_total_amount">
                                        Rs {parseFloat(totalAmount).toFixed(2)}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="cart_total_label">
                                        Total
                                      </td>
                                      <td className="cart_total_amount">
                                        <strong>
                                          Rs{" "}
                                          {parseFloat(totalAmount).toFixed(2)}
                                        </strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div class="card-dark">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <div className=" create-new-account">
                            <h3 class="page-subheading">
                              3: Select Payment Method
                            </h3>

                            <div className="" style={{ paddingBottom: "30px" }}>
                              <div className="order-payment">
                                <div className="payment-method">
                                  <div className="form-check mb-5">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios1"
                                      defaultValue="option1"
                                      defaultChecked
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setPaymentMethod("CASH_ON_DELIVERY");
                                        }
                                      }}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios1"
                                    >
                                      {"  "} Cash On Deliery
                                    </label>
                                  </div>
                                  {/* <div className="form-check mb-5">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="exampleRadios"
                                      id="exampleRadios2"
                                      defaultValue="option1"
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setPaymentMethod("RAZORPAY");
                                        }
                                      }}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleRadios2"
                                    >
                                      {"  "} Razorpay (
                                      Credit,Debit,UPI,NetBanking)
                                    </label>
                                  </div> */}
                                  <button
                                    type="submit"
                                    className="signup-btn"
                                    onClick={() => placeOrder()}
                                  >
                                    <span>
                                      {"  "}
                                      {orderPlaced
                                        ? "Processing..."
                                        : "Place Order"}{" "}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {window.innerWidth > 991 && (
                          <div className="col-md-6">
                            <div className="your-order">
                              <h3>Your order</h3>
                              <div>
                                <div className="your-order-table table-responsive">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th className="product-thumbnail">
                                          &nbsp;
                                        </th>
                                        <th className="product-name">
                                          Product
                                        </th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">
                                          Quantity
                                        </th>
                                        <th className="product-subtotal">
                                          Total
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {cart &&
                                        cart.map((item) => {
                                          return (
                                            <tr>
                                              <td className="product-thumbnail">
                                                {item.featured_image ? (
                                                  <img
                                                    src={`${item.featured_image}`}
                                                    alt="product1"
                                                    style={{
                                                      width: "150px",
                                                      height: "100px",
                                                      objectFit: "contain",
                                                    }}
                                                  />
                                                ) : (
                                                  <img
                                                    src="/assets/images/products/default.jpg"
                                                    alt="product1"
                                                    style={{
                                                      width: "150px",
                                                      height: "100px",
                                                      objectFit: "contain",
                                                    }}
                                                  />
                                                )}
                                              </td>
                                              <td
                                                className="product-name"
                                                data-title="Product"
                                              >
                                                {" "}
                                                {item.name}
                                              </td>
                                              <td
                                                className="product-price"
                                                data-title="Price"
                                              >
                                                Rs{" "}
                                                {parseFloat(
                                                  item.sale_price
                                                ).toFixed(2)}
                                              </td>
                                              <td
                                                className="product-quantity"
                                                data-title="Quantity"
                                              >
                                                <div className="quantity">
                                                  {item.quantity}
                                                </div>
                                              </td>
                                              <td
                                                className="product-subtotal"
                                                data-title="Total"
                                              >
                                                Rs{" "}
                                                {parseFloat(
                                                  item.quantity *
                                                    item.sale_price
                                                ).toFixed(2)}
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="table-responsive cart">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td className="cart_total_label">
                                        Cart Subtotal
                                      </td>
                                      <td className="cart_total_amount">
                                        Rs {parseFloat(totalAmount).toFixed(2)}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="cart_total_label">
                                        Total
                                      </td>
                                      <td className="cart_total_amount">
                                        <strong>
                                          Rs{" "}
                                          {parseFloat(totalAmount).toFixed(2)}
                                        </strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
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
  alert: state.alert,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
