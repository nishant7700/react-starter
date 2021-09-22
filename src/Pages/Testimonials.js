import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Testimonials = (props) => {
  return (
    <div>
      <Header />
      <Breadcrumb title="Testimonials" />
      <section className="ptb-50 testimonial">
        <div className="heading"></div>
        <div className="container">
          <div className="testimonail-box">
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial-boxs">
                  <p>
                    <i className="fa fa-quote-left" />
                    This Post Laser Soothing Gel is by far the best I've used! I
                    can slather it on as much as I want without any irritation,
                    it soaks right in and soothes my skin. I'm a lifetime
                    customer for sure. Being a non-oily product, it leaves no
                    room for acne which is a major cause of concern for many.
                    <i
                      className="fa fa-quote-right"
                      style={{ paddingRight: 25 }}
                    />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-boxs">
                  <p>
                    <i className="fa fa-quote-left" /> I have been using Rejuva
                    Plus Brightening Sunscreen for the last 3 months and I’m
                    totally satisfied with the results. The best part is that
                    the sunscreen is non-greasy.
                    <i
                      className="fa fa-quote-right"
                      style={{ paddingRight: 25 }}
                    />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-boxs">
                  <p>
                    <i className="fa fa-quote-left" /> Rejuva Plus Replenishing
                    day cream SPF 15 is the most wonderful day cream I have ever
                    used. This product leaves my clean skin feeling smooth and
                    touchable.
                    <i
                      className="fa fa-quote-right"
                      style={{ paddingRight: 25 }}
                    />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
