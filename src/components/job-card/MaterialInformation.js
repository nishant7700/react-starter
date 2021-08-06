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
const MaterialInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">MATERIAL INFORMATION</h4>
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
                            label="Order For"
                            name="order_for"
                            type="text"
                            placeholder="Enter Order For"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Quantity"
                            name="quantity"
                            type="text"
                            placeholder="Enter Quantity"
                          />
                        </div>
                        <div className="col-md-6">
                          <CheckBox label="completed" name="completed">
                            {" "}
                            Completed{" "}
                          </CheckBox>
                        </div>
                        <div className="col-md-6">
                          <SelectBox
                            label="Material Incharge"
                            name="material_incharge"
                            placeholder="Enter Material Incharge"
                          >
                            <option value=""> Select Material Incharge </option>
                          </SelectBox>
                        </div>
                        <div className="col-md-6">
                          <SelectBox
                            label="Inspected By"
                            name="inspected_by"
                            placeholder="Enter Inspected By"
                          >
                            <option value=""> Select Inspected By </option>
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
                        <div className="col-md-6">
                          <TextInput
                            label="Net Weight"
                            name="net_weight"
                            type="text"
                            placeholder="Enter Net Weight"
                          />
                        </div>
                        <div className="col-md-6">
                          <CheckBox name="quality_check">
                            {" "}
                            Quality Check{" "}
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
)(MaterialInformation);
