import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import cafeBar from "../../../assets/caroussel/cafeBar/1.png";
import cafeBar2 from "../../../assets/caroussel/cafeBar/2.png";
import cafeBar3 from "../../../assets/caroussel/cafeBar/3.png";
import cafeBar4 from "../../../assets/caroussel/cafeBar/4.png";
import cafeBar5 from "../../../assets/caroussel/cafeBar/5.png";
import cafeBar6 from "../../../assets/caroussel/cafeBar/6.png";
import cafeBar7 from "../../../assets/caroussel/cafeBar/7.png";
import cafeBar8 from "../../../assets/caroussel/cafeBar/8.png";
import cafeBar9 from "../../../assets/caroussel/cafeBar/9.png";
import cafeBar10 from "../../../assets/caroussel/cafeBar/10.png";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const CafeBarCaroussel = () => {
  const { t } = useTranslation();

  return (
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
          alignSelf={["center", "inherit", "inherit"]}
          fontSize={[20, 26, 32]}
        >
          {t("projetos.cafeBar.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
          fontSize={[12, 14, 14]}
          maxWidth={["100%", 600, 600]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.cafeBar.progress")}
        </Styled.Progress>
        <Styled.Description
          fontSize={[12, 14, 18]}
          width={["280px", "730px", "450px"]}
          maxWidth={[280, 730, 450]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.cafeBar.description")}
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
              src={cafeBar}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar2}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar3}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar4}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar5}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar6}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar7}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar8}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar9}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={cafeBar10}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />{" "}
          </SwiperSlide>
        </Swiper>
      </Styled.Carroussel>
    </>
  );
};

export default CafeBarCaroussel;
