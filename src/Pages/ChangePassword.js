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
import { changePassword } from "../actions/auth";
import MyAccountSidebar from "../components/MyAccountSidebar";
const ChangePassword = ({ changePassword, auth: { user }, alert }) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Change Password" />
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
                <div className=" create-new-account">
                  <h3 class="page-subheading">Reset Password</h3>
                  {user && (
                    <Formik
                      initialValues={{
                        password: "",
                        newPassword: "",
                        confirmPassword: "",
                      }}
                      validationSchema={Yup.object({
                        password: Yup.string().required("Required"),
                        newPassword: Yup.string().required("Required"),
                        confirmPassword: Yup.string()
                          .required("Required")
                          .oneOf(
                            [Yup.ref("newPassword"), null],
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
                          identifier: user.email,
                          password: values.password,
                          newPassword: values.newPassword,
                          confirmPassword: values.confirmPassword,
                        };

                        await changePassword(formData);
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
                                  label="Password"
                                  name="password"
                                  type="password"
                                  placeholder="Enter Password"
                                />
                              </div>
                              <div className="col-md-12">
                                <TextInput
                                  label="New Password"
                                  name="newPassword"
                                  type="password"
                                  placeholder="Enter New Password"
                                />
                              </div>
                              <div className="col-md-12">
                                <TextInput
                                  label="Confirm Password"
                                  name="confirmPassword"
                                  type="password"
                                  placeholder="Enter Confirm Password"
                                />
                              </div>
                              <div className="mt-4">
                                {alert &&
                                  alert.map((item) => {
                                    return (
                                      <p className={`text-${item.alertType}`}>
                                        {" "}
                                        {item.msg}{" "}
                                      </p>
                                    );
                                  })}
                              </div>
                              <div className="mt-4">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  {formik.isSubmitting
                                    ? "Saving..."
                                    : "Change Password"}
                                </button>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  )}
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

const mapStateToProps = (state) => ({ auth: state.auth, alert: state.alert });

const mapDispatchToProps = { changePassword };

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
