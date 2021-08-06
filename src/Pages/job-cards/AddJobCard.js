import React, { useEffect, useState } from "react";
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
import ClientInformation from "../../components/job-card/ClientInformation";
import BusinessInformation from "../../components/job-card/BusinessInformation";
import SiteInformation from "../../components/job-card/SiteInformation";
import ArchitectInformation from "../../components/job-card/ArchitectInformation";
import DesignerInformation from "../../components/job-card/DesignerInformation";
import PMCInformation from "../../components/job-card/PMCInformation";
import Materials from "../../components/job-card/Materials";
import MaterialInformation from "../../components/job-card/MaterialInformation";
import VendorInformation from "../../components/job-card/VendorInformation";
import ProductionInformation from "../../components/job-card/ProductionInformation";
import TransportationInformation from "../../components/job-card/TransportationInformation";
import TransporterInformation from "../../components/job-card/TransporterInformation";
export const AddJobCard = (props) => {
  const [clientType, setClientType] = useState(null);
  const [optionSelected, setOptionSelected] = useState(false);
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Add Job Card"
          mainLinkTitle="Job Cards"
          mainLinkUrl="/job-cards"
          activeLink="Add"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-12">
            <div className="card">
              <div class="card-header">
                <h4 class="card-title"> SELECT CLIENT TYPE</h4>
                <p class="card-title-desc">
                  Chose client from existing or Enter a new client
                </p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html"> Existing Client </label>
                  </div>
                  <div className="col-3">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                    <label for="css"> Fresh Client </label>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <ClientInformation />
          <BusinessInformation />
          <SiteInformation />
          <ArchitectInformation />
          <DesignerInformation />
          <PMCInformation />
          <MaterialInformation />
          <Materials />
          <VendorInformation />
          <ProductionInformation />
          <TransportationInformation />
          <TransporterInformation />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddJobCard);
