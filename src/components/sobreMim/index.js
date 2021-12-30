import React from "react";

import { useTranslation } from "react-i18next";

import image from "../../assets/img/profile.png";

import * as Styled from "./style";

const Sobremim = () => {
  const { t } = useTranslation();
  return (
    <Styled.BoxSobremim minHeight={["110vh", "80vh", "80vh"]}>
      <Styled.ImageContainer width={['50%', '25%', '22%']} left={["25%", "12%", 110]} bottom={['52%', 0, 0]}>
        <Styled.Image width={["100%", "80%", "100%"]} src={image} />
      </Styled.ImageContainer>
      <Styled.InfoContainer
        minHeight={["75vh", "75vh", "40vh"]}
        bottom={[0, 0, 0]}
        pl={[48, "0%", "45%"]}
        pt={[240, 240, 24]}
        pr={[24, 24, 24]}
      >
        <Styled.TitleContainer>
          <Styled.Title>{t("sobreMim.title")}</Styled.Title>
        </Styled.TitleContainer>
        <Styled.DescriptionContainer>
          <Styled.Description>
            <Styled.Nome>Karen Priscila Araújo de Mendonça</Styled.Nome> <br />
            <Styled.Profissao>{t("sobreMim.nomeProfissao")}</Styled.Profissao>
          </Styled.Description>
        </Styled.DescriptionContainer>
        <Styled.DescriptionInfo>
          {t("sobreMim.descricao")}
        </Styled.DescriptionInfo>
      </Styled.InfoContainer>
    </Styled.BoxSobremim>
  );
};

export default Sobremim;
