import styled from "styled-components";
import { layout, typography, space } from "styled-system";

export const Main = styled.div`
  ${layout}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background: #272425;
  padding: 0px 144px;
  position: fixed;
  z-index: 10;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  .antD {
    margin-bottom: 3px;
  }

`;

export const NavTitles = styled.div`
  ${layout}
  ${typography}
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: 0.3s;
 
`

export const Title = styled.a`
    position: relative;
    cursor: pointer;
    margin: 0px 25px;
    font-size: 15px;
    margin: 0px 15px;
    color: #fff;
    opacity: 0.7;
    text-decoration: none;
    transition: 0.5s;
 
     &:after{
       content: "";
       position: absolute;
       background: #b17971;
       height: 3px;
       width: 0;
       left: 0;
       bottom: -5px;
       transition: 0.3s;
     }
 
     :hover {
      color: #fff;
      opacity: 1
     }

     &:hover:after {
       width: 100%;
     }
`

export const Image = styled.img`
  ${layout}
  ${space}
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.a`
`;

export const globalIcon = styled.img`
  width: 21%;
  /* padding: 64px; */
`;

export const DropLanguage = styled.div`
  ${layout}
  display: flex;
  align-content: center;
  margin-bottom: 3px;
`;