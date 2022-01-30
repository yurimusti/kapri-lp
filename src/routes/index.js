import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import * as Styled from "./styles";
import { ReactComponent as LoadingSVG } from "../assets/svg/loading.svg";

import Landingpage from "../pages/landingpage";
import Login from "../pages/login";
import Clientes from "../pages/clientes";
import CreateClientes from "../pages/createClientes";

const Routes = ({ showLoading, user }) => {
  return (
    <>
      <Styled.Loading show={showLoading}>
        <LoadingSVG />
      </Styled.Loading>
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/Login" exact component={Login} />
        <PrivateRoute path="/clientes" exact component={Clientes} />
        <PrivateRoute path="/createClientes" exact component={CreateClientes} />
      </Switch>
    </>
  );
};

export default Routes;
