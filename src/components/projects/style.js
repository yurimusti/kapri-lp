import styled from "styled-components";
import { layout, typography, flexbox, position, space } from "styled-system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BoxProjects = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background: #fafafa;
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
  justify-content: space-between;
`;

export const NavTitle = styled.button`
  ${typography}
  cursor: pointer;
  font-family: Nova;
  font-weight: bold;
  color: #989898;
  font-size: 16px;
  border: 0px;
  background-color: transparent;
  transition: 0.5s;

  :hover {
    color: black;
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
  width: 100%;
  height: 100%;
  padding: 100px 0px;
  margin-left: 100px;

  .slide img {
    width: 700px;
  }
  
  .slide {
    transform: scale(0.7);
    transition: transform 800ms;
    opacity: 0.5;
  }
  
  .activeSlide {
    transform: scale(1);
    opacity: 1;
  }
  
`;