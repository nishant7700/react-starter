import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { projects } from "../modals/projects";
const CategoryArchive = ({ match }) => {
  const [productsActive, setProductsActive] = useState(null);
  useState(() => {
    if (match.params.slug) {
      const filterData = projects.filter(
        (product) => product.category.slug === match.params.slug
      );
      console.log(filterData);
      if (filterData) {
        setProductsActive(filterData);
      }
    }
  }, [match]);
  return (
    <div>
      <Link to="/" className="ui-logo" />
      <Menu />
      <div class="panel-list">
        {productsActive &&
          productsActive.map((item) => {
            return (
              <div class="content">
                <Link to={`/projects/${item.slug}`}>
                  <div>
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={
                        item.gallery && item.gallery[0]
                          ? item.gallery[0].url
                          : "/images/IMG-20160705-WA0003.jpg"
                      }
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">{item.title}</h3>
                      <p class="content-text">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryArchive);
