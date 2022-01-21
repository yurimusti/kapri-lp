import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";
import { useState } from "react";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import CafeBarCaroussel from "../caroussel/cafeBar";
import RetroCaroussel from "../caroussel/retro";
import CleanCaroussel from "../caroussel/clean";
import BurguerCafeCaroussel from "../caroussel/burguerCafe";
import ClassicCaroussel from "../caroussel/classic";
import EqualityCaroussel from "../caroussel/e&d";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Projects = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState("apartamentoClassico");

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Styled.BoxProjects id="projects" height={["220vh", "140vh", "110vh"]}>
      <Styled.NavContainer>
        <Styled.Title
          pl={[44, 44, 144]}
          pr={[44, 44, 144]}
          mt={[60, 60, 0]}
          fontSize={[20, 26, 32]}
        >
          {t("projetos.section")}
        </Styled.Title>

        <Styled.TitleContainer pl={[40, 40, 140]} pr={[40, 40, 140]}>
          <Swiper
            spaceBetween={50}
            slidesPerView={window.innerWidth < 768 ? 2 : 3}
            navigation
            loop
          >
            <SwiperSlide className="slide">
              <Styled.NavTitle
                fontSize={[8, 12, 16]}
                onClick={() => setSelected("apartamentoClassico")}
              >
                {t("projetos.apartamentoClassico.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle
                fontSize={[8, 12, 16]}
                onClick={() => setSelected("apartamentoClean")} //useState     const = [date, setDate]
              >
                {t("projetos.apartamentoClean.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle
                fontSize={[8, 12, 16]}
                onClick={() => setSelected("burguerCafe")}
              >
                {t("projetos.burguerCafe.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle
                fontSize={[8, 12, 16]}
                onClick={() => setSelected("cafeBar")}
              >
                {t("projetos.cafeBar.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle
                fontSize={[8, 12, 16]}
                onClick={() => setSelected("apartamentoRetro")}
              >
                {t("projetos.apartamentoRetro.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle
                fontSize={[8, 12, 16]}
                onClick={() => setSelected("equalityDiversity")}
              >
                {t("projetos.equalityDiversity.title")}
              </Styled.NavTitle>
            </SwiperSlide>
            <div ref={navigationPrevRef} />
            <div ref={navigationNextRef} />
          </Swiper>
        </Styled.TitleContainer>
      </Styled.NavContainer>

      <Styled.ProjectContainer
        pl={[0, 50, 144]}
        justifyContent={["center", "flex-start", "flex-start"]}
        flexDirection={["column", "row", "row"]}
        alignItems={["center", "flex-start", "flex-start"]}
      >
        {selected === "apartamentoClassico" && <ClassicCaroussel />}

        {selected === "apartamentoClean" && <CleanCaroussel />}

        {selected === "burguerCafe" && <BurguerCafeCaroussel />}

        {selected === "cafeBar" && <CafeBarCaroussel />}

        {selected === "apartamentoRetro" && <RetroCaroussel />}

        {selected === "equalityDiversity" && <EqualityCaroussel />}
      </Styled.ProjectContainer>
    </Styled.BoxProjects>
  );
};

export default Projects;
