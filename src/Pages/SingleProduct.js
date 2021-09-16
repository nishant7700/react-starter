import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Spinner from "../layout/Spinner";
import { products } from "../modals/products";
import { getProductBySlug } from "../actions/products";
import { URI } from "../constants/constants";
import Zoom from "react-img-zoom";
import ReactImageMagnify from "react-image-magnify";
import CartBtn from "../components/product/CartBtn";
import renderHtml from "react-render-html";
const SingleProduct = ({
  match,
  getProductBySlug,
  history,
  product: { loading, product },
}) => {
  useEffect(() => {
    getProductBySlug({ slug: match.params.slug });
  }, [match]);
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      {product && (
        <section className="main-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card-dark product-gallery">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: product.featured_image
                          ? `${product.featured_image.url}`
                          : "/images/IMG-20160705-WA0003.jpg",
                      },
                      largeImage: {
                        src: product.featured_image
                          ? `${product.featured_image.url}`
                          : "/images/IMG-20160705-WA0003.jpg",
                        width: 800,
                        height: 1200,
                      },
                    }}
                  />
                  {/* <img
                    src={
                      product.featured_image
                        ? `${URI}${product.featured_image.url}`
                        : "/images/IMG-20160705-WA0003.jpg"
                    }
                    style={{ width: "100%" }}
                  /> */}
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-dark product-content">
                  <div className="page-title"> {product.name} </div>
                  <hr />
                  <p className="content-text">{product.short_description}</p>
                  <hr />
                  <div>Price</div>
                  <h3 className="content-title">
                    ₹{product.sale_price}{" "}
                    <label> ₹{product.regular_price} </label>{" "}
                  </h3>
                  <div className="product-quantity-available">
                    {product.in_stock && (
                      <p id="availability">
                        <span>In stock</span>
                      </p>
                    )}
                    {!product.in_stock && (
                      <p className="btn btn-danger">
                        <span>Out of stock</span>
                      </p>
                    )}
                  </div>
                  <div style={{ padding: "10px 0px" }}>
                    {product.in_stock && <CartBtn item={product} />}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-dark description-tab">
                  {renderHtml(product.description)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = { getProductBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
