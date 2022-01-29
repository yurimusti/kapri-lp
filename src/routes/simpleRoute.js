import React from "react";
import { Route } from "react-router-dom";
import * as Styled from "./styles";

function RouteWrapper({ component: Component, data, ...rest }) {
  return (
    <Route
      render={(props) => (
        <Styled.Main>
          <Styled.Body>
            <Component {...props} />
          </Styled.Body>
        </Styled.Main>
      )}
      {...rest}
    />
  );
}

export default RouteWrapper;
