import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/Newsletter";
import { URI } from "../constants/constants";

const Home = ({ product: { products } }) => {
  return (
    <div>
      <Header />
      <section className="ptb-50 banner-area">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="banner-content">
                <h1>Care for your Skin, care for your beauty!</h1>
                <p>
                  Utilizing our Cosmetology and Pharmacy foundation, our chiefs
                  have concocted the best items that have a combination of
                  Nature and Science.
                </p>
                <div className="discover-buton">
                  <Link to="/our-products" className="btn btn-discover">
                    DISCOVER NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="banner-image">
                <img src="/images/banner-image.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-50 clear-skin">
        <div className="container">
          <div className="clear-skin-box">
            <div className="row">
              <div className="col-md-4">
                <div className="box-image">
                  <div className="overlay" />
                  <div className="box-content">
                    <h2>MOISTURISING SERUM </h2>
                    <p className="bold">
                      Time to fall in love with your skin! Feel the skin's
                      softness under your fingertips!
                    </p>
                    <p>
                      Specifically formulated to serve as a moisture shot,
                      Rejuva Plus Moisturising Serum is appropriate for all skin
                      types. It does not only provide superficial
                      moisturization, but acts to maintain moisture effectively
                      and keep the skin healthy.
                    </p>
                    <div className="shop-now">
                      <Link
                        to="/product/moisturising-serum-10003"
                        className="btn btn-shop-now"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="box-image"
                  style={{ backgroundImage: 'url("/images/2.jpg")' }}
                >
                  <div className="overlay" />
                  <div className="box-content">
                    <h2>ANTI-AGEING NIGHT CREAM</h2>
                    <p className="bold">
                      Get younger while sleeping with Rejuva Plus Anti-Ageing
                      cream!
                    </p>
                    <p>
                      Rejuva Plus Anti-ageing cream is a lightweight, deeply
                      nourishing, non-greasy formula. By stimulating the
                      extracellular matrix synthesis of proteins present in the
                      cream improves the firmness of the skin.
                    </p>
                    <div className="shop-now">
                      <Link
                        to="product/anti-ageing-night-cream-10004"
                        className="btn btn-shop-now"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="box-image"
                  style={{ backgroundImage: "url(/images/3.jpg)" }}
                >
                  <div className="overlay" />
                  <div className="box-content">
                    <h2>REPLENISHING DAY CREAM SPF 15 </h2>
                    <p className="bold">
                      Forget the vibrant makeup. It’s time to flaunt your bright
                      skin!
                    </p>
                    <p>
                      Rejuva Plus Replenishing Day Cream is a formula designed
                      especially for instant lightening, deep moisturising and
                      sun protection. It contains a mixture of berries, which
                      are essential in providing anti-aging properties.
                    </p>
                    <div className="shop-now">
                      <Link
                        to="/product/replenishing-day-cream-spf-15-10005"
                        className="btn btn-shop-now"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-50 know-more">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="know-image">
                <img src="/images/skin-main.jpg" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="know-content">
                <h2> About Us</h2>
                <p>
                  We have a solid background in Cosmetology and Pharmacy and our
                  experience in developing cosmetics for many brands spans over
                  a decade.
                </p>
                <div className="box-content-award">
                  <div className="box-content-flex">
                    <div className>
                      <img src="/images/award.png" />
                    </div>
                    <div className="award-win">
                      <h3>EXPERIENCE IN COSMETOLOGY AND PHARMACY</h3>
                      <p>
                        With the wide knowledge and experience in Cosmetology
                        and Pharmacy background, our directors have come up with
                        the best products that have the right combination of
                        Nature and Science.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-content-award">
                  <div className="box-content-flex">
                    <div className>
                      <img src="/images/experience.png" />
                    </div>
                    <div className="award-win">
                      <h3>CLINICALLY-PROVEN ACTIVES</h3>
                      <p>
                        We are not only using Natural extracts but we are also
                        using Actives that are clinically proven and have
                        studies to support our claims regarding the
                        effectiveness of our drug.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-content-award">
                  <div className="box-content-flex">
                    <div className>
                      <img src="/images/provider.png" />
                    </div>
                    <div className="award-win">
                      <h3>DERMATOLOGICALLY-TESTED PRODUCTS</h3>
                      <p>
                        Our dermatologically tested products assure you the best
                        results and beautiful skin without causing harm to it in
                        any way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-50 best-seller">
        <div className="heading">
          <h2>BEST SELLERS</h2>
        </div>
        <div className="container">
          <div className="pt-50 row">
            {products &&
              products.map((item, index) => {
                if (index < 4)
                  return (
                    <div className="col-md-3">
                      <Link to={`/product/${item.slug}`} className="bor">
                        <div className="product-background">
                          <div className="product-image">
                            <img
                              src={
                                item.featured_image &&
                                `${URI}${item.featured_image.url}`
                              }
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="product-content">
                        <Link to={`/product/${item.slug}`} className="bor">
                          <h4>{item.name}</h4>

                          <div className="product-price">
                            <h4>₹ {item.sale_price}</h4>
                          </div>
                        </Link>
                        <div className="shopp-now">
                          <Link
                            to={`/product/${item.slug}`}
                            className="btn btn-purchase"
                          >
                            SHOP NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </section>
      <section className="summer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="summer-content">
                <div className="summer-content-ab">
                  <div className="summer-content">
                    <h3>BRIGHTENING SUNSCREEN FLUID | SPF 50 PA+++</h3>
                    <p>
                      Who doesn’t like sun-kissed photos? But don’t let the UV
                      rays kiss your skin too.
                    </p>
                    <p>
                      Use Rejuva Plus Brightening Sunscreen SPF 50, a
                      non-greasy, lightweight lotion. It protects your skin from
                      harmful UV rays and makes the skin tone clearer and
                      lighter, eliminates fine lines, wrinkles, moisturizes
                      skin’s inner layers and prevents premature aging.
                    </p>
                    <div className="text-center discover-buton">
                      <Link
                        to="/product/brightening-sunscreen-fluid-spf-50-pa+++-10000"
                        className="btn btn-discover"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="summer2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="summer-content2">
                <div class="summer-content-ab2">
                  <div class="summer-content2">
                    <h3>HAIR DEGROWTH GEL</h3>
                    <p>
                      It is everybody's nightmare to spot that one hair that
                      your razor missed during your day out.
                    </p>
                    <p>
                      Rejuva Plus Hair Degrowth Gel is a non-greasy,
                      non-oil-based formula. It is a powerful combination of
                      plant extracts that immensely enhances the effects of any
                      hair removal treatments, shaving and use of depilatory
                      creams as well.{" "}
                    </p>
                    <div class="text-center discover-buton">
                      <Link
                        to="/product/hair-growth-minimizer-10002"
                        class="btn btn-discover"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
      <div className="bg-theme-color">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="feature-icon-box">
                <div className="inner-content">
                  <div className="icon-box">
                    <i className="fa fa-truck" />
                  </div>
                  <div className="content">
                    <h5 className="title">Free Shipping</h5>
                    <p>Free shipping on all order</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="feature-icon-box">
                <div className="inner-content">
                  <div className="icon-box">
                    <i className="fa fa-credit-card" />
                  </div>
                  <div className="content">
                    <h5 className="title">Free Returns</h5>
                    <p>Returns are free within 9 days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="feature-icon-box">
                <div className="inner-content">
                  <div className="icon-box">
                    <i className="fa fa-question-circle" />
                  </div>
                  <div className="content">
                    <h5 className="title">Support 24/7</h5>
                    <p>Contact us 24 hours a day</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="feature-icon-box">
                <div className="inner-content">
                  <div className="icon-box">
                    <i className="fa fa-shield" />
                  </div>
                  <div className="content">
                    <h5 className="title">100% Payment Secure</h5>
                    <p>Your payment are safe with us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ptb-50 natural">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="natural-content">
                <h4>
                  Explore the best deals on your favorite Rejuva Plus products.{" "}
                </h4>

                <p>
                  Take a sneak peek at our top-selling, 100% toxin-free,
                  products that have the right combination of Nature and
                  Science.
                </p>
                <div className="discover-buton">
                  <Link to="/our-products" className="btn btn-discover">
                    DISCOVER NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="banner-image">
                <img src="/images/banner-image.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
