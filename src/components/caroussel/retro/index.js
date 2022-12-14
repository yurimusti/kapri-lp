import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import retro from "../../../assets/caroussel/retro/retro.png";
import retro2 from "../../../assets/caroussel/retro/retro2.png";
import retro3 from "../../../assets/caroussel/retro/retro3.png";
import retro4 from "../../../assets/caroussel/retro/retro4.png";
import retro5 from "../../../assets/caroussel/retro/retro5.png";
import retro6 from "../../../assets/caroussel/retro/retro6.png";
import retro7 from "../../../assets/caroussel/retro/retro7.png";
import retro8 from "../../../assets/caroussel/retro/retro8.png";
import retro9 from "../../../assets/caroussel/retro/retro9.png";
import retro10 from "../../../assets/caroussel/retro/retro10.png";
import retro11 from "../../../assets/caroussel/retro/retro11.png";
import retro12 from "../../../assets/caroussel/retro/retro12.png";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const RetroCaroussel = () => {
  const { t } = useTranslation();

  return (
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
          alignSelf={["center", "inherit", "inherit"]}
          fontSize={[20, 26, 32]}
        >
          {t("projetos.apartamentoRetro.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
          fontSize={[12, 14, 14]}
          maxWidth={["100%", 600, 600]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoRetro.progress")}
        </Styled.Progress>
        <Styled.Description
          fontSize={[12, 14, 18]}
          width={["280px", "730px", "450px"]}
          maxWidth={[280, 730, 450]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoRetro.description")}
        </Styled.Description>
      </Styled.DescriptionContainer>

      <Styled.Carroussel
        pt={["50px", "30px", "100px"]}
        ml={["0px", "0px", "100px"]}
      >
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation
          //effect={"coverflow"}
          spaceBetween={window.innerWidth < 1200 ? 400 : 50}
          slidesPerView={window.innerWidth < 768 ? 1 : 2}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            {" "}
            <img
              src={retro}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro2}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro3}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro4}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro5}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro6}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro7}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro8}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro9}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro10}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro11}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={retro12}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
        </Swiper>
      </Styled.Carroussel>
    </>
  );
};

export default RetroCaroussel;
