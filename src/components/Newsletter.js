import React from "react";
import { connect } from "react-redux";
import { Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { TextInput, SelectBox, TextArea, CheckBox } from "./Form/Form";
import { addNewsletter } from "../actions/newsletters";
const Newsletter = ({ alert, addNewsletter }) => {
  return (
    <section className="ptb-50 call-to-action">
      <div className="container">
        <div className="row">
          <div className="call-action">
            <h3>Newsletter</h3>
            <p>
              Join over 1,000 people who get free and fresh content delivered
              automatically each time we publish
            </p>
            <div className="newsletter-form">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string().required("Required"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  await addNewsletter(values);
                  resetForm();
                  setSubmitting(false);
                }}
              >
                {(formik) => {
                  console.log(formik);
                  return (
                    <Form>
                      <div className="row">
                        <div
                          className="form-group"
                          style={{ position: "relative" }}
                        >
                          <input
                            name="email"
                            type="text"
                            placeholder="Enter Email"
                            id="newsletter-input"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {alert &&
                            alert.map((item) => {
                              return (
                                <p className="text-success"> {item.msg} </p>
                              );
                            })}
                          <div style={{ padding: "20px 0px" }}>
                            <button className="btn btn-secondary" type="submit">
                              SUBSCRIBE NOW
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
    </section>
  );
};

const mapStateToProps = (state) => ({ alert: state.alert });

const mapDispatchToProps = { addNewsletter };

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
