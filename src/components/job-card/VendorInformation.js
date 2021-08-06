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
const VendorInformation = (props) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">Vendor Information</h4>
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
                            label="PO No"
                            name="po_no"
                            type="text"
                            placeholder="Enter PO No"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Invoice No"
                            name="invoice_no"
                            type="text"
                            placeholder="Enter Invoice No"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="PO Date"
                            name="po_date"
                            type="date"
                            placeholder="Enter PO Date"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Delivery Date"
                            name="delivery_date"
                            type="date"
                            placeholder="Enter Delivery Date"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextArea
                            label="Address"
                            name="address"
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

export default connect(mapStateToProps, mapDispatchToProps)(VendorInformation);
