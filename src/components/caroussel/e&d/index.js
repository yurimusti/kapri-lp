import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import casa from "../../../assets/caroussel/e&d/casa.jpg"
import casa2 from "../../../assets/caroussel/e&d/casa2.jpg"
import casa3 from "../../../assets/caroussel/e&d/casa3.jpg"
import casa4 from "../../../assets/caroussel/e&d/casa4.jpg"
import casa5 from "../../../assets/caroussel/e&d/casa5.jpg"
import casa6 from "../../../assets/caroussel/e&d/casa6.jpg"
import casa7 from "../../../assets/caroussel/e&d/casa7.jpg"
import casa8 from "../../../assets/caroussel/e&d/casa8.jpg"
import casa9 from "../../../assets/caroussel/e&d/casa9.jpg"
import casa10 from "../../../assets/caroussel/e&d/casa10.jpg"
import casa11 from "../../../assets/caroussel/e&d/casa11.jpg"
import casa12 from "../../../assets/caroussel/e&d/casa12.jpg"
import casa13 from "../../../assets/caroussel/e&d/casa13.jpg"
import casa14 from "../../../assets/caroussel/e&d/casa14.jpg"
import casa15 from "../../../assets/caroussel/e&d/casa15.jpg"
import casa16 from "../../../assets/caroussel/e&d/casa16.jpg"

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const EqualityCaroussel = () => {

  const { t } = useTranslation();

  return( 
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
        alignSelf={["center", "center", "inherit"]}
        fontSize={[20, 26, 32]}
        >
          {t("projetos.equalityDiversity.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
        fontSize={[12, 14, 14]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.equalityDiversity.progress")}
        </Styled.Progress>
        <Styled.Description
        fontSize={[12, 16, 18]}
        width={["280px", "730px", "450px"]}
        maxWidth={[280, 730, 450]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.equalityDiversity.description")}
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

          <SwiperSlide>  <img src={casa} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa2} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa3} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa4} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa5} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa6} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa7} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa8} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa9} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa10} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa11} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa12} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa13} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa14} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa15} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>
          <SwiperSlide>  <img src={casa16} width={window.innerWidth < 1200  ? 380 : 750} /> </SwiperSlide>

        </Swiper>
      </Styled.Carroussel>
    </>
  )
} 

export default EqualityCaroussel;
