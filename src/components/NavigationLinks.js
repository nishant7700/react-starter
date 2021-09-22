import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <Fragment>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about-us">ABOUT US</Link>
      </li>
      <li>
        <Link to="/our-products">OUR PRODUCTS</Link>
      </li>

      <li>
        <Link to="/testimonials">TESTIMONIALS</Link>
      </li>
      <li>
        <Link to="/contact-us">CONTACT US</Link>
      </li>
    </Fragment>
  );
}
