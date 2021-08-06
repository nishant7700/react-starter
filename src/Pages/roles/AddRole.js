import React from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CheckBox,
  SelectBox,
  TextArea,
  TextInput,
} from "../../components/Form/Form";

const AddUser = (props) => {
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Add Role"
          mainLinkTitle="Roles"
          mainLinkUrl="/roles"
          activeLink="Add"
        />
      </div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">USER ROLE</h4>
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
                        <div className="card">
                          <div class="card-header">
                            <h4 class="card-title">Role Options</h4>
                            <p class="card-title-desc">
                              Check the options to activate
                            </p>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add Client Infomation"
                                  name="add_client_information"
                                >
                                  Add Client Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add Client Infomation"
                                  name="edit_client_information"
                                >
                                  Edit Client Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add Business Infomation"
                                  name="add_business_information"
                                >
                                  Add Business Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add Business Infomation"
                                  name="edit_business_information"
                                >
                                  Edit Business Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add site Infomation"
                                  name="add_site_information"
                                >
                                  Add site Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add site Infomation"
                                  name="edit_site_information"
                                >
                                  Edit site Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add architect Infomation"
                                  name="add_architect_information"
                                >
                                  Add architect Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add architect Infomation"
                                  name="edit_architect_information"
                                >
                                  Edit architect Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add designer Infomation"
                                  name="add_designer_information"
                                >
                                  Add designer Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add designer Infomation"
                                  name="edit_designer_information"
                                >
                                  Edit designer Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add pmc Infomation"
                                  name="add_pmc_information"
                                >
                                  Add pmc Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add pmc Infomation"
                                  name="edit_pmc_information"
                                >
                                  Edit pmc Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add material Infomation"
                                  name="add_material_information"
                                >
                                  Add material Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add material Infomation"
                                  name="edit_material_information"
                                >
                                  Edit material Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add materials"
                                  name="add_materials"
                                >
                                  Add materials
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add materials"
                                  name="edit_materials"
                                >
                                  Edit materials
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add vendor Infomation"
                                  name="add_vendor_information"
                                >
                                  Add vendor Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add vendor Infomation"
                                  name="edit_vendor_information"
                                >
                                  Edit vendor Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add production Infomation"
                                  name="add_production_information"
                                >
                                  Add production Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add production Infomation"
                                  name="edit_production_information"
                                >
                                  Edit production Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add transportation Infomation"
                                  name="add_transportation_information"
                                >
                                  Add transportation Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add transportation Infomation"
                                  name="edit_transportation_information"
                                >
                                  Edit transportation Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add transporter Infomation"
                                  name="add_transporter_information"
                                >
                                  Add transporter Infomation
                                </CheckBox>
                              </div>
                              <div className="col-md-6">
                                <CheckBox
                                  label="Add transporter Infomation"
                                  name="edit_transporter_information"
                                >
                                  Edit transporter Infomation
                                </CheckBox>
                              </div>
                            </div>
                          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
