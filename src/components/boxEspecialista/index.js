import React from "react";

import { ReactComponent as Icon01 } from "../../assets/icon/01.svg";
import { ReactComponent as Icon02 } from "../../assets/icon/02.svg";
import { ReactComponent as Icon03 } from "../../assets/icon/03.svg";
import { ReactComponent as Icon04 } from "../../assets/icon/04.svg";

import * as Styled from "./style";

const BoxEspecialista = ({
  title = "",
  description = "",
  icon = "projetoCompleto",
}) => {
  const _renderIcon = () => {
    switch (icon) {
      case "projetoCompleto":
        return <Icon01 />;

      case "02":
        return <Icon02 />;

      case "03":
        return <Icon03 />;

      case "04":
        return <Icon04 />;

      default:
        break;
    }
    return <></>;
  };

  return (
    <Styled.BoxEspecialistaMain>
      <Styled.BoxIcon>{_renderIcon()}</Styled.BoxIcon>
      <Styled.TextContainer>
        <Styled.Title fontSize={[20, 20, 24]}>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.TextContainer>
    </Styled.BoxEspecialistaMain>
  );
};

export default BoxEspecialista;
