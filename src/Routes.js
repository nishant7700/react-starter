import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import AddJobCard from "./Pages/job-cards/AddJobCard";
import AllJobCards from "./Pages/job-cards/AllJobCards";
import AddRole from "./Pages/roles/AddRole";
import AllRoles from "./Pages/roles/AllRoles";
import AddUser from "./Pages/users/AddUser";
import AllUsers from "./Pages/users/AllUsers";
import BeforeLoginRoutes from "./Routes/BeforeLoginRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

function Routes() {
  return (
    <Switch>
      <BeforeLoginRoutes exact path="/" component={Home} />
      <PrivateRoutes exact path="/dashboard" component={Dashboard} />
      <PrivateRoutes exact path="/job-cards" component={AllJobCards} />
      <PrivateRoutes exact path="/job-cards/add" component={AddJobCard} />
      <PrivateRoutes exact path="/users" component={AllUsers} />
      <PrivateRoutes exact path="/users/add" component={AddUser} />
      <PrivateRoutes exact path="/roles" component={AllRoles} />
      <PrivateRoutes exact path="/roles/add" component={AddRole} />
    </Switch>
  );
}

export default Routes;
