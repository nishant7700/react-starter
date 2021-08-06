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
const SiteInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">SITE INFORMATION</h4>
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
                            label="Site Name"
                            name="site_name"
                            type="text"
                            placeholder="Enter Site Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Site Incharge"
                            name="site_incharge"
                            type="text"
                            placeholder="Enter Site Incharge"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Incharge Phone"
                            name="incharge_phone"
                            type="text"
                            placeholder="Enter Incharge Phone"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Incharge Email"
                            name="incharge_email"
                            type="text"
                            placeholder="Enter Incharge Email"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextArea
                            label="Site Address"
                            name="site_address"
                            placeholder="Enter Site Address"
                          />
                        </div>
                        <div className="col-md-6">
                          <SelectBox
                            label="Assisted By"
                            name="assisted_by"
                            placeholder="Enter Assisted By"
                          >
                            <option value=""> Select Assisted By </option>
                          </SelectBox>
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

export default connect(mapStateToProps, mapDispatchToProps)(SiteInformation);
