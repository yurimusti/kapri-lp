import styled from "styled-components";
import { layout, typography } from "styled-system";

export const BoxEspecialistaMain = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px;
`;

export const BoxIcon = styled.div`
  ${layout}
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const Title = styled.span`
  ${typography}
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;

  color: #333333;
`;

export const Description = styled.span`
  margin-top: 16px;
  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 125%;

  color: #757575;
`;
