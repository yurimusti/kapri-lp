import styled from "styled-components";
import { layout, typography, flexbox, position, space } from "styled-system";

export const BoxProjects = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fafafa;
  overflow: hidden;
`;

export const NavContainer = styled.div`
  ${position}
  ${layout}
  ${space}
  ${typography}
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  ${position}
  ${layout}
  ${typography}
  ${space}
  display: flex;
  margin-top: 40px;
  margin-bottom: 24px;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;

  .swiper-wrapper{
    padding: 0px 200px;
  }

  @media (max-width: 1500px) {
    .swiper-wrapper{
        padding: 0px 140px;
      }
  }

  @media (max-width: 1200px) {
    .swiper-wrapper{
        padding: 0px 90px;
      }
  }

  @media (max-width: 980px) {
    .swiper-wrapper{
        padding: 0px 50px;
      }
  }

  @media (max-width: 880px) {
    .swiper-wrapper{
        padding: 0px 30px;
      }
  }
  
  @media (max-width: 768px) { 
    .swiper-wrapper{
      padding: 0px 20px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: black;
    
    @media (max-width: 642px) {
      top: 12px;
    }
  }

  .swiper-button-prev {
    left: -5px;
  }
  .swiper-button-next {
    right: -5px;
  }

  .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 14px;
  }

`;

export const NavTitle = styled.button`
  ${typography}
  cursor: pointer;
  font-family: Nova;
  font-weight: bold;
  color: #989898;
  font-size: 12px;
  border: 0px;
  background-color: transparent;
  transition: 0.5s;

  :hover {
    color: black;
  }

  @media (max-width: 642px) {
    font-size: 10px;
  }
  
`;

export const Title = styled.div`
  ${space}
  ${typography}
  font-family: Nova;
  font-weight: bold;
  font-size: 32px;
  color: #333333;
`;

export const ProjectContainer = styled.div`
  ${space}
  ${flexbox}
  ${typography}
  display: flex;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleProject = styled.span`
  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  opacity: 0.7;
`;

export const ProjectTitle = styled.span`
  ${typography}
  ${flexbox}
  font-family: Nova;
  font-weight: bold;
  font-size: 28px;
  line-height: 150%;
  color: #333333;
  margin-bottom: 30px;
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

  //  @media (max-width: 600px) {
  //    left: 90%;
  //  }
  //  @media (max-width: 768px) {
  //    left: 25%;
  //  }
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