import React from "react";
import { ReactComponent as Loading } from "../../assets/svg/loading.svg";
import { ReactComponent as Plus } from "../../assets/svg/add.svg";
import * as Styled from "./styles";

const Button = ({ text = "", onClick = () => {}, loading = false }) => {
  return (
    <Styled.Button
      onClick={() => loading === false && onClick()}
      loading={loading}
    >
      {loading === true ? (
        <Styled.ButtonIcon>
          <Loading />
        </Styled.ButtonIcon>
      ) : (
        <Styled.ButtonText>
          {text}
        </Styled.ButtonText>
      )}
    </Styled.Button>
  );
};

export default Button;
