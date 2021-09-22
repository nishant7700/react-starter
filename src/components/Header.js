import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import { getProducts } from "../actions/products";
import { getCart } from "../actions/cart";
const Header = ({
  getProducts,
  getCart,
  cart: { cart },
  product: { products },
  ...props
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (!products) {
      getProducts({ limit: 50 });
    }
  }, [products]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <header>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="header-left">
                <ul>
                  <li>
                    <a href="tel:9953704519">
                      <i className="fa fa-phone" /> 9953704519
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@example.com">
                      <i className="fa fa-envelope" /> info@rejuvaplus.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-right">
                <div className="header-social">
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
      {/* mobile-header */}
      <div className="only-mobile mt-2">
        <div className="only-mobile-flex">
          <div className="barss">
            <a onClick={() => setOpenMenu(!openMenu)}>
              <i className="fa fa-bars" />
            </a>
          </div>
          <Link to="/">
            <img src="/images/logo.png" style={{ width: "100px" }} />
          </Link>

          <div className="mobile-hed">
            <ul>
              <li>
                <Link to="/my-profile">
                  <i className="fa fa-user" />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fa fa-shopping-cart" />
                  <span>{cart ? cart.length : 0}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile-nav */}
        <div className="mobile-siide">
          <div
            className="mobile-sidebar-main"
            style={{ display: openMenu ? "block" : "none" }}
          >
            <div className>
              <div className="logo-flex">
                <div className>
                  {" "}
                  <Link to="/">
                    <img src="/images/logo.png" />
                  </Link>
                </div>
                <div className="close">
                  <a onClick={() => setOpenMenu(!openMenu)}>
                    <i className="fa fa-close" />
                  </a>
                </div>
              </div>
              <div className="mobile-menu mt-5">
                <nav>
                  <ul id="navmobile">
                    <NavigationLinks />
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end mobile-header */}
      <section className="main-header">
        <div className="container">
          <div className="row">
            {/* navar */}
            <div className="row">
              <div className="col-md-4">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo.png" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-left">
                  <form method="get" action="/search" id="searchform">
                    <input
                      type="text"
                      name="s"
                      className="text_input"
                      placeholder="Search Product"
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shoping-card">
                  <ul>
                    <li>
                      <Link to="/my-profile">
                        <i className="fa fa-user" />
                      </Link>
                    </li>

                    <li>
                      <Link to="/cart">
                        <i className="fa fa-shopping-bag" />
                        <p className="cart-icon">
                          <span>{cart ? cart.length : 0}</span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <div className="navbar-auto" id="navLinks">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="navbar-area">
                <div className="navlink text-center">
                  {/* <i class="fa fa-times" onclick="hideMenu()"></i> */}
                  <ul>
                    <NavigationLinks />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
  cart: state.cart,
});

const mapDispatchToProps = { getProducts, getCart };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
