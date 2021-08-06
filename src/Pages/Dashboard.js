import React from "react";
import { connect } from "react-redux";
import BreadCrumb from "../components/template/BreadCrumb";
import Header from "../components/template/Header";

const Dashboard = (props) => {
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Dashboard"
          mainLinkTitle="Dashboard"
          mainLinkUrl="/dashboard"
          activeLink="Main"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
