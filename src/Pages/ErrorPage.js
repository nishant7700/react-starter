import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = (props) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Page Not Found" />
      <div className="body-content outer-top-xs" style={{ margin: "20px 0px" }}>
        <div className="m-3">
          <div className="container">
            <div
              className="sign-in-page text-center"
              style={{
                border: "1px solid #f1f1f1",
                padding: "50px 50px",
                margin: "50px auto",
                width: "50%",
              }}
            >
              <div className="row">
                {/* Sign-in */}
                <div className="col-md-12 col-sm-12 sign-in">
                  <h4 className=" text-success" style={{ fontSize: "52px" }}>
                    <i className="fa fa-exclamation-triangle"></i>
                  </h4>

                  <p>Page Not Found</p>
                  <Link to="/" className="btn btn-primary">
                    {" "}
                    Go to Home{" "}
                  </Link>
                  <div className="social-sign-in outer-top-xs"></div>
                  <div className="register-form outer-top-xs"></div>
                </div>
                {/* Sign-in */}
                {/* create a new account */}
                {/* create a new account */}{" "}
              </div>
              {/* /.row */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
