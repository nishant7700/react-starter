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
import { addContact } from "../actions/contacts";
const ContactUs = ({ addContact, alert }) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Contact Us" />
      <div className="contact-us-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-heading">Customer service - Contact</h1>
            </div>
            <div className="col-md-12">
              <div className="contact-form-box">
                <fieldset>
                  <h3 className="page-subheading">send a message</h3>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().required("Required"),
                      email: Yup.string().required("Required"),
                      phone: Yup.string()
                        .required("Required")
                        .matches(/^[0-9]+$/, "Must be only digits")
                        .min(10, "Must be exactly 10 digits")
                        .max(10, "Must be exactly 10 digits"),
                      subject: Yup.string().required("Required"),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      console.log("Submitted");
                      await addContact(values);
                      resetForm();
                      setSubmitting(false);
                    }}
                  >
                    {(formik) => {
                      console.log(formik);
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-xs-12 col-md-6">
                              <p className="form-group">
                                <TextInput
                                  label="Name"
                                  name="name"
                                  type="text"
                                  placeholder="Enter Name"
                                  className="form-control grey"
                                />
                              </p>
                              <p className="form-group">
                                <TextInput
                                  label="Email"
                                  name="email"
                                  type="text"
                                  placeholder="Enter Email"
                                  className="form-control grey"
                                />
                              </p>
                              <p className="form-group">
                                <TextInput
                                  label="Phone"
                                  name="phone"
                                  type="text"
                                  placeholder="Enter Phone"
                                  className="form-control grey"
                                />
                              </p>
                              <p className="form-group">
                                <TextInput
                                  label="Subject"
                                  name="subject"
                                  type="text"
                                  placeholder="Enter Subject"
                                  className="form-control grey"
                                />
                              </p>
                              <div className="form-group">
                                <TextArea
                                  label="Message"
                                  name="message"
                                  id="message"
                                  className="form-control"
                                  placeholder="Enter Message"
                                />
                              </div>
                              {alert &&
                                alert.map((item) => {
                                  return (
                                    <p className="text-success"> {item.msg} </p>
                                  );
                                })}
                              <div className="p-2">
                                <button
                                  id="submitMessage"
                                  name="submitMessage"
                                  type="submit"
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    padding: "10px 10px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                    background: "var(--heading-color)",
                                    color: "#fff",
                                  }}
                                >
                                  <span>
                                    {formik.isSubmitting
                                      ? "PROCESSING..."
                                      : "SEND"}
                                    <i className="fa fa-chevron-right right" />
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                              <div>
                                <h3> Contact Us </h3>
                                <p>
                                  <i className="fa fa-map"></i> Shop no. 22 main
                                  market old Rajender Nagar New Delhi 110060
                                </p>
                                <p>
                                  <i className="fa fa-envelope"></i>{" "}
                                  info@rejuvaplus.com
                                </p>
                                <p>
                                  <i className="fa fa-phone"></i> 9953704519{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ alert: state.alert });

const mapDispatchToProps = { addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
