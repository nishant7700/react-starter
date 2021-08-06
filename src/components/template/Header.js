import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

const Header = ({ auth: { user }, logout }) => {
  const [activeProfile, setActiveProfile] = useState(false);
  return (
    <div>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <Link to="/dashboard" className="logo logo-dark">
                  <span className="logo-sm">
                    <img
                      src="/img/logo.png"
                      alt="Interior Craft "
                      height={45}
                    />
                  </span>
                  <span className="logo-lg">
                    <img src="/img/logo.png" alt="Interior Craft" height={45} />{" "}
                  </span>
                </Link>
                <Link to="/dashboard" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="/img/logo.png" alt="Interior Craft" height={45} />
                  </span>
                  <span className="logo-lg">
                    <img src="/img/logo.png" alt="Interior Craft" height={45} />{" "}
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-bs-toggle="collapse"
                data-bs-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars" />
              </button>
              {/* App Search*/}
            </div>
            <div className="d-flex">
              <div
                className="dropdown d-inline-block"
                onMouseEnter={() => setActiveProfile(!activeProfile)}
                onMouseLeave={() => setActiveProfile(!activeProfile)}
              >
                <button
                  type="button"
                  className="btn header-item"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="/img/avatardefault_92824.png"
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1 fw-medium">
                    {user.name}
                  </span>
                  <i className="fa fa-angle-down d-none d-xl-inline-block" />
                </button>
                <div
                  className={
                    activeProfile
                      ? "dropdown-menu dropdown-menu-end show"
                      : "dropdown-menu dropdown-menu-end"
                  }
                >
                  {/* item*/}
                  <Link className="dropdown-item" to="/profile">
                    <i className="fa fa-user font-size-16 align-middle me-1" />{" "}
                    Profile
                  </Link>

                  <div className="dropdown-divider" />
                  <a
                    style={{ cursor: "pointer" }}
                    className="dropdown-item"
                    onClick={() => logout()}
                  >
                    <i className="fa fa-lock font-size-16 align-middle me-1" />{" "}
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <div
                className="collapse navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="/dashboard"
                      id="topnav-dashboard"
                      role="button"
                    >
                      <i data-feather="home" />
                      <span data-key="t-dashboards">Dashboard</span>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps">Job Cards</span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/job-cards"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Job Cards
                      </Link>
                      <Link
                        to="/job-cards/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Job Card
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps"> Users </span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/users"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Users
                      </Link>
                      <Link
                        to="/users/add"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add User
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps"> Roles </span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <Link
                        to="/roles"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Roles
                      </Link>
                      <Link
                        to="/roles/add"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        Add Role
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-components"
                      role="button"
                    >
                      <i data-feather="box" />
                      <span data-key="t-components">Client Info</span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-components"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Clients</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/clients"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            View All Clients
                          </Link>
                          <Link
                            to="/clients/add"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Add Client
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-table"
                          role="button"
                        >
                          <span data-key="t-tables">Business Informations</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-table"
                        >
                          <Link
                            to="/business-infomation"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            View All Business Informations
                          </Link>
                          <Link
                            to="/business-infomation/add"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Add Business Information
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-charts"
                          role="button"
                        >
                          <span data-key="t-charts">Sites</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-charts"
                        >
                          <Link
                            to="/sites"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            View All Sites
                          </Link>
                          <Link
                            to="/sites/add"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Add Site
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-components"
                      role="button"
                    >
                      <i data-feather="box" />
                      <span data-key="t-components">
                        Architects & Designers
                      </span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-components"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Architects</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <Link
                            to="/architects"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            View All Architects
                          </Link>
                          <Link
                            to="/architects/add"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Add Architect
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-table"
                          role="button"
                        >
                          <span data-key="t-tables">Designers</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-table"
                        >
                          <Link
                            to="/designers"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            View All Designers
                          </Link>
                          <Link
                            to="/designers/add"
                            className="dropdown-item"
                            data-key="t-calendar"
                          >
                            Add Designer
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-charts"
                          role="button"
                        >
                          <span data-key="t-charts">PMC</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-charts"
                        >
                          <a
                            href="apexcharts.html"
                            className="dropdown-item"
                            data-key="t-apex-charts"
                          >
                            View All PMCs
                          </a>
                          <a
                            href="echarts.html"
                            className="dropdown-item"
                            data-key="t-e-charts"
                          >
                            Add PMC
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-components"
                      role="button"
                    >
                      <i data-feather="box" />
                      <span data-key="t-components">
                        Material & Production
                      </span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-components"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Material Informations</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <a
                            href="basic-Elements.html"
                            className="dropdown-item"
                            data-key="t-form-elements"
                          >
                            View All Material Informations
                          </a>
                          <a
                            href="validation.html"
                            className="dropdown-item"
                            data-key="t-form-validation"
                          >
                            Add Material Information
                          </a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-table"
                          role="button"
                        >
                          <span data-key="t-tables">Materials</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-table"
                        >
                          <a
                            href="bootstrap-Basic.html"
                            className="dropdown-item"
                            data-key="t-basic-tables"
                          >
                            View All Materials
                          </a>
                          <a
                            href="datatables.html"
                            className="dropdown-item"
                            data-key="t-data-tables"
                          >
                            Add Material
                          </a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-charts"
                          role="button"
                        >
                          <span data-key="t-charts">Vendors</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-charts"
                        >
                          <a
                            href="apexcharts.html"
                            className="dropdown-item"
                            data-key="t-apex-charts"
                          >
                            View All Vendors
                          </a>
                          <a
                            href="echarts.html"
                            className="dropdown-item"
                            data-key="t-e-charts"
                          >
                            Add Vendor
                          </a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-charts"
                          role="button"
                        >
                          <span data-key="t-charts">
                            Production Informations
                          </span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-charts"
                        >
                          <a
                            href="apexcharts.html"
                            className="dropdown-item"
                            data-key="t-apex-charts"
                          >
                            View All Production Informations
                          </a>
                          <a
                            href="echarts.html"
                            className="dropdown-item"
                            data-key="t-e-charts"
                          >
                            Add Production Information
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-pages"
                      role="button"
                    >
                      <i data-feather="grid" />
                      <span data-key="t-apps"> Transport </span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-pages"
                    >
                      <a
                        href="calendar.html"
                        className="dropdown-item"
                        data-key="t-calendar"
                      >
                        All Transport
                      </a>
                      <a
                        href="chat.html"
                        className="dropdown-item"
                        data-key="t-chat"
                      >
                        Add Transport
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-components"
                      role="button"
                    >
                      <i data-feather="box" />
                      <span data-key="t-components">Accounts</span>{" "}
                      <div className="arrow-down" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-components"
                    >
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-form"
                          role="button"
                        >
                          <span data-key="t-forms">Bills</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-form"
                        >
                          <a
                            href="basic-Elements.html"
                            className="dropdown-item"
                            data-key="t-form-elements"
                          >
                            View All Bills
                          </a>
                          <a
                            href="validation.html"
                            className="dropdown-item"
                            data-key="t-form-validation"
                          >
                            Add Bill
                          </a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-table"
                          role="button"
                        >
                          <span data-key="t-tables">Orders</span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-table"
                        >
                          <a
                            href="bootstrap-Basic.html"
                            className="dropdown-item"
                            data-key="t-basic-tables"
                          >
                            View All Orders
                          </a>
                          <a
                            href="datatables.html"
                            className="dropdown-item"
                            data-key="t-data-tables"
                          >
                            Add Order
                          </a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="dropdown-item dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-charts"
                          role="button"
                        >
                          <span data-key="t-charts"> Transactions </span>{" "}
                          <div className="arrow-down" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-charts"
                        >
                          <a
                            href="apexcharts.html"
                            className="dropdown-item"
                            data-key="t-apex-charts"
                          >
                            View All Transactions
                          </a>
                          <a
                            href="echarts.html"
                            className="dropdown-item"
                            data-key="t-e-charts"
                          >
                            Add Transactions
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="main-content" id="miniaresult" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
