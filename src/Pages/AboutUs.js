import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Sliders from "../components/Sliders";

const AboutUs = () => {
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      <div className="infopage infopage_about">
        {/* Title */}
        <div className="infopage__title infopage__title_about">
          <a href="/overview#about" className="infopage__title__back" />
          <h1 className="infopage__title__text infopage__title__text_about">
            About
          </h1>
        </div>
        {/* /Title */}
        {/* Content */}
        <section className="infopage__content">
          <div className="infopage__columns">
            <div className="infopage__columns__wrap">
              <div className="infopage__columns__column infopage__columns__column_intro">
                <div className="site-inner1">
                  <p>
                    Interior Craft is specialized in manufacturing engineered
                    products, design and&nbsp;
                    <strong>
                      installation of residential main gates, railings, shower
                      Cabins, spiders and stair construction for Residence,
                      Commercial, Industrial, Health Care, Educational,
                      Governmental work
                    </strong>
                    &nbsp;and so on as we believe in creating difference, by our
                    innovative ideas which then converted into design to make a
                    new product.
                  </p>
                  <p>
                    Our motto is to provide a complete high quality finished
                    product for your dream project&rsquo;s architectural
                    division .Interior Craft noted for ensuring elegant
                    execution of the most innovative and artful designs and its
                    uniqueness in the market. We are launching our brand New
                    product in the market named Shower Cabin which has got
                    uniqueness by its structure.
                  </p>
                  <p>
                    The organizations segments include sustainability, workforce
                    relations, and business intelligence with honesty.&nbsp;
                    <strong>
                      Company has been certified as an ISO: 9001:2008.
                    </strong>
                    &nbsp;Our innovative, self designed and fabricated products
                    improve the quality of life with a new passion of style. The
                    Interior Craft is uniquely committed to serving our clients
                    and giving the best service with in the industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="row">
                <div className="col-md-6">
                  <h3>Vision </h3>
                  <p>
                    To grow continuously with innovative vision and ideas to
                    cater most architectural needs, while providing peace of
                    mind to our esteemed clientele.
                  </p>
                </div>
                <div className="col-md-6">
                  <h3>Mission</h3>
                  <p>
                    To create out of the box solutions for different
                    architectural tangents
                  </p>
                  <p>
                    To get recognised nationally and globally by our Innovative
                    product range
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h3>Core Values</h3>
                  <p>Honest work ethics</p>
                  <p>Innovation & Creativity</p>
                  <p>
                    Build longterm relations with architects and the clients
                  </p>
                  <p>Continuous Improvements</p>
                  <p>Fulfilling Commitments</p>
                  <p>Attention To Detail</p>
                </div>
                <div className="col-md-6">
                  <h3>Goal</h3>
                  <p>
                    Strive to achieve the highest quality and dignity in both
                    the process and products of professional work
                  </p>
                  <p>
                    Continuously work towards achieving modern and
                    unconventional finishes for our products
                  </p>
                  <p>
                    To incorporate latest machinery in the production process
                    for precision and refinement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Content */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
