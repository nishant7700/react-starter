import React, { useEffect } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getProducts } from "../actions/products";
import { URI } from "../constants/constants";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
const Shop = ({ getProducts, product: { loading, products } }) => {
  useEffect(() => {
    getProducts({ limit: 50 });
  }, []);
  console.log(products);
  return (
    <div>
      <Header />
      <Breadcrumb title="Shop" />
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {products &&
                products.map((item) => {
                  return (
                    <div className="box-wrapper">
                      <div className="shop-product-image">
                        <Link to={`/product/${item.slug}`}>
                          {item.featured_image && (
                            <img src={`${URI}${item.featured_image.url}`} />
                          )}
                        </Link>
                      </div>
                      <div className="shop-product-content">
                        <div className="product-list__content__top">
                          <div className="product-category__wrapper"></div>
                          <div className="product-main-content">
                            <Link
                              to={`/product/${item.slug}`}
                              className="product-name"
                            >
                              {item.name}
                            </Link>
                            <h5 className="product-price--main">
                              ₹{item.sale_price}
                            </h5>
                          </div>
                          <hr />
                          <div className="product-list__content__bottom">
                            <div className="product-description">
                              {renderHTML(item.short_description)}
                            </div>
                            <div className="product__actions">
                              <div className="buy-now">
                                <Link
                                  to={`/product/${item.slug}`}
                                  className="btn btn-buy-now"
                                >
                                  VIEW
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = { getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
