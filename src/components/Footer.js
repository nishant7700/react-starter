import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div>
      <section className="ptb-50 footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-heading">
                <h3>ABOUT US</h3>
                <p>
                  Rejuva Plus have experience in Cosmetology and Pharmacy and
                  have long term experience creating beautifying agents for a
                  few brands. With the wide knowledge & experience in
                  Cosmetology and Pharmacy background, our directors have come
                  up with the best products that have the right combination of
                  Nature and Science.
                </p>
                <div className="footer-logo">
                  <img src="/images/logo.png" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-heading">
                <h3>QUICK LINKS</h3>
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>

                    <li>
                      <Link to="/our-products">OUR PRODUCTS</Link>
                    </li>

                    <li>
                      <Link to="/testimonials">TESTIMONIALS</Link>
                    </li>
                    <li>
                      <Link to="/cart">CART</Link>
                    </li>
                    <li>
                      <Link to="/about-us">ABOUT US</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-heading">
                <h3>POLICY LINKS</h3>
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link to="/contact-us">CONTACT US</Link>
                    </li>
                    <li>
                      <Link to="/shipping-policy">SHIPPING POLICY</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">PRIVACY POLICY</Link>
                    </li>
                    <li>
                      <Link to="/terms">TERMS &amp; CONDITIONS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-heading">
                <h3>CONTACT US</h3>
                <div className="address">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" /> Shop no. 22 main
                        market old Rajender Nagar New Delhi 110060
                      </a>
                    </li>
                    <li>
                      <a href="tel:9953704519">
                        <i className="fa fa-phone" /> 9953704519
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@rejuvaplus.com">
                        <i className="fa fa-envelope" /> info@rejuvaplus.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/Rejuva-Plus-144283777794355"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://in.pinterest.com/rejuvaplus/_saved/"
                        target="_blank"
                      >
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/RejuvaPlus" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCbOJy1N9FMlkhEmGG2pfjCw"
                        target="_blank"
                      >
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="copyright-content">
              <p>
                Copyright © 2021, Rejuva Plus. Design &amp; Development by{" "}
                <a href="https://luhaifdigitech.com/">Luhaif Digitech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
