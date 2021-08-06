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
const ProductionInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">Production Information</h4>
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
                            label="Production Start Date"
                            name="production_start_date"
                            type="date"
                            placeholder="Enter Production Start Date"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Production End Date"
                            name="production_end_date"
                            type="date"
                            placeholder="Enter Production End Date"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Delivery"
                            name="delivery"
                            type="text"
                            placeholder="Enter Delivery"
                          />
                        </div>
                        <div className="col-md-6">
                          <SelectBox
                            label="Production Incharge"
                            name="production_incharge"
                            placeholder="Enter Production Incharge"
                          >
                            <option value="">
                              {" "}
                              Select Production Incharge{" "}
                            </option>
                          </SelectBox>
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
                        <div className="col-md-6">
                          <SelectBox
                            label="Approved By"
                            name="approved_by"
                            placeholder="Enter Approved By"
                          >
                            <option value=""> Select Approved By </option>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductionInformation);
