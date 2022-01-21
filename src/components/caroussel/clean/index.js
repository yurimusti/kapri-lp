import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import clean1 from "../../../assets/caroussel/clean/clean1.jpg"
import clean2 from "../../../assets/caroussel/clean/clean2.jpg"
import clean3 from "../../../assets/caroussel/clean/clean3.jpg"
import clean4 from "../../../assets/caroussel/clean/clean4.jpg"
import clean5 from "../../../assets/caroussel/clean/clean5.jpg"
import clean6 from "../../../assets/caroussel/clean/clean6.jpg"
import clean7 from "../../../assets/caroussel/clean/clean7.jpg"


import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const CleanCaroussel = () => {
  
  const { t } = useTranslation();

  return( 
    <>
      <Styled.DescriptionContainer>
        <Styled.ProjectTitle
        alignSelf={["center", "center", "inherit"]}
        fontSize={[20, 26, 32]}
        >
          {t("projetos.apartamentoClean.title")}
        </Styled.ProjectTitle>
        <Styled.Progress
        fontSize={[12, 14, 14]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoClean.progress")}
        </Styled.Progress>
        <Styled.Description
        fontSize={[12, 16, 18]}
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoClean.description")}
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

          <SwiperSlide><img src={clean1} width={750} /> </SwiperSlide>
          <SwiperSlide><img src={clean2} width={750} /></SwiperSlide>
          <SwiperSlide><img src={clean3} width={750} /></SwiperSlide>
          <SwiperSlide><img src={clean4} width={750} /></SwiperSlide>
          <SwiperSlide><img src={clean5} width={750} /></SwiperSlide>
          <SwiperSlide><img src={clean6} width={750} /></SwiperSlide>
          <SwiperSlide><img src={clean7} width={750} /></SwiperSlide>

        </Swiper>
      </Styled.Carroussel>
    </>
  )
} 

export default CleanCaroussel;
