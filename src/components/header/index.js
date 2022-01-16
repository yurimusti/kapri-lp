import React from "react";
import * as Styled from "./styles";

import i18next from "i18next";

import { Select } from "antd";

import kapriLogo from "../../assets/img/kapriLogo.png";
import globalIcon from "../../assets/icon/global.svg";

const Header = () => {
  const { Option } = Select;
  return (
    <Styled.Main>
      <Styled.ImageContainer href="#home">
        <Styled.Image
          width={["52%", "36%", "45%"]}
          alt=""
          src={kapriLogo}
        />
      </Styled.ImageContainer>
      <Styled.NavBar display={["none", "none", "none", "flex"]}>
        <Styled.NavTitles display={["none", "none", "none", "flex"]}>
          <Styled.Title href="#servicos">
            Serviços
          </Styled.Title>
          <Styled.Title href="#projects">
            Projetos
          </Styled.Title>
          <Styled.Title href="#sobremim">
            Sobre mim
          </Styled.Title>
          <Styled.Title href="#contact">
            Contato
          </Styled.Title>
        </Styled.NavTitles>
        <Styled.DropLanguage display={["none", "none", "none", "flex"]}>
          <Styled.globalIcon alt="" src={globalIcon}/>
          <Select
            className="antD"
            defaultValue="de"
            style={{ width: 74, height: 26 }}
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
        </Styled.DropLanguage>
      </Styled.NavBar>
    </Styled.Main>
  );
};

export default Header;
