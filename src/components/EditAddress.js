import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { TextInput, SelectBox, TextArea, CheckBox } from "./Form/Form";
import { editUser } from "../actions/auth";
const EditAddress = ({
  auth: { user },
  editUser,
  currentlyEditing,
  isEditing,
  editing,
  setIsEditing,
  setcurrentlyEditing,
}) => {
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
  const [activeAddress, setActiveAddress] = useState(null);
  useEffect(() => {
    const address = user.address ? user.address : [];
    const filterData = address.filter(
      (item, index) => index === currentlyEditing
    );
    setActiveAddress(filterData[0]);
  }, [currentlyEditing]);
  return (
    <div>
      <h3 class="page-subheading"> Edit Address </h3>
      {activeAddress && (
        <Formik
          initialValues={{
            address_1: activeAddress.address_1,
            address_2: activeAddress.address_2,
            landmark: activeAddress.lankmark,
            city: activeAddress.city,
            state: activeAddress.state,
            pincode: activeAddress.pin,
          }}
          validationSchema={Yup.object({
            address_1: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            pincode: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const address = user.address ? user.address : [];
            address[currentlyEditing] = values;

            await editUser(user._id, { address: address });
            setcurrentlyEditing(null);
            setIsEditing(false);
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
                          return <option value={item}> {item} </option>;
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
                      {formik.isSubmitting ? "Saving..." : "Edit"}{" "}
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
