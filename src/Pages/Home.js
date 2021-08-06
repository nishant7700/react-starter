import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../components/Form/Form";
import { login } from "../actions/auth";

const Home = ({ login }) => {
  return (
    <div>
      <div className="auth-page">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xxl-3 col-lg-4 col-md-5">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <a href="index.html" className="d-block auth-logo">
                        <span className="logo-txt">Interior Craft</span>
                      </a>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Welcome Back !</h5>
                        <p className="text-muted mt-2">
                          Sign in to continue to Interior Craft.
                        </p>
                      </div>
                      <Formik
                        initialValues={{
                          username: "",
                          password: "",
                        }}
                        validationSchema={Yup.object({
                          username: Yup.string().required("Required"),
                          password: Yup.string().required("Required"),
                        })}
                        onSubmit={async (
                          values,
                          { setSubmitting, resetForm }
                        ) => {
                          setSubmitting(true);
                          console.log("Submitted");
                          const formData = {
                            identifier: values.username,
                            password: values.password,
                          };
                          await login(formData);
                          resetForm();
                          setSubmitting(false);
                        }}
                      >
                        {(formik) => {
                          return (
                            <Form>
                              <div className="row">
                                <div className="col-md-12">
                                  <TextInput
                                    label="Username"
                                    name="username"
                                    type="text"
                                    placeholder="Enter Username"
                                  />
                                </div>
                                <div className="col-md-12">
                                  <TextInput
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                  />
                                </div>
                                <div className="mb-3">
                                  <button
                                    className="btn btn-primary w-100 waves-effect waves-light"
                                    type="submit"
                                  >
                                    {formik.isSubmitting
                                      ? "Processing..."
                                      : "Log In"}
                                  </button>
                                </div>
                              </div>
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © Interior Craft . Developed{" "}
                        <i className="fa fa-heart text-danger" /> by{" "}
                        <a target="_blank" href="https://luhaifdigitech.com/">
                          Luhaif Digitech
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end auth full page content */}
            </div>
            {/* end col */}
            <div className="col-xxl-9 col-lg-8 col-md-7">
              <div
                className="auth-bg pt-md-5 p-4 d-flex"
                style={{ backgroundImage: "url(/img/slider.jpg)" }}
              >
                <div className="bg-overlay" />
                <ul className="bg-bubbles">
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
                {/* end bubble effect */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-7">
                    <div className="p-0 p-sm-4 px-xl-0">
                      <div
                        id="reviewcarouselIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        {/* end carouselIndicators */}
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="testi-contain text-white">
                              <img src="/img/logo.png" />
                              <h4 className="mt-4 fw-medium lh-base text-white">
                                " Interior Craft is specialized in manufacturing
                                engineered products, design and installation of
                                residential main gates, railings, shower Cabins,
                                spiders and stair construction for Residence,
                                Commercial, Industrial, Health Care,
                                Educational, Governmental work and so on as we
                                believe in creating difference, by our
                                innovative ideas which then converted into
                                design to make a new product. "
                              </h4>
                            </div>
                          </div>
                        </div>
                        {/* end carousel-inner */}
                      </div>
                      {/* end review carousel */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container fluid */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
