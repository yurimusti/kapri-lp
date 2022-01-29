import React from "react";
import Card from "../../components/card";

import * as Styled from "./styles";

const Dashboard = () => {
  return (
    <Styled.Main>
      <Styled.Header>
        <Styled.HeaderText>Dashboard</Styled.HeaderText>
      </Styled.Header>
      <Styled.Body>
        <Card type="first" />
        <Styled.CardLine>
          <Card flex={1.5} type="seccond" />
          <Card flex={2.8} type="third" />
        </Styled.CardLine>
      </Styled.Body>
    </Styled.Main>
  );
};

export default Dashboard;
