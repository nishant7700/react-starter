import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import {
  TextInput,
  SelectBox,
  TextArea,
  CheckBox,
} from "../components/Form/Form";
import { editUser } from "../actions/auth";
import MyAccountSidebar from "../components/MyAccountSidebar";
import EditAddress from "../components/EditAddress";
const MyAccount = ({ auth: { user }, editUser, alert }) => {
  const ALLPIN = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const [deleteProduct, setDeleteProduct] = useState(false);
  const deleteAddress = async (index) => {
    setDeleteProduct(true);
    const address = user.address ? user.address : [];
    if (address.length > 0) {
      const filteredAddress = address.filter((item, num) => num !== index);
      await editUser(user._id, { address: filteredAddress });
      setDeleteProduct(false);
    }
  };
  const [currentlyEditing, setcurrentlyEditing] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editing, setEditing] = useState(false);
  const editAddress = (index) => {
    setcurrentlyEditing(index);
    setIsEditing(true);
  };
  return (
    <div>
      <Header />
      <Breadcrumb title="My Profile" />
      <section class=" about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <MyAccountSidebar />
            </div>

            <div className="col-md-8 col-sm-12 col-xs-12">
              <div
                className="about-page-cntent"
                style={{
                  padding: "30px 0px",
                  border: "1px solid #f1f1f1",
                  padding: "10px 20px",
                  margin: "20px 0px",
                }}
              >
                <div className=" create-new-account">
                  <h3 class="page-subheading">My Saved Address</h3>
                  <div className="row">
                    {user &&
                      user.address &&
                      user.address.map((item, index) => {
                        return (
                          <div className="col-md-6">
                            <div
                              style={{
                                border: "1px solid #d1d1d1",
                                padding: "10px 20px",
                                marginBottom: "10px",
                              }}
                            >
                              <div> {item.address_1} </div>
                              <div> {item.address_2} </div>
                              <div> {item.landmark} </div>
                              <div> {item.city} </div>
                              <div> {item.state} </div>
                              <div> {item.pincode} </div>
                              <div>
                                <button
                                  className="btn btn-success"
                                  onClick={() => editAddress(index)}
                                >
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  className="btn btn-danger "
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => deleteAddress(index)}
                                >
                                  {deleteProduct ? (
                                    "Deleting"
                                  ) : (
                                    <i className="fa fa-trash"></i>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  {user.address &&
                    user.address.length === 0 &&
                    "No address Found"}
                  <hr />
                  {isEditing ? (
                    <EditAddress
                      currentlyEditing={currentlyEditing}
                      setcurrentlyEditing={setcurrentlyEditing}
                      isEditing={isEditing}
                      editing={editing}
                      setIsEditing={setIsEditing}
                    />
                  ) : (
                    <>
                      {" "}
                      <h3 class="page-subheading"> Add New Address </h3>
                      {user && (
                        <Formik
                          initialValues={{
                            address_1: "",
                            address_2: "",
                            landmark: "",
                            city: "",
                            state: "",
                            pincode: "",
                          }}
                          validationSchema={Yup.object({
                            address_1: Yup.string().required("Required"),
                            city: Yup.string().required("Required"),
                            state: Yup.string().required("Required"),
                            pincode: Yup.string().required("Required"),
                          })}
                          onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                          ) => {
                            setSubmitting(true);
                            const address = user.address ? user.address : [];
                            address.push(values);
                            await editUser(user._id, { address: address });
                            resetForm();
                            setSubmitting(false);
                          }}
                        >
                          {(formik) => {
                            console.log(formik);
                            return (
                              <Form>
                                <div className="row">
                                  <div className="col-md-12">
                                    <TextInput
                                      label="Address 1"
                                      name="address_1"
                                      type="text"
                                      placeholder="Enter Address 1"
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <TextInput
                                      label="Address 2"
                                      name="address_2"
                                      type="text"
                                      placeholder="Enter Email"
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <TextInput
                                      label="Landmark"
                                      name="landmark"
                                      type="text"
                                      placeholder="Enter Landmark"
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <TextInput
                                      label="City"
                                      name="city"
                                      type="text"
                                      placeholder="Enter City"
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <SelectBox
                                      label="State"
                                      name="state"
                                      placeholder="Enter State"
                                    >
                                      <option value=""> Select State </option>
                                      {ALLPIN &&
                                        ALLPIN.map((item) => {
                                          return (
                                            <option value={item}>
                                              {" "}
                                              {item}{" "}
                                            </option>
                                          );
                                        })}
                                    </SelectBox>
                                  </div>
                                  <div className="col-md-6">
                                    <TextInput
                                      label="Pin"
                                      name="pincode"
                                      type="text"
                                      placeholder="Enter Pin"
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <button
                                      className="btn btn-success "
                                      style={{ margin: "20px 0px" }}
                                    >
                                      {" "}
                                      {formik.isSubmitting
                                        ? "Saving..."
                                        : "Save"}{" "}
                                    </button>
                                  </div>
                                </div>
                              </Form>
                            );
                          }}
                        </Formik>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth, alert: state.alert });

const mapDispatchToProps = { editUser };

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
