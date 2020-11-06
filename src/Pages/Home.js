import React, { Component } from "react";
import { connect } from "react-redux";

const Home = () => {
  return (
    <div>
      <h1> Home </h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
