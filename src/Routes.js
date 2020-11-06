import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import BeforeLoginRoutes from "./Routes/BeforeLoginRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
