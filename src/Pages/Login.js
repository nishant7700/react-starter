import React from "react";
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
import { Link } from "react-router-dom";
import { login, register } from "../actions/auth";

const Login = ({ alert, login, register, history }) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Login / Register" />
      <section style={{ paddingBottom: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="register-form-content">
                <h3> Login </h3>
                <div className="login-form">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string().required("Required"),
                      password: Yup.string().required("Required"),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
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
                                  <div className={`text-${item.alertType}`}>
                                    {" "}
                                    {item.msg}{" "}
                                  </div>
                                );
                              })}
                            <div
                              className="shopp-now"
                              style={{ marginTop: "10px" }}
                            >
                              <button
                                type="submit"
                                className="btn btn-purchase"
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
                  {/* <hr />
                  <h4> OR </h4> */}
                </div>
                {/* <div style={{ paddingTop: "20px" }} className="text-center">
                  <div className="social-sign-in outer-top-xs">
                    <div>
                      <a>
                        <div className="social-image">
                          <img src="/images/google.png" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a>
                        <div className="social-image">
                          <img src="/images/facebook.png" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="register-form-content">
                <h3> Register </h3>
                <div className="register-form">
                  <Formik
                    initialValues={{
                      email: "",
                      name: "",
                      phone: "",
                      password: "",
                      confirm_password: "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string().required("Required"),
                      password: Yup.string().required("Required"),

                      confirm_password: Yup.string()
                        .required("Required")
                        .oneOf(
                          [Yup.ref("password"), null],
                          "Passwords must match"
                        ),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      console.log("Submitted");
                      console.log(values);

                      const formData = {
                        username: values.email,
                        email: values.email,
                        password: values.password,
                        name: values.name,
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
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                              />
                            </div>
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
                                label="Phone"
                                name="phone"
                                type="text"
                                placeholder="Enter Phone"
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
                            {alert &&
                              alert.map((item) => {
                                return (
                                  <div className={`text-${item.alertType}`}>
                                    {" "}
                                    {item.msg}{" "}
                                  </div>
                                );
                              })}
                            <div className="mt-4 shopp-now">
                              <button
                                type="submit"
                                className="btn btn-purchase"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ alert: state.alert });

const mapDispatchToProps = { login, register };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
