import styled from "styled-components";
import { layout, typography, flexbox, position, space } from "styled-system";

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
    width: 500px;
    max-width: 500px;
  }

  @media (max-width: 642px) {
    width: 380px;
    max-width: 380px;
  }

  @media (max-width: 390px) {
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

      @media (max-width: 1500px) {
        width: 500px;
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
    padding: 0px 44px;
    
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
        padding: 0px 34px;
      }
  }

  .swiper-pagination-fraction {
    display: flex;
    font-family: Roboto;
    color: black;
    gap: 4px;
  }

  .swiper-container-horizontal > .swiper-pagination-fraction.swiper-pagination-fraction {

    z-index: -10;
    top: 90.1%;

    @media (max-width: 1500px) {
        top: 62%;
        left: -0.2%;
      }

    @media (max-width: 1200px) { 
      top: 63.7%;
      left: -2%;
      z-index: -10;
    }

    @media (max-width: 640px) {
      left: 40%;
      top: 75.9%;
      z-index: -10;
    }

    @media (max-width: 440px) {
      left: 36%;
      top: 65.8%;
      z-index: -10;
    }

    @media (max-width: 380px) {
      left: 36%;
      top: 56.8%;
      z-index: -10;
    }

  }
  .swiper-button-prev,
    .swiper-button-next {
      cursor: pointer;
      display: block;
      color: black;
      top: 94.4%;      

      @media (max-width: 1500px) {
        top: 66.3%;
        left: -2%;
      }

      @media (max-width: 1200px) {
        top: 68%;
      }

      @media (max-width: 640px) {
        top: 80%;
      }

      @media (max-width: 440px) {
        top: 70%;
      }

      @media (max-width: 380px) {
        top: 61.1%;
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
        left: 40%;
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

      @media (max-width: 440px) {
        left: 55%;
      }

      @media (max-width: 390px) {
        left: 56%;
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

      img {
        @media (max-width: 640px) {
          width: 100%;  
        }
      }
    }
`;
