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
import { editUser } from "../actions/auth";
import MyAccountSidebar from "../components/MyAccountSidebar";
const MyProfile = ({ auth: { user }, editUser, alert }) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="My Profile" />
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
                  <h3 class="page-subheading">Edit Profile</h3>
                  {user && (
                    <Formik
                      initialValues={{
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                      }}
                      validationSchema={Yup.object({
                        name: Yup.string().required("Required"),
                        phone: Yup.string()
                          .required("Required")
                          .matches(/^[0-9]+$/, "Must be only digits")
                          .min(10, "Must be exactly 10 digits")
                          .max(10, "Must be exactly 10 digits"),
                      })}
                      onSubmit={async (
                        values,
                        { setSubmitting, resetForm }
                      ) => {
                        setSubmitting(true);
                        await editUser(user._id, values);
                        // resetForm();
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
                              {alert &&
                                alert.map((item) => {
                                  return (
                                    <div className={`text-${item.alertType}`}>
                                      {" "}
                                      {item.msg}{" "}
                                    </div>
                                  );
                                })}
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

const mapDispatchToProps = { editUser };

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
