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
const TransportationInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">TRANSPORTATION INFORMATION</h4>
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
                          <SelectBox
                            label="Transport Incharge"
                            name="transport_incharge"
                            placeholder="Enter Transport Incharge"
                          >
                            <option value="">
                              {" "}
                              Select Transport Incharge{" "}
                            </option>
                          </SelectBox>
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Way Bill No"
                            name="way_bill_no"
                            type="text"
                            placeholder="Enter Way Bill No"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Vehicle No"
                            name="vehichle_no"
                            type="text"
                            placeholder="Enter Vehicle No"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Transport Company"
                            name="transport_company"
                            type="text"
                            placeholder="Enter Transport Company"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Builty No"
                            name="builty_no"
                            type="text"
                            placeholder="Enter Builty No"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextArea
                            label="Devlivery Address"
                            name="delivery_address"
                            type="text"
                            placeholder="Enter Devlivery Address"
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
)(TransportationInformation);
