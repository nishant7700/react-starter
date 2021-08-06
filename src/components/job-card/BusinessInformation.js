import React from "react";
import { connect } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CheckBox,
  SelectBox,
  TextArea,
  TextInput,
} from "../../components/Form/Form";
const BusinessInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">BUSINESS INFORMATION</h4>
            <p class="card-title-desc">Enter Details to add client</p>
          </div>
          <div className="card-body">
            <div className="row">
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
                      <div className="row">
                        <div className="col-md-6">
                          <TextInput
                            label="Company Name"
                            name="company_name"
                            type="text"
                            placeholder="Enter Company Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Business Type"
                            name="business_type"
                            type="text"
                            placeholder="Enter Business Type"
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
                          <TextArea
                            label="Business Address"
                            name="business_address"
                            placeholder="Enter Business Address"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="GST"
                            name="GST"
                            type="text"
                            placeholder="Enter GST"
                          />
                        </div>
                        <div className="col-md-12 text-center">
                          <button type="submit" className="btn btn-success">
                            Save
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
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessInformation);
