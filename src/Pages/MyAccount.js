import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyAccountSidebar from "../components/MyAccountSidebar";
const MyAccount = ({ auth: { user } }) => {
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
                <div
                  className=" create-new-account"
                  style={{ padding: "50px 0px" }}
                >
                  <h5 className="page-subheading">
                    Welcome {user && user.name}
                  </h5>
                  <p>
                    {" "}
                    You can Manage your orders, Manage your profile, Manage
                    Adderess, Change Password from here{" "}
                  </p>
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

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
