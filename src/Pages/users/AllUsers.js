import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";

export const AllUsers = (props) => {
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Job Cards"
          mainLinkTitle="Dashboard"
          mainLinkUrl="/dashboard"
          activeLink="Job Cards"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm">
                    <div className="mb-4">
                      <Link
                        type="button"
                        to="/users/add"
                        className="btn btn-light
                                  waves-effect waves-light"
                      >
                        <i className="fa fa-plus me-1" /> Add User
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end row */}
                <div className="table-responsive">
                  <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div
                          className="dataTables_length"
                          id="DataTables_Table_0_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="DataTables_Table_0_length"
                              aria-controls="DataTables_Table_0"
                              className="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div
                          id="DataTables_Table_0_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder
                              aria-controls="DataTables_Table_0"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="table align-middle datatable dt-responsive table-check nowrap dataTable no-footer">
                          <thead>
                            <tr className="bg-transparent" role="row">
                              <th>Sr No</th>
                              <th>Job Card No</th>
                              <th>Project Date</th>
                              <th>Project Name</th>
                              <th>Client Code</th>
                              <th>Status</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td className="sorting_1">1</td>
                              <td>
                                <a
                                  href="javascript: void(0);"
                                  className="text-dark fw-medium"
                                >
                                  #MN0215
                                </a>
                              </td>
                              <td>12 Oct, 2020</td>
                              <td>Connie Franco</td>
                              <td>$26.30</td>
                              <td>
                                <div
                                  className="badge badge-soft-success
                                          font-size-12"
                                >
                                  Paid
                                </div>
                              </td>

                              <td>
                                <Link className="btn btn-soft-light">
                                  <i className="fa fa-eye"></i>
                                </Link>
                                <Link className="btn btn-soft-light">
                                  <i className="fa fa-edit"></i>
                                </Link>
                                <Link className="btn btn-soft-light">
                                  <i className="fa fa-trash"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="DataTables_Table_0_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 12 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_0_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="DataTables_Table_0_previous"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx={1}
                                tabIndex={0}
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx={2}
                                tabIndex={0}
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="DataTables_Table_0_next"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx={3}
                                tabIndex={0}
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end table responsive */}
              </div>
              {/* end card body */}
            </div>
            {/* end card */}
          </div>
          {/* end col */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
