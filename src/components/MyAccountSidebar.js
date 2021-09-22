import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
const MyAccountSidebar = ({ logout }) => {
  return (
    <div>
      <div
        className="sidebar-widget"
        style={{
          background: "none 0px 0px repeat scroll rgb(251, 251, 251)",
          padding: 10,
        }}
      >
        <div className="sidebar-flex">
          <div className="dash">
            <Link to="/my-profile">Profile</Link>
          </div>
        </div>
        <div className="sidebar-flex">
          <div className="dash">
            <Link to="/my-orders">My Orders</Link>
          </div>
        </div>
        <div className="sidebar-flex">
          <div className="dash">
            <Link to="/my-address">My Address</Link>
          </div>
        </div>
        <div className="sidebar-flex">
          <div className="dash">
            <Link to="/change-password">Change Password</Link>
          </div>
        </div>
        <div className="sidebar-flex">
          <div className="dash">
            <a href="#logout" onClick={() => logout()}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountSidebar);
