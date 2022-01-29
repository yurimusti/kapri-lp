import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as Styled from "./styles";

import Menu from "../components/menu";

function RouteWrapper({ component: Component, data, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Styled.Main>
          <Styled.Sidebar>
            <Menu />
          </Styled.Sidebar>
          <Styled.Body>
            <Component {...props} />
          </Styled.Body>
        </Styled.Main>
      )}
    />
  );
}

export default RouteWrapper;
