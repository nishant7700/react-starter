import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  CheckBox,
  SelectBox,
  TextArea,
  TextInput,
} from "../components/Form/Form";
const ContactUs = () => {
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      <div className="contact-us">
        <div className="contact-form">
          <div className="contact-title">Contact</div>
          <div className="contact-details">
            <p>Interior Craft </p>
            <p>A – 218,219, Sector-83, Phase-II,</p>
            <p> Noida – 201305</p>
          </div>
          <div className="contact-form-details">
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                resetForm();
                setSubmitting(false);
              }}
            >
              {(formik) => {
                console.log(formik);
                return (
                  <Form>
                    <div className="row ">
                      <div className="col-md-6">
                        <TextInput
                          label="Name"
                          name="name"
                          type="text"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextInput
                          label="Phone"
                          name="phone"
                          type="text"
                          placeholder="Enter Phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextInput
                          label="Email"
                          name="email"
                          type="text"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextInput
                          label="Subject"
                          name="subject"
                          type="text"
                          placeholder="Enter Subject"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextArea
                          label="Message"
                          name="message"
                          type="text"
                          placeholder="Enter Message"
                        />
                      </div>
                    </div>
                    <div className="contact-button-holder">
                      <button className="btn submit-contact-form">Send</button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28039.43804162777!2d77.32728781467937!3d28.54183102706904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9d48b8267cd%3A0xb8ae7c7899c59509!2sInterior%20Craft!5e0!3m2!1sen!2sin!4v1629519611218!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
