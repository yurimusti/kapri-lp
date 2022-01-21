import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import cafeBar from "../../../assets/caroussel/cafeBar/cafeBar.png"
import cafeBar2 from "../../../assets/caroussel/cafeBar/cafeBar2.png"
import cafeBar3 from "../../../assets/caroussel/cafeBar/cafeBar3.png"
import cafeBar4 from "../../../assets/caroussel/cafeBar/cafeBar4.png"
import cafeBar5 from "../../../assets/caroussel/cafeBar/cafeBar5.png"
import cafeBar6 from "../../../assets/caroussel/cafeBar/cafeBar6.png"

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const CafeBarCaroussel = () => {

  const { t } = useTranslation();

  return( 
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
        alignSelf={["center", "center", "inherit"]}
        fontSize={[20, 26, 32]}
        >
          {t("projetos.cafeBar.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
        fontSize={[12, 14, 14]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.cafeBar.progress")}
        </Styled.Progress>
        <Styled.Description
        fontSize={[12, 16, 18]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.cafeBar.description")}
        </Styled.Description>
      </Styled.DescriptionContainer>

        <Styled.Carroussel
        pt={["50px", "100px", "100px"]}
        ml={["0px", "100px", "100px"]}
        >
          <Swiper
          pagination={{ 
            type: "fraction",
          }}
          navigation
          //effect={"coverflow"}
          spaceBetween={50}
          slidesPerView={window.innerWidth < 768 ? 1 : 2}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          >

          <SwiperSlide> <img src={cafeBar} width={750} /> </SwiperSlide>
          <SwiperSlide> <img src={cafeBar2} width={750} /> </SwiperSlide>
          <SwiperSlide> <img src={cafeBar3} width={750} /> </SwiperSlide>
          <SwiperSlide> <img src={cafeBar4} width={750} /> </SwiperSlide>
          <SwiperSlide> <img src={cafeBar5} width={750} /> </SwiperSlide>
          <SwiperSlide> <img src={cafeBar6} width={750} /> </SwiperSlide>

        </Swiper>
      </Styled.Carroussel>
    </>
  )
} 

export default CafeBarCaroussel;
