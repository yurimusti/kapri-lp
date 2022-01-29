import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import * as Styled from "./styles";
import { ReactComponent as LoadingSVG } from "../assets/svg/loading.svg";

import Landingpage from "../pages/landingpage";
import Dashboard from "../pages/dashboard";
import Clientes from "../pages/clientes";
import Login from "../pages/login";

const Routes = ({ showLoading, user }) => {
  return (
    <>
      <Styled.Loading show={showLoading}>
        <LoadingSVG />
      </Styled.Loading>
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/clientes" exact component={Clientes} />
      </Switch>
    </>
  );
};

export default Routes;
