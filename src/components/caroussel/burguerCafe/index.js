import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import burguerImg1 from "../../../assets/caroussel/burguerCafe/burguer1.jpg"
import burguerImg2 from "../../../assets/caroussel/burguerCafe/burguer2.jpg"
import burguerImg3 from "../../../assets/caroussel/burguerCafe/burguer3.jpg"
import burguerImg4 from "../../../assets/caroussel/burguerCafe/burguer4.jpg"
import burguerImg5 from "../../../assets/caroussel/burguerCafe/burguer5.jpg"
import burguerImg6 from "../../../assets/caroussel/burguerCafe/burguer6.jpg"
import burguerImg7 from "../../../assets/caroussel/burguerCafe/burguer7.jpg"

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const BurgerCafeCaroussel = () => {

  const { t } = useTranslation();

  return( 
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
        alignSelf={["center", "center", "inherit"]}
        fontSize={[20, 26, 32]}
        >
          {t("projetos.burguerCafe.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
        fontSize={[12, 14, 14]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.burguerCafe.progress")}
        </Styled.Progress>
        <Styled.Description
        fontSize={[12, 16, 18]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.burguerCafe.description")}
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

          <SwiperSlide><img src={burguerImg1} width={750} /></SwiperSlide>
          <SwiperSlide><img src={burguerImg2} width={750} /></SwiperSlide>
          <SwiperSlide><img src={burguerImg3} width={750} /></SwiperSlide>
          <SwiperSlide><img src={burguerImg4} width={750} /></SwiperSlide>
          <SwiperSlide><img src={burguerImg5} width={750} /></SwiperSlide>
          <SwiperSlide><img src={burguerImg6} width={750} /></SwiperSlide>
          <SwiperSlide><img src={burguerImg7} width={750} /></SwiperSlide>

        </Swiper>
      </Styled.Carroussel>
    </>
  ) 
}   

export default BurgerCafeCaroussel;