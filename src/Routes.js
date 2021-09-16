import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import CategoryArchive from "./Pages/CategoryArchive";
import Checkout from "./Pages/Checkout";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import MyOrders from "./Pages/MyOrders";
import MyProfile from "./Pages/MyProfile";
import ProductGallery from "./Pages/ProductGallery";
import Shop from "./Pages/Shop";
import SingleProduct from "./Pages/SingleProduct";
import SingleProject from "./Pages/SingleProject";
import BeforeLoginRoutes from "./Routes/BeforeLoginRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/products" component={SingleProduct} />
      <Route exact path="/gallery" component={ProductGallery} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/profile" component={MyProfile} />
      <Route exact path="/orders" component={MyOrders} />
      <Route exact path="/product/:slug" component={SingleProduct} />
      <Route exact path="/category/:slug" component={CategoryArchive} />
      <Route exact path="/projects/:slug" component={SingleProject} />
    </Switch>
  );
}

export default Routes;
