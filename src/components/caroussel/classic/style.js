import styled from "styled-components";
import { layout, typography, flexbox, position, space } from "styled-system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainContainer = styled.div`
`;

export const ProjectTitle = styled.span`
  ${typography}
  ${flexbox}
  font-family: Nova;
  font-weight: bold;
  font-size: 28px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 5px;
`;

export const Progress = styled.span`
  ${typography}
  ${layout}
  font-style: italic;
  font-size: 12px;
  color: black;
  opacity: 0.4;
`;

export const ProjectContainer = styled.div`
  ${space}
  ${flexbox}
  ${typography}
  display: flex;
`;

export const DescriptionContainer = styled.div`
  ${space}
  ${typography}
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Description = styled.span`
  ${typography}
  ${layout}
  font-family: Nova;
  font-weight: normal;
  font-size: 16px;
  margin-top: 30px;
  line-height: 200%;
  color: #333333;
  opacity: 0.7;
  width: 400px;

  @media (max-width: 1200px) {
    width: 700px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    width: 280px;
    max-width: 280px;
  }
`;

export const Carroussel = styled.div`
  ${layout}
  ${space}
  width: 100%;

  @media (max-width: 1200px) {
    margin-left: 0px;
  }


  @media (max-width: 520px) {
    margin-left: 0px;
  }
  
  .swiper-container {
    height: 540px;
    
    .swiper-wrapper{

    .swiper-wrapper {
      .swiper-slide {
        transition: 0.5s;
        padding-top: 45px;

      }
      .swiper-slide-next {
        transform: scale(0.9);
      }
    }

    img {
      border-radius: 10px;
      border: 0px solid #fff;
      width: 750px;
      -webkit-box-shadow: 44px 15px 50px 0px rgba(0,0,0,0.17);
      -moz-box-shadow: 44px 15px 50px 0px rgba(0,0,0,0.17);
      box-shadow: 44px 15px 50px 0px rgba(0,0,0,0.17);

      @media (max-width: 1350px) {
        width: 650px;
        -webkit-box-shadow: 13px 1px 50px 0px rgba(0,0,0,0.17);
        -moz-box-shadow: 13px 1px 50px 0px rgba(0,0,0,0.17);
        box-shadow: 13px 1px 50px 0px rgba(0,0,0,0.17);
      }

      @media (max-width: 1200px) {
        width: 500px;
        -webkit-box-shadow: 13px 1px 50px 0px rgba(0,0,0,0.17);
        -moz-box-shadow: 13px 1px 50px 0px rgba(0,0,0,0.17);
        box-shadow: 13px 1px 50px 0px rgba(0,0,0,0.17);
      }

      @media (max-width: 678) {
        width: 500px;
        -webkit-box-shadow: 54px 15px 50px 0px rgba(0,0,0,0.17);
        -moz-box-shadow: 54px 15px 50px 0px rgba(0,0,0,0.17);
        box-shadow: 54px 15px 50px 0px rgba(0,0,0,0.17);
      }
    }
  }

  .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    padding: 0px 46px;
    
    @media (max-width: 1350px) {
      display: flex;
      top: 80.3%;
      padding: 0px 38px;
      justify-content: flex-start;
    }

    @media (max-width: 1200px) {
        display: flex;
        justify-content: flex-start;
        top: 65.3%;
        padding: 0px 38px;
      }
  }

  .swiper-pagination-fraction {
    display: flex;
    font-family: Roboto;
    color: black;
    gap: 4px;
  }

  .swiper-container-horizontal > .swiper-pagination-fraction.swiper-pagination-fraction {

    @media (max-width: 1200px) { 
      top: 63.7%;
      left: -2%;
    }

    @media (max-width: 640px) {
      left: 40%;
      top: 65.8%;
    }

    @media (max-width: 390px) {
      left: 36%;
      top: 65.8%;
    }

  }
  .swiper-button-prev,
    .swiper-button-next {
      cursor: pointer;
      display: block;
      color: black;
      top: 97.4%;

      @media (max-width: 1350px) {
        top: 84.3%;
        left: -2%;
      }

      @media (max-width: 1200px) {
        top: 68%;
      }

      @media (max-width: 640px) {
        top: 70%;
      }
    }

    .swiper-button-prev {
      left: 16px;

      @media (max-width: 1200px) {
        left: 0px;
      }
      
      @media (max-width: 768px) {
        left: 5px;
      }

      @media (max-width: 640px) {
        left: 42%;
      }

    }

    .swiper-button-next {
      left: 98px;

      @media (max-width: 1350px) {  
        left: 83px;
      } 

      @media (max-width: 1200px) {
        left: 70px;
      }

      @media (max-width: 640px) {
        left: 55%;
      }

      @media (max-width: 530px) {
        left: 58%;
      }

      @media (max-width: 450px) {
        left: 63%;
      }

      @media (max-width: 390px) {
        left: 58%;
      }

    }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 14px;
  }

    .swiper-wrapper {
      padding: 0px 15px;

      @media (max-width: 1200px) {
        padding: 0px 0px;
      }
    }

`;
