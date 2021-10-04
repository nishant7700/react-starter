import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Homepage</title>
      </Helmet>
      {/* header end */}
      <div>
        <h3> Homepage </h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
