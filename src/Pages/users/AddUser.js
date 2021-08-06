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
          title="Add User"
          mainLinkTitle="Dashboard"
          mainLinkUrl="/dashboard"
          activeLink="Main"
        />
      </div>
      <div className="col-lg-12">
        <div className="card">
          <div class="card-header">
            <h4 class="card-title">USER</h4>
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
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Designation"
                            name="designation"
                            type="text"
                            placeholder="Enter Designation"
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
                        <div className="col-md-6">
                          <SelectBox
                            label="User Role"
                            name="user-role"
                            placeholder="Enter User Role"
                          >
                            <option value=""> Select User Role </option>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
