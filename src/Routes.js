import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

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

        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
