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
const TransporterInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">TRANSPORTER INFORMATION</h4>
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
                            label="Driver"
                            name="driver"
                            type="text"
                            placeholder="Enter Driver"
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
                            label="Material Size"
                            name="material_size"
                            type="text"
                            placeholder="Enter Material Size"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Vehicle Time In"
                            name="vehicle_time_in"
                            type="text"
                            placeholder="Enter Vehicle Time In"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Vehicle Time Out"
                            name="vehicle_time_out"
                            type="text"
                            placeholder="Enter Vehicle Time Out"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Vehicle Carrier Size"
                            name="vehicle_carrier_size"
                            type="text"
                            placeholder="Enter Vehicle Carrier Size"
                          />
                        </div>
                        <div className="col-md-6">
                          <CheckBox name="heavy_equipment" placeholder="Enter ">
                            {" "}
                            Heavy Equipment{" "}
                          </CheckBox>
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
)(TransporterInformation);
