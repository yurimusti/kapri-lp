import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/astronaut.png";
import celebrating from "../../assets/celebrating.png";
import education from "../../assets/education.png";
import taken from "../../assets/taken.png";
import retro from "../../assets/retro.png";
import retro2 from "../../assets/retro2.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [retro, retro2, education, taken];

const Projects = () => {

  const { t } = useTranslation();
  
  const [selected, setSelected] = useState("apartamentoClassico")
  
  return (
    <Styled.BoxProjects id="projects">

      <Styled.NavContainer>
        <Styled.Title ml={[50, 50, 144]}>
          Projects
        </Styled.Title>

        <Styled.TitleContainer >

          <Styled.NavTitle fontSize={[8, 12, 14]}
          onClick={() => setSelected("apartamentoClassico")}
          
          >
            Apartamento Classico
          </Styled.NavTitle>

          <Styled.NavTitle fontSize={[8, 12, 14]}
          onClick={() => setSelected("apartamentoClean")}
          >
            Apartamento Clean
          </Styled.NavTitle>
          <Styled.NavTitle fontSize={[8, 12, 14]}
          onClick={() => setSelected("burguerCafe")}
          >
            Black Burguer Café
          </Styled.NavTitle>
          <Styled.NavTitle fontSize={[8, 12, 14]}
          onClick={() => setSelected("cafeBar")}
          >
            Café bar anos 70
          </Styled.NavTitle>
          <Styled.NavTitle fontSize={[8, 12, 14]}
          onClick={() => setSelected("apartamentoRetro")}
          >
            Casa retrô
          </Styled.NavTitle>

        </Styled.TitleContainer>
      </Styled.NavContainer>

      <Styled.ProjectContainer ml={[50, 50, 144]}>
        {selected === "apartamentoClassico" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle>
              {t("projetos.apartamentoClassico.title")}
            </Styled.ProjectTitle>

            <Styled.Description>
              {t("projetos.apartamentoClassico.description")}
            </Styled.Description>
        </Styled.DescriptionContainer>
        )}

        {selected === "apartamentoClean" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle>
              {t("projetos.apartamentoClean.title")}
            </Styled.ProjectTitle>
            <Styled.Description>
              {t("projetos.apartamentoClean.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}

        {selected === "burguerCafe" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle>
              {t("projetos.burguerCafe.title")}
            </Styled.ProjectTitle>
            <Styled.Description>
              {t("projetos.burguerCafe.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}

        {selected === "cafeBar" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle>
              {t("projetos.cafeBar.title")}
            </Styled.ProjectTitle>
            <Styled.Description>
              {t("projetos.cafeBar.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}

        {selected === "apartamentoRetro" && (
          <Styled.DescriptionContainer>
            <Styled.ProjectTitle>
              {t("projetos.apartamentoRetro.title")}
            </Styled.ProjectTitle>
            <Styled.Description>
              {t("projetos.apartamentoRetro.description")}
            </Styled.Description>
          </Styled.DescriptionContainer>
        )}
      </Styled.ProjectContainer>
    </Styled.BoxProjects>
  );
};

export default Projects;