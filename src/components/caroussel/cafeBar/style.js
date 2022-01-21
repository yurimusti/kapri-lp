import styled from "styled-components";
import { layout, typography, flexbox, position, space } from "styled-system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
`

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
`;


export const Carroussel = styled.div`
  ${layout}
  ${space}
  width: 100%;
  margin-top: 45px;
  
  .swiper-container {
    height: 480px;
    
    .swiper-wrapper{

      .swiper-slide{
        transition: 0.5s;
      }
      .swiper-slide-next {
        transform: scale(0.9);
      }
    }

    img {
      border-radius: 10px;
      border: 0px solid #fff;
      -webkit-box-shadow: 29px 6px 32px -11px rgba(0,0,0,0.39); 
      box-shadow: 29px 6px 32px -11px rgba(0,0,0,0.39);
    }
  }
  
  .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    padding: 0px 46px;
  }

  .swiper-pagination-fraction {
    display: flex;
    font-family: Roboto;
    color: black;
    gap: 4px;
  }

  .swiper-container-horizontal > .swiper-pagination-fraction.swiper-pagination-fraction {

    //@media (max-width: 600px) {
    //  left: 55%;
    //}
    //@media (max-width: 768px) {
    //  left: 55%;
    //}
  }
  .swiper-button-prev,
    .swiper-button-next {
      cursor: pointer;
      display: block;
      color: black;
      top: 97.4%;
    }

    .swiper-button-prev {
      left: 16px;
    }
    .swiper-button-next {
      left: 96px;
    }

    .swiper-button-prev:after, .swiper-button-next:after {
      font-size: 14px;
    }

    .swiper-wrapper {
      padding: 0px 15px;
    }

`;