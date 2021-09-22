import React, { useState } from "react";
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
import { resetPassword } from "../actions/auth";
import { useLocation, useHistory, Link } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ResetPassword = ({ alert, resetPassword, history }) => {
  let query = useQuery();
  const [code, setCode] = useState(query.get("code"));
  return (
    <div>
      <Header />
      <Breadcrumb title="Reset Password" />
      <div className="body-content outer-top-xs" style={{ margin: "20px 0px" }}>
        <div className="m-3">
          <div className="container">
            <div className="account-content-area">
              <div className="row">
                <div className="col-md-6 col-sm-6 ">
                  <div className="create-new-account">
                    <h3 class="page-subheading">Reset Password</h3>
                    <p className>Change Password</p>
                    <div className="social-sign-in outer-top-xs"></div>
                    <div className="register-form outer-top-xs">
                      <Formik
                        initialValues={{
                          password: "",
                          passwordConfirmation: "",
                        }}
                        validationSchema={Yup.object({
                          password: Yup.string().required("Required"),

                          passwordConfirmation: Yup.string()
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
                            code: code,
                            password: values.password,
                            passwordConfirmation: values.passwordConfirmation,
                          };
                          await resetPassword(formData);
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
                                    label="Passowrd"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                  />
                                </div>
                                <div className="mb-3">
                                  <TextInput
                                    label="Confirm Passowrd"
                                    name="passwordConfirmation"
                                    type="password"
                                    placeholder="Enter Confirm Passowrd"
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
                                  <button type="submit" className="login-btn">
                                    <span>
                                      <i class="fa fa-lock"></i>
                                      {"  "}
                                      {formik.isSubmitting
                                        ? "Processing..."
                                        : "Reset Password"}
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

const mapDispatchToProps = { resetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
