import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { URI } from "../constants/constants";
import renderHTML from "react-render-html";
import CartBtn from "../components/CartBtn";
const SingleProduct = ({ product: { products }, match }) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  useEffect(() => {
    if (match.params.slug && products) {
      const filterData = products.filter(
        (item) => item.slug === match.params.slug
      );
      if (filterData && filterData.length > 0) {
        setActiveProduct(filterData[0]);
        setActiveImage(filterData[0].featured_image.url);
      }
    }
  }, [match, products]);
  return (
    <div>
      <Header />
      {activeProduct && (
        <div>
          <Breadcrumb title={activeProduct.name} />
          <section className="shop">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <img
                      src={
                        activeImage
                          ? `${URI}${activeImage}`
                          : `${URI}${activeProduct.featured_image.url}`
                      }
                      style={{ width: "100%" }}
                      onMouseEnter={() =>
                        setActiveImage(
                          activeProduct.gallery &&
                            activeProduct.gallery.length > 0 &&
                            activeProduct.gallery[0] &&
                            activeProduct.gallery[0].url
                        )
                      }
                      onMouseLeave={() =>
                        setActiveImage(
                          activeProduct.featured_image &&
                            activeProduct.featured_image.url
                        )
                      }
                    />
                    <div className="text-center">
                      <h3> {activeProduct.name} </h3>
                      <h5 className="product-price--main">
                        ₹{activeProduct.sale_price}
                      </h5>
                      <CartBtn item={activeProduct} />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3> {activeProduct.name} </h3>

                  <div className="product-list__content__bottom">
                    <div className="product-description">
                      {renderHTML(activeProduct.short_description)}
                    </div>
                    <div className="product-description">
                      {renderHTML(activeProduct.description)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ product: state.product });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
