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
const Materials = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">MATERIALS</h4>
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
                            label="SS"
                            name="ss"
                            type="text"
                            placeholder="Enter SS"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Paint"
                            name="paint"
                            type="text"
                            placeholder="Enter Paint"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Aluminium"
                            name="aluminium"
                            type="text"
                            placeholder="Enter Aluminium"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Others"
                            name="others"
                            type="text"
                            placeholder="Enter Others"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="MS"
                            name="ms"
                            type="text"
                            placeholder="Enter MS"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Powder coating"
                            name="powder_coating"
                            type="text"
                            placeholder="Enter Powder coating"
                          />
                        </div>
                        <div className="col-md-6">
                          <SelectBox
                            label="Paint Department Head"
                            name="paint_department_head"
                            placeholder="Enter Paint Department Head"
                          >
                            <option value="">
                              {" "}
                              Select Paint Department Head{" "}
                            </option>
                          </SelectBox>
                        </div>
                        <div className="col-md-6">
                          <SelectBox
                            label="Metal Department Head"
                            name="metal_department_head"
                            placeholder="Enter Metal Department Head"
                          >
                            <option value="">
                              {" "}
                              Select Metal Department Head{" "}
                            </option>
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

export default connect(mapStateToProps, mapDispatchToProps)(Materials);
