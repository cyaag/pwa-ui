/** @format */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/SignIn/SignIn";
import Logout from "./components/Logout";
import Form from "./containers/FormContainer";
import YaagDS from "./containers/YaagDashboard";
import CardDash from "./components/CardDash";
import Dashboard from "./containers/Dashboard/Dashboard";
import MyYaag from "./containers/MyYaags/MyYaag";

const Routes = () => (
  <BrowserRouter>
    <Switch>  \

      <Route exact path="/" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/home" component={Form} />
      <Route path="/myYaag" component={MyYaag} />
      <Route path="/YDS" component={YaagDS} />
      <Route path="/CD" component={CardDash} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
