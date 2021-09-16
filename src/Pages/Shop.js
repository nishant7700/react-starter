import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Sliders from "../components/Sliders";
import { getProducts } from "../actions/products";
import { URI } from "../constants/constants";
const Shop = ({ getProducts, product: { loading, products } }) => {
  useEffect(() => {
    getProducts({ limit: 10 });
  }, []);
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      {products &&
        products.map((product) => {
          return (
            <div className="panel-list">
              <div className="content">
                <Link to={`/product/${product.slug}`}>
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src={
                      product.featured_image
                        ? `${product.featured_image.url}`
                        : "/images/IMG-20160705-WA0003.jpg"
                    }
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{product.name}</h3>
                    <p className="content-text">{product.short_description}</p>
                    <h3 className="content-title">
                      ₹{product.sale_price}{" "}
                      <label> ₹{product.regular_price} </label>{" "}
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = { getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
