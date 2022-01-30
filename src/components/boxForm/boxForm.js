import React from "react";
import * as Styled from "./styles";

const BoxForm = ({
  title = "",
  direction = "column",
  children = () => <> </>,
}) => {
  return (
    <Styled.Box>
      <Styled.TitleContainer>
        <Styled.TitleText>{title}</Styled.TitleText>
      </Styled.TitleContainer>
      <Styled.Container direction={direction}>{children}</Styled.Container>
    </Styled.Box>
  );
};

export default BoxForm;
