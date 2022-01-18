import React from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./style";
import { useState } from "react";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

import apartamentoClassicoImage from "../../assets/apartamentoClassico.png"
import apartamentoCleanImage from "../../assets/apartamentoClean.png"
import cafeBarImage from "../../assets/cafeBar.png"
import burgerCafeImage from "../../assets/burguerCafe.png"
import apartamentoRetroImage from "../../assets/apartamentoRetro.png"

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Projects = () => {

  const { t } = useTranslation();
  
  const [selected, setSelected] = useState("apartamentoClassico")

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <Styled.BoxProjects id="projects"
    height={["220vh", "140vh", "140vh"]}
    >

      <Styled.NavContainer>
        <Styled.Title 
        pl={[44, 44, 144]}
        pr={[44, 44, 144]}
        mt={[60, 60, 0]}
        fontSize={[20, 26, 32]}
        >
          {t("projetos.section")}
        </Styled.Title>

        <Styled.TitleContainer
        pl={[40, 40, 140]}
        pr={[40, 40, 140]}
         >

          <Swiper
          spaceBetween={1}
          slidesPerView={2}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
           }}
          >
            <SwiperSlide className="slide">
              <Styled.NavTitle fontSize={[8, 12, 16]}
              onClick={() => setSelected("apartamentoClassico")}
              >
                {t("projetos.apartamentoClassico.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle fontSize={[8, 12, 16]}
              onClick={() => setSelected("apartamentoClean")}
              >
                {t("projetos.apartamentoClean.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle fontSize={[8, 12, 16]}
              onClick={() => setSelected("burguerCafe")}
              >
                {t("projetos.burguerCafe.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>

            <Styled.NavTitle fontSize={[8, 12, 16]}
              onClick={() => setSelected("cafeBar")}
              >
               {t("projetos.cafeBar.title")}
              </Styled.NavTitle>
            </SwiperSlide>

            <SwiperSlide>
              <Styled.NavTitle fontSize={[8, 12, 16]}
              onClick={() => setSelected("apartamentoRetro")}
              >
                {t("projetos.apartamentoRetro.title")}
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
      alignItems={["center", "flex-start", "flex-start" ]}
      >
        {selected === "apartamentoClassico" && (
          <>
            <Styled.DescriptionContainer>
              <Styled.ProjectTitle 
              alignSelf={["center", "inherit", "inherit"]}
              fontSize={[20, 26, 32]}
              >
                {t("projetos.apartamentoClassico.title")}
              </Styled.ProjectTitle>

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
              clickable: true,
              dynamicBullets: true,
             }}
            effect={"coverflow"}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false
            }}
            >

              <SwiperSlide>
                <img src={apartamentoClassicoImage} width={750} /> 
              </SwiperSlide>

              <SwiperSlide>
                <img src={apartamentoClassicoImage} width={750} /> 
              </SwiperSlide>

              <SwiperSlide>
                <img src={apartamentoClassicoImage} width={750} /> 
              </SwiperSlide>

              <SwiperSlide>
                <img src={apartamentoClassicoImage} width={750} /> 
              </SwiperSlide>

            </Swiper>
          </Styled.Carroussel>
         </>
        )}

        {selected === "apartamentoClean" && (
          <>
            <Styled.DescriptionContainer>
              <Styled.ProjectTitle
              alignSelf={["center", "center", "inherit"]}
              fontSize={[20, 26, 32]}
              >
                {t("projetos.apartamentoClean.title")}
              </Styled.ProjectTitle>
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
                clickable: true,
                dynamicBullets: true,
               }}
              effect={"coverflow"}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }}
              >
              
                <SwiperSlide>
                  <img src={apartamentoCleanImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={apartamentoCleanImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={apartamentoCleanImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={apartamentoCleanImage} width={750} /> 
                </SwiperSlide>
            
              </Swiper>
            </Styled.Carroussel>
          </>
        )}

        {selected === "burguerCafe" && (
          <>
            <Styled.DescriptionContainer>
              <Styled.ProjectTitle
              alignSelf={["center", "center", "inherit"]}
              fontSize={[20, 26, 32]}
              >
                {t("projetos.burguerCafe.title")}
              </Styled.ProjectTitle>
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
                clickable: true,
                dynamicBullets: true,
               }}
              effect={"coverflow"}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }}
              >
              
                <SwiperSlide>
                  <img src={burgerCafeImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={burgerCafeImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={burgerCafeImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={burgerCafeImage} width={750} /> 
                </SwiperSlide>
            
              </Swiper>
            </Styled.Carroussel>
          </>
        )}

        {selected === "cafeBar" && (
          <>
            <Styled.DescriptionContainer>
              <Styled.ProjectTitle
              alignSelf={["center", "center", "inherit"]}
              fontSize={[20, 26, 32]}
              >
                {t("projetos.cafeBar.title")}
              </Styled.ProjectTitle>
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
                clickable: true,
                dynamicBullets: true,
               }}
              effect={"coverflow"}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }}
              >
              
                <SwiperSlide>
                  <img src={cafeBarImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={cafeBarImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={cafeBarImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={cafeBarImage} width={750} /> 
                </SwiperSlide>
            
              </Swiper>
            </Styled.Carroussel>
          </>
        )}

        {selected === "apartamentoRetro" && (
          <>
            <Styled.DescriptionContainer>
              <Styled.ProjectTitle
              alignSelf={["center", "center", "inherit"]}
              fontSize={[20, 26, 32]}
              >
                {t("projetos.apartamentoRetro.title")}
              </Styled.ProjectTitle>
              <Styled.Description
              fontSize={[12, 16, 18]}
              maxWidth={[300, 400, 600]}
              textAlign={["center", "inherit", "inherit"]}
              >
                {t("projetos.apartamentoRetro.description")}
              </Styled.Description>
            </Styled.DescriptionContainer>
            <Styled.Carroussel
              pt={["50px", "100px", "100px"]}
              ml={["0px", "100px", "100px"]}
              >
              <Swiper
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
               }}
              effect={"coverflow"}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }}
              >
              
                <SwiperSlide>
                  <img src={apartamentoRetroImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={apartamentoRetroImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={apartamentoRetroImage} width={750} /> 
                </SwiperSlide>
            
                <SwiperSlide>
                  <img src={apartamentoRetroImage} width={750} /> 
                </SwiperSlide>
            
              </Swiper>
            </Styled.Carroussel>
          </>
        )}
      
      </Styled.ProjectContainer>
      
    </Styled.BoxProjects>
  );
};

export default Projects;