import React from "react";
import * as Styled from "./styles";

import i18next from "i18next";

import { Select } from "antd";

import kapriLogo from "../../assets/img/kapriLogo.png";

const Header = () => {
  const { Option } = Select;
  return (
    <Styled.Main>
      <Styled.ImageContainer>
        <Styled.Image
          width={["32%", "16%", "8%"]}
          ml={[0, 0, 64]}
          p={[16, 16, 16]}
          alt=""
          src={kapriLogo}
        />
      </Styled.ImageContainer>
      <Select
        defaultValue="de"
        style={{ width: 100, height: 32 }}
        onChange={(e) => {
          i18next.changeLanguage(e);
        }}
      >
        <Option value="pt-br">PT-BR</Option>
        <Option value="en">EN</Option>
        {/* <Option value="es">ES</Option> */}
        <Option value="de">DE</Option>
        {/* <Option value="fr">FR</Option> */}
      </Select>
    </Styled.Main>
  );
};

export default Header;
