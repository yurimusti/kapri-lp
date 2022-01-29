import React from "react";
import { Router } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import Routes from "./routes";
import history from "./services/history";

import GlobalStyle from "./styles/global";

const client = new ApolloClient({
  uri: "https://api-idrinks.herokuapp.com/graphql",
  // uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ApolloProvider>
  );
}

export default App;
