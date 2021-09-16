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
const MyProfile = ({ auth: { user } }) => {
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
                  <Formik
                    initialValues={{
                      name: user && user.name,
                      email: user && user.email,
                      phone: user && user.phone,
                      gender: user && user.gender,
                      dob: user && user.dob,
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().required("Required"),
                      phone: Yup.string()
                        .required("Required")
                        .matches(/^[0-9]+$/, "Must be only digits")
                        .min(10, "Must be exactly 10 digits")
                        .max(10, "Must be exactly 10 digits"),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      await editUser(user._id, values);
                      resetForm();
                      setSubmitting(false);
                    }}
                  >
                    {(formik) => {
                      console.log(formik);
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-12">
                              <TextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                              />
                            </div>
                            <div className="col-md-12">
                              <TextInput
                                label="Email"
                                name="email"
                                type="text"
                                disabled
                                placeholder="Enter Email"
                              />
                            </div>
                            <div className="col-md-12">
                              <TextInput
                                label="Phone"
                                name="phone"
                                type="text"
                                placeholder="Enter Phone"
                              />
                            </div>
                            <div className="col-md-6">
                              <TextInput
                                label="Date of Birth"
                                name="dob"
                                type="date"
                                placeholder="Enter Date of Birth"
                              />
                            </div>
                            <div className="col-md-6">
                              <SelectBox
                                label="Gender"
                                name="gender"
                                placeholder="Enter Gender"
                              >
                                <option value=""> Select Gender </option>
                                <option value="Male"> Male </option>
                                <option value="Female"> Female </option>
                                <option value="others"> Others </option>
                              </SelectBox>
                            </div>
                            <div className="col-md-12">
                              <button
                                className="btn btn-success "
                                style={{ margin: "20px 0px" }}
                              >
                                {" "}
                                {formik.isSubmitting
                                  ? "Saving..."
                                  : "Save"}{" "}
                              </button>
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
        </section>
        {/* /Content */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth, cart: state.cart });

const mapDispatchToProps = {
  addToCartAction,
  decreaseQuantity,
  updateCart,
  removeFromCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
