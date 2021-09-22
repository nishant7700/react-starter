import React from "react";
import { connect } from "react-redux";

const Breadcrumb = ({ title }) => {
  return (
    <div>
      <div className="breadcrumb">
        <div className="container">
          <h2>{title}</h2>
          <ul>
            <li>Home</li>
            <li className="active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
