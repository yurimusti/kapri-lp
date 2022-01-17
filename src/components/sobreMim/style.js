import styled from "styled-components";
import { layout, typography, flex, position, space } from "styled-system";

export const BoxSobremim = styled.div`
  ${layout}
  display: flex;
  flex-direction: row;
  width: 100%;
  /* min-height: 80vh; */
  background: #fafafa;
  position: relative;
`;

export const ImageContainer = styled.div`
  ${position}
  ${layout}
  position: absolute;
  /* bottom: 0; */
  /* left: 110px; */
  z-index: 5;
`;

export const Image = styled.img`
  ${layout}
`;

export const InfoContainer = styled.div`
  ${position}
  ${space}
  ${layout}
  position: absolute;
  width: 100%;
  background: rgba(177, 121, 113, 0.2);
  z-index: 4;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  ${space}
  margin-bottom: 24px;
`;

export const Title = styled.span`
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;

  color: #925953;
`;

export const DescriptionContainer = styled.div`
  ${space}
  margin-bottom: 24px;
`;

export const Description = styled.span``;

export const DescriptionInfo = styled.span`
  ${space}
  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;

export const Nome = styled.b`
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */

  color: #333333;
`;

export const Profissao = styled.span`
  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #333333;
`;
