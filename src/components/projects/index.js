import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";
import { useState } from "react";
import Slider from "react-slick";
import retro from "../../assets/retro.png";
import retro2 from "../../assets/retro2.png";
import retro3 from "../../assets/retro3.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [retro, retro2, retro3];

const Projects = () => {

  const { t } = useTranslation();
  
  const [selected, setSelected] = useState("apartamentoClassico")

  return (
    <Styled.BoxProjects id="projects">

      <Styled.NavContainer>
        <Styled.Title 
        pl={[44, 44, 144]}
        pr={[44, 44, 144]}
        mt={[60, 60, 0]}
        fontSize={[20, 26, 32]}
        >
          Projects
        </Styled.Title>

        <Styled.TitleContainer
        pl={[40, 40, 140]}
        pr={[40, 40, 140]}
         >

          <Styled.NavTitle fontSize={[8, 12, 16]}
          onClick={() => setSelected("apartamentoClassico")}
          
          >
            Apartamento Classico
          </Styled.NavTitle>

          <Styled.NavTitle fontSize={[8, 12, 16]}
          onClick={() => setSelected("apartamentoClean")}
          >
            Apartamento Clean
          </Styled.NavTitle>
          <Styled.NavTitle fontSize={[8, 12, 16]}
          onClick={() => setSelected("burguerCafe")}
          >
            Black Burguer Café
          </Styled.NavTitle>
          <Styled.NavTitle fontSize={[8, 12, 16]}
          onClick={() => setSelected("cafeBar")}
          >
            Café bar anos 70
          </Styled.NavTitle>
          <Styled.NavTitle fontSize={[8, 12, 16]}
          onClick={() => setSelected("apartamentoRetro")}
          >
            Casa retrô
          </Styled.NavTitle>

        </Styled.TitleContainer>
      </Styled.NavContainer>

      <Styled.ProjectContainer
      pl={[0, 0, 144]}
      justifyContent={["center", "center", "flex-start"]}
      >
        {selected === "apartamentoClassico" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle 
            alignSelf={["center", "center", "inherit"]}
            fontSize={[20, 26, 32]}
            >
              {t("projetos.apartamentoClassico.title")}
            </Styled.ProjectTitle>

            <Styled.Description 
            fontSize={[12, 16, 18]}
            maxWidth={[400, 500, 600]}
            textAlign={["center", "inherit", "inherit"]}
            >
              {t("projetos.apartamentoClassico.description")}
            </Styled.Description>
        </Styled.DescriptionContainer>
        )}

        {selected === "apartamentoClean" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle
            alignSelf={["center", "center", "inherit"]}
            fontSize={[20, 26, 32]}
            >
              {t("projetos.apartamentoClean.title")}
            </Styled.ProjectTitle>
            <Styled.Description
            fontSize={[12, 16, 18]}
            maxWidth={[400, 400, 600]}
            textAlign={["center", "inherit", "inherit"]}
            >
              {t("projetos.apartamentoClean.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}

        {selected === "burguerCafe" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle
            alignSelf={["center", "center", "inherit"]}
            fontSize={[20, 26, 32]}
            >
              {t("projetos.burguerCafe.title")}
            </Styled.ProjectTitle>
            <Styled.Description
            fontSize={[12, 16, 18]}
            maxWidth={[400, 400, 600]}
            textAlign={["center", "inherit", "inherit"]}
            >
              {t("projetos.burguerCafe.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}

        {selected === "cafeBar" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle
            alignSelf={["center", "center", "inherit"]}
            fontSize={[20, 26, 32]}
            >
              {t("projetos.cafeBar.title")}
            </Styled.ProjectTitle>
            <Styled.Description
            fontSize={[12, 16, 18]}
            maxWidth={[400, 400, 600]}
            textAlign={["center", "inherit", "inherit"]}
            >
              {t("projetos.cafeBar.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}

        {selected === "apartamentoRetro" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle
            alignSelf={["center", "center", "inherit"]}
            fontSize={[20, 26, 32]}
            >
              {t("projetos.apartamentoRetro.title")}
            </Styled.ProjectTitle>
            <Styled.Description
            fontSize={[12, 16, 18]}
            maxWidth={[300, 400, 600]}
            textAlign={["center", "inherit", "inherit"]}
            >
              {t("projetos.apartamentoRetro.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}
      
      </Styled.ProjectContainer>
      
    </Styled.BoxProjects>
  );
};

export default Projects;