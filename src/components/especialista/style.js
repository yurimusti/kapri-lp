import styled from "styled-components";
import {
  layout,
  typography,
  flex,
  grid,
  space,
  position,
  flexbox,
} from "styled-system";

export const BoxEspecialista = styled.div`
  ${typography}
  ${flex}
  ${layout}
  ${grid}
  ${space}
  ${position}
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
`;

export const BoxLeft = styled.div`
  ${typography}
  ${flex}
  ${layout}
  ${grid}
  ${space}
  ${position}
  flex: 1;
  position: relative;
`;

export const Image1 = styled.img`
  -webkit-box-shadow: 10px 9px 34px 9px rgba(0,0,0,0.35); 
  box-shadow: 10px 9px 34px 9px rgba(0,0,0,0.35);
  border-radius: 10px;
  position: absolute;
  z-index: 3;
  margin-left: 138px;
  margin-top: 60px;
  width: 60%
`;

export const Image2 = styled.img`
  border-radius: 5px;
  border: none;
  position: absolute;
  z-index: 4;
  width: 40%;
  bottom: 0;
  right: 0;
  margin-bottom: 85px;
  -webkit-box-shadow: 10px 9px 34px 9px rgba(0,0,0,0.32); 
  box-shadow: 10px 9px 34px 9px rgba(0,0,0,0.32);
`;

export const BoxRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  ${typography}
  ${flex}
  ${flexbox}
  ${layout}
  ${grid}
  ${space}
  ${position}
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Title = styled.span`
  ${typography}
  ${space}
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  line-height: 36px;
  color: #333333;
`;

export const InfoContainer = styled.div`
  ${typography}
  ${flex}
  ${layout}
  ${grid}
  ${space}
  ${position}
  flex: 8;
  display: grid;
  padding-right: 32px;
`;
