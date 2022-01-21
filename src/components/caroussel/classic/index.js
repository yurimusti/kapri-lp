import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";

import corredorEspelho from "../../../assets/caroussel/classic/corredorEspelho.png"
import corredorFoto from "../../../assets/caroussel/classic/corredorFoto.png"
import escritorio1 from "../../../assets/caroussel/classic/escritorio1.png"
import escritorio2 from "../../../assets/caroussel/classic/escritorio2.png"
import quarto1 from "../../../assets/caroussel/classic/quarto1.png"
import quarto2 from "../../../assets/caroussel/classic/quarto2.png"
import quarto3 from "../../../assets/caroussel/classic/quarto3.png"
import quarto4 from "../../../assets/caroussel/classic/quarto4.png"
import sala from "../../../assets/caroussel/classic/sala.png"
import salaEstarJantar from "../../../assets/caroussel/classic/salaEstarJantar.png"
import salaEstarJantar2 from "../../../assets/caroussel/classic/salaEstarJantar2.png"
import salaJantar from "../../../assets/caroussel/classic/salaJantar.png"
import salaJantar2 from "../../../assets/caroussel/classic/salaJantar2.png"

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ClassicCaroussel = () => {

  const { t } = useTranslation();

  return( 
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
        maxWidth={[300, 400, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoClassico.progress")}
        </Styled.Progress>
        <Styled.Description 
        fontSize={[12, 14, 18]}
        maxWidth={[300, 300, 600]}
        textAlign={["center", "inherit", "inherit"]}
        >
          {t("projetos.apartamentoClassico.description")}
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

          <SwiperSlide><img src={corredorEspelho} width={750} /> </SwiperSlide>
          <SwiperSlide><img src={corredorFoto} width={750} /></SwiperSlide>
          <SwiperSlide><img src={escritorio1} width={750} /></SwiperSlide>
          <SwiperSlide><img src={escritorio2} width={750} /></SwiperSlide>
          <SwiperSlide><img src={quarto1} width={750} /></SwiperSlide>
          <SwiperSlide><img src={quarto2} width={750} /></SwiperSlide>
          <SwiperSlide><img src={quarto3} width={750} /></SwiperSlide>
          <SwiperSlide><img src={quarto4} width={750} /></SwiperSlide>
          <SwiperSlide><img src={sala} width={750} /></SwiperSlide>
          <SwiperSlide><img src={salaEstarJantar2} width={750} /></SwiperSlide>
          <SwiperSlide><img src={salaJantar2} width={750} /></SwiperSlide>
          
        </Swiper>
      </Styled.Carroussel>
    </>
  )
} 

export default ClassicCaroussel;
