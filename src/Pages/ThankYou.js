import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ThankYou = (props) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Thank You" />
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
                    <i className="fa fa-check-circle"></i>
                  </h4>
                  <p className>Dear Customer,</p>
                  <p>
                    Thankyou for placing your order with us. You will receive an
                    email with all the details shortly.
                  </p>
                  <Link to="/my-orders" className="btn btn-primary">
                    {" "}
                    View Orders{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
