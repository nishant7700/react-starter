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
import { forgetPassword } from "../actions/auth";

const ForgetPassword = ({ alert, forgetPassword, history }) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Forget Password" />
      <div className="body-content outer-top-xs" style={{ margin: "20px 0px" }}>
        <div className="m-3">
          <div className="container">
            <div className="account-content-area">
              <div className="row">
                {/* Sign-in */}
                <div className="col-md-6 col-sm-6 ">
                  <div className="create-new-account">
                    <h3 class="page-subheading">Forget Password</h3>
                    <p className>
                      Enter your email to get a reset link at email.
                    </p>
                    <div className="social-sign-in outer-top-xs"></div>
                    <div className="register-form outer-top-xs">
                      <Formik
                        initialValues={{
                          email: "",
                        }}
                        validationSchema={Yup.object({
                          email: Yup.string().required("Required"),
                        })}
                        onSubmit={async (
                          values,
                          { setSubmitting, resetForm }
                        ) => {
                          setSubmitting(true);
                          console.log("Submitted");
                          console.log(values);

                          await forgetPassword(values);

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
                                {alert &&
                                  alert.map((item) => {
                                    return (
                                      <div className="text-danger">
                                        {" "}
                                        {item.msg}{" "}
                                      </div>
                                    );
                                  })}
                                <div className="mt-4">
                                  <button
                                    type="submit"
                                    className="btn btn-secondary"
                                  >
                                    <span>
                                      <i class="fa fa-lock"></i>
                                      {"  "}
                                      {formik.isSubmitting
                                        ? "Processing..."
                                        : "Send Reset Link"}
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
                {/* Sign-in */}
                {/* create a new account */}
                {/* create a new account */}{" "}
              </div>
              {/* /.row */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ alert: state.alert });

const mapDispatchToProps = { forgetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
