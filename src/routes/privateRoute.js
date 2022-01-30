import React from "react";
import { Route, Redirect } from "react-router-dom";

import * as Styled from "./styles";


function RouteWrapper({ component: Component, data, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Styled.Main>
          <Styled.Body>
            <Component {...props} />
          </Styled.Body>
        </Styled.Main>
      )}
    />
  );
}

export default RouteWrapper;
