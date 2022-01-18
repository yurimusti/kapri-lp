import React from "react";

import { useTranslation } from "react-i18next";

import image1 from "../../assets/img/somosEspecialista01.png";
import image2 from "../../assets/img/somosEspecialista02.png";
import BoxEspecialista from "../boxEspecialista";

import * as Styled from "./style";

const Especialista = () => {
  const { t } = useTranslation();
  return (
    <Styled.BoxEspecialista 
    minHeight={["67vh", "100vh", "85vh"]}
    id="servicos"
    >
      <Styled.BoxLeft display={["none", "none", "flex"]}>
        <Styled.Image1 src={image1} />
        <Styled.Image2 src={image2} />
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <Styled.TitleContainer
          justifyContent={["center", "center", "flex-start"]}
        >
          <Styled.Title
          fontSize={[28, 28, 36]}
          ml={[0, 0, 40]}
          >
            {t("especialista.title")}
          </Styled.Title>
        </Styled.TitleContainer>
        <Styled.InfoContainer gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
          <BoxEspecialista
            title={t("especialista.consultaProfissional.title")}
            description={t("especialista.consultaProfissional.description")}
            icon="03"
          />
          <BoxEspecialista
            title={t("especialista.projetoCompleto.title")}
            description={t("especialista.projetoCompleto.description")}
            icon="projetoCompleto"
          />
          <BoxEspecialista
            title={t("especialista.personalOrganizer.title")}
            description={t("especialista.personalOrganizer.description")}
            icon="02"
          />
          <BoxEspecialista
            title={t("especialista.movelPlanejado.title")}
            description={t("especialista.movelPlanejado.description")}
            icon="04"
          />
        </Styled.InfoContainer>
      </Styled.BoxRight>
    </Styled.BoxEspecialista>
  );
};

export default Especialista;
