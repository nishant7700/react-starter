import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Spinner from "../layout/Spinner";
import { projects } from "../modals/projects";

const SingleProject = ({ match, history }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const [showFullscreen, setShowFullscreen] = useState(false);
  useEffect(() => {
    if (match.params.slug) {
      setActiveItem(0);
      const filterData = projects.filter(
        (product) => product.slug === match.params.slug
      );
      if (filterData && filterData.length > 0) {
        setActiveProduct(filterData[0]);
      }
    }
  }, [match]);
  const [offset, setOffset] = useState(0);

  const nextProduct = () => {
    if (match.params.slug) {
      console.log(match.params.slug);
      if (activeProduct) {
        const productIndex = projects.findIndex(
          (product) => product.slug === match.params.slug
        );
        console.log(productIndex);
        history.push(
          `/projects/${
            projects.length - 1 > productIndex
              ? projects[productIndex + 1].slug
              : projects[0].slug
          }`
        );
      }
    }
  };

  return (
    <div>
      {!showFullscreen && <Link to="/" className="ui-logo" />}
      {!showFullscreen && <Menu />}

      {activeProduct ? (
        <section
          className="single-products"
          style={{ display: showFullscreen ? "none" : "block" }}
        >
          <div className="product-sidebar">
            <div className="product-title">{activeProduct.title}</div>
            <div className="all-categoris">
              <div>
                <Link
                  to={`/category/${
                    activeProduct.category && activeProduct.category.slug
                  }`}
                >
                  <i className="fa fa-filter"></i>{" "}
                  {activeProduct.category && `${activeProduct.category.name}`}{" "}
                </Link>
              </div>
              <div className="text-center pt-4">
                <a
                  onClick={() => nextProduct()}
                  style={{ color: "rgba(235,92,20,0.7)" }}
                >
                  <i className="fa fa-long-arrow-down"></i> NEXT PRODUCT
                </a>
              </div>
            </div>
          </div>
          <div className="product-description">
            <div className="product-image">
              {activeProduct.gallery &&
                activeProduct.gallery.map((photo, index) => {
                  return (
                    <img
                      src={photo.url}
                      key={`Interior Craft Product-${index}`}
                      alt="interior craft"
                      style={{
                        display: activeItem === index ? "block" : "none",
                      }}
                      onClick={() => setShowFullscreen(!showFullscreen)}
                    />
                  );
                })}
            </div>

            <div className="next-arrow">
              <img
                src={
                  activeProduct.gallery.length - 1 > activeItem
                    ? "/images/right-arrow.png"
                    : "/images/return.png"
                }
                alt="Interior Craft"
                onClick={() =>
                  setActiveItem(
                    activeProduct.gallery.length - 1 > activeItem
                      ? activeItem + 1
                      : 0
                  )
                }
              />
            </div>
          </div>
        </section>
      ) : (
        <div>
          {" "}
          <Spinner />{" "}
        </div>
      )}
      {showFullscreen && activeProduct && (
        <section>
          <div className="full-screen-product">
            <div
              className="full-screen-image"
              onClick={() => setShowFullscreen(!showFullscreen)}
            >
              {activeProduct.gallery &&
                activeProduct.gallery.map((photo, index) => {
                  return (
                    <img
                      src={photo.url}
                      key={`Interior Craft Product-${index}`}
                      alt="interior craft"
                      style={{
                        display: activeItem === index ? "block" : "none",
                      }}
                    />
                  );
                })}
            </div>

            <div className="next-arrow">
              <img
                src={
                  activeProduct.gallery.length - 1 > activeItem
                    ? "/images/right-arrow.png"
                    : "/images/return.png"
                }
                alt="Interior Craft"
                onClick={() =>
                  setActiveItem(
                    activeProduct.gallery.length - 1 > activeItem
                      ? activeItem + 1
                      : 0
                  )
                }
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
