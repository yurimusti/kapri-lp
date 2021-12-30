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
  position: absolute;
  z-index: 3;
  margin-left: 138px;
  margin-top: 60px;
`;

export const Image2 = styled.img`
  position: absolute;
  z-index: 4;
  bottom: 0;
  right: 0;
  margin-bottom: 85px;
  border: 1px solid #fff;
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
