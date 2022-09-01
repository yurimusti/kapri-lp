import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import burguerImg1 from "../../../assets/caroussel/burguerCafe/1.jpg";
import burguerImg2 from "../../../assets/caroussel/burguerCafe/2.jpg";
import burguerImg3 from "../../../assets/caroussel/burguerCafe/3.jpg";
import burguerImg4 from "../../../assets/caroussel/burguerCafe/4.jpg";
import burguerImg5 from "../../../assets/caroussel/burguerCafe/5.jpg";
import burguerImg6 from "../../../assets/caroussel/burguerCafe/6.jpg";
import burguerImg7 from "../../../assets/caroussel/burguerCafe/7.jpg";
import burguerImg8 from "../../../assets/caroussel/burguerCafe/8.jpg";
import burguerImg9 from "../../../assets/caroussel/burguerCafe/9.jpg";
import burguerImg10 from "../../../assets/caroussel/burguerCafe/10.jpg";
import burguerImg11 from "../../../assets/caroussel/burguerCafe/11.jpg";
import burguerImg12 from "../../../assets/caroussel/burguerCafe/12.jpg";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const BurgerCafeCaroussel = () => {
  const { t } = useTranslation();

  return (
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
          alignSelf={["center", "inherit", "inherit"]}
          fontSize={[20, 26, 32]}
        >
          {t("projetos.burguerCafe.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
          fontSize={[12, 14, 14]}
          maxWidth={["100%", 600, 600]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.burguerCafe.progress")}
        </Styled.Progress>
        <Styled.Description
          fontSize={[12, 14, 18]}
          width={["280px", "730px", "450px"]}
          maxWidth={[280, 730, 450]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.burguerCafe.description")}
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
            <img
              src={burguerImg1}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg2}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg3}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg4}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg5}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg6}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg7}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg8}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg9}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg10}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg11}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={burguerImg12}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
        </Swiper>
      </Styled.Carroussel>
    </>
  );
};

export default BurgerCafeCaroussel;
