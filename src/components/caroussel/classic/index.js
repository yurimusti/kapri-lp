import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import classic1 from "../../../assets/caroussel/classic/1.png";
import classic2 from "../../../assets/caroussel/classic/2.png";
import classic3 from "../../../assets/caroussel/classic/3.png";
import classic4 from "../../../assets/caroussel/classic/4.png";
import classic5 from "../../../assets/caroussel/classic/5.png";
import classic6 from "../../../assets/caroussel/classic/6.png";
import classic7 from "../../../assets/caroussel/classic/7.png";
import classic8 from "../../../assets/caroussel/classic/8.png";
import classic9 from "../../../assets/caroussel/classic/9.png";
import classic10 from "../../../assets/caroussel/classic/10.png";
import classic11 from "../../../assets/caroussel/classic/11.png";
import classic12 from "../../../assets/caroussel/classic/12.png";
import classic13 from "../../../assets/caroussel/classic/13.png";
import classic14 from "../../../assets/caroussel/classic/14.png";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ClassicCaroussel = () => {
  const { t } = useTranslation();

  return (
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
          alignSelf={["center", "inherit", "inherit"]}
          fontSize={[20, 26, 32]}
        >
          {t("projetos.apartamentoClassico.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
          fontSize={[12, 14, 14]}
          maxWidth={["100%", 600, 600]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoClassico.progress")}
        </Styled.Progress>
        <Styled.Description
          fontSize={[12, 14, 18]}
          width={["280px", "730px", "450px"]}
          maxWidth={[280, 730, 450]}
          textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoClassico.description")}
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
              src={classic1}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic2}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic3}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic4}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic5}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic6}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic7}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic8}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic9}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic10}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic11}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic12}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic13}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={classic14}
              width={window.innerWidth < 1200 ? 380 : 750}
              style={{ maxHeight: 281.25 }}
            />
          </SwiperSlide>
        </Swiper>
      </Styled.Carroussel>
    </>
  );
};

export default ClassicCaroussel;
