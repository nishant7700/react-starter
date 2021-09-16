import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCart } from "../actions/carts";
const Menu = ({ getCart, cart: { cart } }) => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className style={{ position: "relative" }}>
        <div className="menu-btn" onClick={() => setOpenMenu(true)}>
          <span className="ui-menu">MENU</span>
        </div>
        <div
          className="sidebar-menu"
          style={{ display: openMenu ? "block" : "none" }}
        >
          <div className="menu-close" onClick={() => setOpenMenu(false)}>
            <i className="fa fa-close" />
          </div>
          <div className="menu__content">
            <ul>
              <li>
                <Link to="/" className="menu">
                  HOME
                </Link>
              </li>
              <li>
                <a href="#">WORK</a>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/cart">CART</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="menu__footer">
            <form className="menu__search" action="/search" method="get">
              <input
                className="menu__search__field"
                type="text"
                placeholder="Search"
                name="q"
                tabIndex={-1}
              />
            </form>
            <div className="footer-social">
              <ul>
                <li>
                  <a href="#">FACEBOOK</a>
                </li>
                <li>
                  <a href="#">TWITTER</a>
                </li>
                <li>
                  <a href="#">YOUTUBE</a>
                </li>
                <li>
                  <a href="#">INSTAGRAM</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* {cart && cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            left: "50px",
            zIndex: 99,
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "#eb5c14",
              borderRadius: "50%",
              padding: "25px 20px",
            }}
          >
            <Link to="/cart" style={{ fontSize: "25px", color: "#fff" }}>
              <i className="fa fa-shopping-cart"></i> {cart.length}
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
  alert: state.alert,
});

const mapDispatchToProps = { getCart };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
