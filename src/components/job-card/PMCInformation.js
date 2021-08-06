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
const PMCInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">PMC INFORMATION</h4>
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
                            label="PMC"
                            name="pmc"
                            type="text"
                            placeholder="Enter PMC"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Client"
                            name="client"
                            type="text"
                            placeholder="Enter Client"
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
                            label="Address"
                            name="address"
                            type="text"
                            placeholder="Enter Address"
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

export default connect(mapStateToProps, mapDispatchToProps)(PMCInformation);
