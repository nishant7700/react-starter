import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const Cart = lazy(() => import("./Pages/Cart"));
const ChangePassword = lazy(() => import("./Pages/ChangePassword"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const ForgetPassword = lazy(() => import("./Pages/ForgetPassword"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const MyAccount = lazy(() => import("./Pages/MyAccount"));
const MyAddress = lazy(() => import("./Pages/MyAddress"));
const MyOrders = lazy(() => import("./Pages/MyOrders"));
const MyProfile = lazy(() => import("./Pages/MyProfile"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const ResetPassword = lazy(() => import("./Pages/ResetPassword"));
const Search = lazy(() => import("./Pages/Search"));
const ShippingPolicy = lazy(() => import("./Pages/ShippingPolicy"));
const Shop = lazy(() => import("./Pages/Shop"));
const SingleBlog = lazy(() => import("./Pages/SingleBlog"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct"));
const Terms = lazy(() => import("./Pages/Terms"));
const Testimonials = lazy(() => import("./Pages/Testimonials"));
const ThankYou = lazy(() => import("./Pages/ThankYou"));
import BeforeLoginRoutes from "./Routes/BeforeLoginRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
const renderLoader = () => (
  <img
    src="/images/spinner.gif"
    style={{ width: "200px", margin: "auto", display: "block" }}
    alt="Loading..."
  />
);
function Routes() {
  return (
    <Suspense fallback={renderLoader()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order-placed" component={ThankYou} />
        <PrivateRoutes exact path="/my-address" component={MyAddress} />
        <PrivateRoutes exact path="/my-profile" component={MyProfile} />
        <PrivateRoutes exact path="/my-account" component={MyAccount} />
        <PrivateRoutes exact path="/my-orders" component={MyOrders} />
        <PrivateRoutes
          exact
          path="/change-password"
          component={ChangePassword}
        />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/privacy-policy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/shipping-policy" component={ShippingPolicy} />
        <Route exact path="/our-products" component={Shop} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/testimonials" component={Testimonials} />
        <BeforeLoginRoutes exact path="/login" component={Login} />
        <Route exact path="/blog/:slug" component={SingleBlog} />
        <Route exact path="/product/:slug" component={SingleProduct} />
        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
